import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Code, Flex, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { join } from "path";
import { ComponentProps, FC } from "react";

interface Selector {
  id: string;
}

interface AccessManagerFunction {
  id: string;
  asSelector: Selector;
}

type IconButtonProps = ComponentProps<typeof IconButton>;

interface IconProps {
  navigate?: IconButtonProps & { id: string };
}

interface Props extends ComponentProps<typeof Code> {
  method: AccessManagerFunction;
  icons?: IconProps;
}

const Selector: FC<Props> = ({ method, icons, ...props }) => {
  const pathname = usePathname();
  return (
    <Flex align="center">
      <Code key={method.id} {...props}>
        {method.asSelector.id}
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
