import { ComponentProps, FC, useEffect, useRef, useState } from "react";
import { Addreth } from "addreth";
import { useTheme } from "next-themes";
import { useNetwork } from "wagmi";
import { join } from "path";
import { Flex, IconButton } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEntities } from "@/providers/entities";
import { EntityInstance } from "@/providers/entities/provider";

type IconButtonProps = ComponentProps<typeof IconButton>;

interface Props extends ComponentProps<typeof Flex> {
  addreth: ComponentProps<typeof Addreth>;
  onDetail?: Omit<IconButtonProps, "type"> & EntityInstance;
  hidePopup?: boolean;
}

const Address: FC<Props> = ({ onDetail, addreth, hidePopup, ...props }) => {
  const { theme } = useTheme();
  const { chain } = useNetwork();
  const ref = useRef<HTMLDivElement>(null);

  const entities = useEntities();

  const [isSSR, setIsSSR] = useState(true);

  const onDetailClick = () => {
    if (onDetail?.type && onDetail?.id) {
      entities.push({
        type: onDetail.type,
        id: onDetail.id,
      });
    }
  };

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
          name: chain?.blockExplorers?.default.name ?? "Explorer",
          accountUrl: new URL(
            join("address", address),
            chain?.blockExplorers?.default.url ?? ""
          ).href,
        })}
        {...addreth}
        theme={{
          base: theme == "dark" ? "simple-dark" : "simple-light",
          ...addreth.theme,
        }}
        popupNode={hidePopup ? ref.current ?? undefined : undefined}
      />
      {!isSSR && onDetail && (
        <IconButton
          variant="soft"
          color="gray"
          size="1"
          ml="1"
          onClick={onDetailClick}
          {...onDetail}
          type="button"
        >
          <ArrowRightIcon width="13" height="13" />
        </IconButton>
      )}
    </Flex>
  );
};

export default Address;
