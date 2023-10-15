import DelayedValue from "@/components/delayed-value";
import Role from "@/components/role";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Grid, Text } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  roles: any;
}

const Roles: FC<Props> = ({ roles }) => {
  return (
    <>
      {!roles.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No roles found</Callout.Text>
        </Callout.Root>
      ) : (
        <Grid columns="2" gap="3" width="auto">
          {roles.map((role: any) => (
            <Role
              className="w-full"
              size="2"
              icons={{ unlabelled: true, navigate: true }}
              role={role}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Roles;
