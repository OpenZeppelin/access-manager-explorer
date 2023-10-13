import { Badge, Code, Separator, Text } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";
import Info from "../info";

interface Role {
  id: string;
}

interface AccessManagerRole {
  id: string;
  label?: string;
  role: Role;
}

interface Props extends Omit<ComponentProps<typeof Badge>, "role"> {
  role: AccessManagerRole;
}

const Role: FC<Props> = ({ role, ...props }) => {
  return (
    <Badge color={role.label ? "blue" : "gray"} {...props}>
      {role.role.id}
      <Separator orientation="vertical" />
      {role.label ?? (
        <>
          {"UNLABELED"}
          {props.size == "2" && (
            <Info>
              <Text size="1">
                An role can be labeled by the AccessManager admins via the{" "}
                <Code>labelRole</Code> function{" "}
              </Text>
            </Info>
          )}
        </>
      )}
    </Badge>
  );
};

export default Role;
