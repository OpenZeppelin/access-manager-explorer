import { ComponentProps, FC, useEffect, useRef, useState } from "react";
import { Addreth } from "addreth";
import { useTheme } from "next-themes";
import { useNetwork } from "wagmi";
import { join } from "path";
import { Flex, IconButton } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type IconButtonProps = ComponentProps<typeof IconButton>;

interface Props extends ComponentProps<typeof Flex> {
  addreth: ComponentProps<typeof Addreth>;
  navigation?: IconButtonProps & { id: string }; // TODO: Do something with this
  hidePopup?: boolean;
}

const Address: FC<Props> = ({ navigation, addreth, hidePopup, ...props }) => {
  const { theme } = useTheme();
  const { chain } = useNetwork();
  const ref = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (typeof addreth.theme === "string")
    addreth.theme = { base: addreth.theme };

  return (
    <Flex align="center" {...props}>
      <div ref={ref} style={{ display: "none" }}></div>
      <Addreth
        explorer={(address) => ({
          name: chain?.name ?? "Explorer",
          accountUrl: join(
            "https://",
            chain?.blockExplorers?.default.url ?? "",
            "addresss",
            address
          ),
        })}
        {...addreth}
        theme={{
          base: theme == "dark" ? "simple-dark" : "simple-light",
          ...addreth.theme,
        }}
        popupNode={hidePopup ? ref.current ?? undefined : undefined}
      />
      {!isSSR && navigation && (
        <IconButton
          variant="soft"
          color="gray"
          size="1"
          ml="1"
          {...navigation}
          asChild
        >
          <Link scroll={false} href={join(pathname, navigation.id)}>
            <ArrowRightIcon width="13" height="13" />
          </Link>
        </IconButton>
      )}
    </Flex>
  );
};

export default Address;
