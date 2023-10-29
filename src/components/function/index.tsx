import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Code, Flex, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { join } from "path";
import { ComponentProps, FC } from "react";
import { ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT } from "./requests";
import { FragmentType, useFragment as asFragment } from "@/gql";
import { useSignatures } from "@/hooks/useSignatureDatabase";
import { Hex } from "viem";

type IconButtonProps = ComponentProps<typeof IconButton>;

interface IconProps {
  navigate?: IconButtonProps & { id: string };
}

interface Props extends ComponentProps<typeof Code> {
  method: FragmentType<typeof ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT>;
  icons?: IconProps;
}

const Selector: FC<Props> = ({ method: fn, icons, ...props }) => {
  const method = asFragment(ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT, fn);
  const pathname = usePathname();
  const { functionWithFallback } = useSignatures({
    function: [method.asSelector.id] as Hex[],
  });

  return (
    <Flex align="center">
      <Code key={method.id} {...props}>
        {functionWithFallback(method.asSelector.id)}
      </Code>
      {icons?.navigate && (
        <IconButton
          ml="2"
          variant="ghost"
          color="gray"
          size="1"
          {...icons.navigate}
          asChild
        >
          <Link scroll={false} href={join(pathname, icons.navigate.id)}>
            <ArrowRightIcon width="16" height="16" />
          </Link>
        </IconButton>
      )}
    </Flex>
  );
};

export default Selector;
