"use client";
import useAccount from "@/hooks/use-account";
import useDeploy from "@/hooks/use-deploy";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { ComponentProps, FC, useEffect, useMemo, useState } from "react";
import { Address, isAddress } from "viem";

interface ButtonProps extends ComponentProps<typeof Button> {
  onToggleDialog: () => void;
}

const DeployManagerButton: FC<ButtonProps> = ({
  onToggleDialog,
  hidden,
  ...props
}) => {
  return (
    <Button
      style={{
        display: hidden ? "none" : undefined,
      }}
      {...props}
      onClick={onToggleDialog}
    />
  );
};

interface DialogProps extends ComponentProps<typeof Dialog.Root> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DeployManagerDialog: FC<DialogProps> = ({
  open,
  onOpenChange,
  ...props
}) => {
  const { address } = useAccount();
  const deploy = useDeploy(address);
  const addRecentTransaction = useAddRecentTransaction();
  const [initialAdmin, setInitialAdmin] = useState<Address>();
  const [deploying, setDeploying] = useState(false);

  useEffect(() => {
    if (!initialAdmin && address) setInitialAdmin(address);
  }, [address, initialAdmin]);

  const deployManager = async () => {
    setDeploying(true);
    try {
      const hash = await deploy.manager(initialAdmin);

      if (hash) {
        addRecentTransaction({
          hash,
          description: "Deploy Manager",
        });

        if (typeof window.gtag !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID?.length != 0) {
          window.gtag('event', 'deploy', {
            'send_to': process.env.NEXT_PUBLIC_GA_ID as string,
            'hash': hash
          });
        }
      }
    } catch {
    } finally {
      setDeploying(false);
      onOpenChange(false);
    }
  };

  const isValidAddress = useMemo(
    () => isAddress(initialAdmin ?? ""),
    [initialAdmin]
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Deploy an AccessManager</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Initial Admin
            </Text>
            <TextField.Input
              value={initialAdmin}
              onChange={(event) =>
                setInitialAdmin(event.target.value as Address)
              }
              placeholder="0x..."
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button disabled={!isValidAddress} onClick={deployManager}>
            {deploying ? "Deploying..." : "Deploy"}
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

interface DeployManager
  extends FC<
    Pick<Partial<ButtonProps>, "onToggleDialog"> &
    Omit<ButtonProps, "onToggleDialog">
  > {
  Button: FC<ButtonProps>;
  Modal: FC<DialogProps>;
}

const DeployManager: DeployManager = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const { address } = useAccount();

  return (
    <>
      <DeployManagerButton
        hidden={!address}
        onToggleDialog={() => setOpen(!open)}
        {...props}
      />
      <DeployManagerDialog onOpenChange={setOpen} open={open} />
    </>
  );
};

DeployManager.Button = DeployManagerButton;
DeployManager.Modal = DeployManagerDialog;

export default DeployManager;
