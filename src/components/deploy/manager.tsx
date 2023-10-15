import useDeploy from "@/hooks/use-deploy";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { ComponentProps, FC, useMemo, useState } from "react";
import { Address, isAddress } from "viem";
import { useAccount } from "wagmi";

interface Props extends ComponentProps<typeof Dialog.Root> {
  open: boolean;
}

const DeployManager: FC<Props> = ({ open, ...props }) => {
  const { address } = useAccount();
  const deploy = useDeploy(address);
  const addRecentTransaction = useAddRecentTransaction();
  const [initialAdmin, setInitialAdmin] = useState(address);

  const deployManager = async () => {
    const hash = await deploy.manager(initialAdmin);

    if (hash) {
      addRecentTransaction({
        hash,
        description: "Deploy Manager",
      });
    }
  };

  const isValidAddress = useMemo(
    () => isAddress(initialAdmin ?? ""),
    [initialAdmin]
  );

  return (
    <Dialog.Root open={open} {...props}>
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
          <Dialog.Close onClick={close}>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button disabled={!isValidAddress} onClick={deployManager}>
              Deploy
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DeployManager;
