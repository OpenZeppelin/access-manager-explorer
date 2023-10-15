import { Badge, Code, IconButton, Separator, Text } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Info from "../info";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ROUTES from "@/config/routes";
import { EntityPrefix } from "@/types";
import Link from "next/link";
import { join } from "path";
import { usePathname } from "next/navigation";
import { FragmentType, useFragment } from "@/gql/fragment-masking";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "./requests";

interface Role {
  id: string;
}

interface IconProps extends ComponentProps<typeof Info> {}

interface IconProps {
  unlabelled?: boolean | IconProps;
  navigate?: boolean | IconProps;
}

interface Props extends Omit<ComponentProps<typeof Badge>, "role"> {
  accessManagerRole: FragmentType<typeof ACCESS_MANAGER_ROLE_FRAGMENT>;
  icons?: IconProps;
}

const Role: FC<Props> = ({ accessManagerRole, icons, ...props }) => {
  const role = useFragment(ACCESS_MANAGER_ROLE_FRAGMENT, accessManagerRole);
  if (!role.label && role.asRole.id == "0") role.label = "ADMIN";
  const isLabel = typeof role.label !== "undefined";

  const pathname = usePathname();

  return (
    <Badge color={role.label ? "blue" : "gray"} {...props}>
      {role.asRole.id}
      {isLabel && (
        <>
          <Separator orientation="vertical" />
          {role.label ?? (
            <>
              {"UNLABELED"}
              {icons?.unlabelled && (
                <Info
                  {...(icons.unlabelled == true
                    ? undefined
                    : { ...icons.unlabelled })}
                >
                  <Text size="1">
                    An role can be labeled by the AccessManager admins via the{" "}
                    <Code>labelRole</Code> function{" "}
                  </Text>
                </Info>
              )}
            </>
          )}
        </>
      )}
      {icons?.navigate && (
        <IconButton
          variant="ghost"
          color="gray"
          ml="auto"
          size="1"
          {...(icons.navigate == true ? undefined : { ...icons.navigate })}
          asChild
        >
          <Link
            scroll={false}
            href={join(
              pathname,
              ROUTES.EXPLORER.DETAILS(EntityPrefix.AccessManagerRole, role.id)
            )}
          >
            <ArrowRightIcon />
          </Link>
        </IconButton>
      )}
    </Badge>
  );
};

export default Role;
