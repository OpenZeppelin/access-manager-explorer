import { Badge, Code, Separator, Text } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Info from "../info";

interface Role {
  id: string;
}

interface AccessManagerRole {
  label?: string;
  asRole: Role;
}

interface UnlabelledIconProps extends ComponentProps<typeof Info> {}

interface IconProps {
  unlabelled?: boolean | UnlabelledIconProps;
}

interface Props extends Omit<ComponentProps<typeof Badge>, "role"> {
  role: AccessManagerRole;
  icons?: IconProps;
}

const Role: FC<Props> = ({ role, icons, ...props }) => {
  const isLabel = typeof role.label !== "undefined";

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
    </Badge>
  );
};

export default Role;
