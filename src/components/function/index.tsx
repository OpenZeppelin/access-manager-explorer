import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Code, Flex, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { join } from "path";
import { ComponentProps, FC } from "react";
import { ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT } from "./requests";
import { FragmentType, useFragment as asFragment } from "@/gql";
import { useSignatures } from "@/hooks/use-signature-database";
import { Hex } from "viem";
import { EntityInstance } from "@/providers/entities/provider";
import { useEntities } from "@/providers/entities";

type IconButtonProps = ComponentProps<typeof IconButton>;

interface IconProps {
  onDetail?: Omit<IconButtonProps, "type"> & EntityInstance;
}

interface Props extends ComponentProps<typeof Code> {
  method: FragmentType<typeof ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT>;
  icons?: IconProps;
}

const ellipsis = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
} as const;

const Selector: FC<Props> = ({ method: fn, icons, ...props }) => {
  const method = asFragment(ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT, fn);
  const pathname = usePathname();
  const { functionWithFallback } = useSignatures({
    function: [method.asSelector.id] as Hex[],
  });
  const entities = useEntities();

  const onDetailClick = () => {
    if (icons?.onDetail?.type && icons?.onDetail?.id) {
      entities.push({
        type: icons.onDetail.type,
        id: icons.onDetail.id,
      });
    }
  };

  return (
    <Flex align="center" style={ellipsis}>
      <Code
        key={method.id}
        style={{
          ...ellipsis,
          ...props?.style,
        }}
        {...props}
      >
        {functionWithFallback(method.asSelector.id)}
      </Code>
      {icons?.onDetail && (
        <IconButton
          ml="2"
          variant="ghost"
          color="gray"
          size="1"
          onClick={onDetailClick}
          {...icons.onDetail}
          type="button"
        >
          <ArrowRightIcon width="16" height="16" />
        </IconButton>
      )}
    </Flex>
  );
};

export default Selector;
