import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";
import Role from "@/components/role";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  data: any;
}

const Roles: FC<Props> = ({ data }) => {
  return (
    <>
      <Text size="2">
        Roles granted to either functions or members of the AccessManger
      </Text>
      {!data.account.asAccessManager.roles.length && (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No roles found</Callout.Text>
        </Callout.Root>
      )}
      <Grid mt="2" columns="3" gap="3" width="auto">
        {data.account.asAccessManager.roles.map((role: any) => (
          <Card size="1" key={role.id}>
            <Role className="w-full" size="2" role={role} />
            <Flex mt="2" align="center">
              <Text mr="2" size="2" as="span">
                Grant delay:
              </Text>
              <DelayedValue {...role.grantDelay} />
            </Flex>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Roles;
