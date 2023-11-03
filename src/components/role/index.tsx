import { Badge, Code, IconButton, Separator, Text } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Info from "../info";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  FragmentType,
  useFragment as asFragment,
} from "@/gql/fragment-masking";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "./requests";
import { useEntities } from "@/providers/entities";
import { Entity } from "@/types";

interface Role {
  id: string;
}

interface IconProps extends ComponentProps<typeof Info> {}

interface IconProps {
  unlabelled?: boolean | IconProps;
  navigate?: IconProps & { at: number };
}

interface Props extends Omit<ComponentProps<typeof Badge>, "role"> {
  accessManagerRole: FragmentType<typeof ACCESS_MANAGER_ROLE_FRAGMENT>;
  icons?: IconProps;
}

const Role: FC<Props> = ({ accessManagerRole, icons, ...props }) => {
  const role = asFragment(ACCESS_MANAGER_ROLE_FRAGMENT, accessManagerRole);
  const isLabel = typeof role.label !== "undefined";
  if (isLabel && !role.label && role.asRole.id == "0") role.label = "ADMIN";

  const entities = useEntities();

  const navigateAt = icons?.navigate?.at;

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
      {navigateAt !== undefined ? (
        <IconButton
          variant="ghost"
          color="gray"
          ml="auto"
          size="1"
          {...icons?.navigate}
          onClick={() =>
            entities.push(
              { type: Entity.AccessManagerRole, id: role.id },
              navigateAt
            )
          }
        >
          <ArrowRightIcon />
        </IconButton>
      ) : undefined}
    </Badge>
  );
};

export default Role;
