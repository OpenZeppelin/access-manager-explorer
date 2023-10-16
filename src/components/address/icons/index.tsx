import { useClipboard } from "@/hooks/use-clipboard";
import { Flex, IconButton } from "@radix-ui/themes";
import { ComponentProps, FC, Suspense, useEffect, useState } from "react";
import Address from "..";
import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardCopyIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { useNetwork } from "wagmi";
import { join } from "path";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IconProps {
  etherscan?: IconButtonProps | boolean;
  copy?: IconButtonProps | boolean;
  navigate?: IconButtonProps & { id: string };
}

type IconButtonProps = ComponentProps<typeof IconButton>;

interface Props {
  icons?: IconProps;
  address: ComponentProps<typeof Address>["address"];
}

const Icons: FC<Props> = ({ icons, address }) => {
  const { onCopy, hasCopied } = useClipboard(address.value);
  const { chain } = useNetwork();
  const pathname = usePathname();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <Suspense>
      <Flex gap="2">
        {!isSSR && icons?.copy && (
          <IconButton
            variant="ghost"
            color="gray"
            size="1"
            onClick={onCopy}
            {...(icons?.copy == true ? {} : icons.copy)}
          >
            {hasCopied ? (
              <CheckIcon width="13" height="13" />
            ) : (
              <ClipboardCopyIcon width="13" height="13" />
            )}
          </IconButton>
        )}
        {!isSSR && icons?.etherscan && chain?.blockExplorers && (
          <IconButton
            variant="ghost"
            color="gray"
            size="1"
            {...(icons?.etherscan == true ? {} : icons.etherscan)}
            asChild
          >
            <Link
              href={join(
                chain.blockExplorers.default.url,
                "address",
                address.value
              )}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLinkIcon width="13" height="13" />
              <span className="sr-only">
                {chain.blockExplorers.default.name}
              </span>
            </Link>
          </IconButton>
        )}
        {!isSSR && icons?.navigate && (
          <IconButton
            variant="ghost"
            color="gray"
            size="1"
            {...(icons?.copy == true ? {} : icons.copy)}
            asChild
          >
            <Link scroll={false} href={join(pathname, icons.navigate.id)}>
              <ArrowRightIcon width="13" height="13" />
            </Link>
          </IconButton>
        )}
      </Flex>
    </Suspense>
  );
};

export default Icons;
