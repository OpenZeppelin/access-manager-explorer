import Address from "@/components/address";
import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";
import Role from "@/components/role";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Code, Table, Text } from "@radix-ui/themes";
import { useFormatter, useNow } from "next-intl";
import { FC } from "react";

interface Props {
  data: any;
}

const Members: FC<Props> = ({ data }) => {
  const format = useFormatter();
  const now = useNow();

  return (
    <>
      <Text size="2">
        A member is any address that has been granted a role in the
        AccessManager.
      </Text>
      {!data.account.asAccessManager.members.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No members found</Callout.Text>
        </Callout.Root>
      ) : (
        <Table.Root mt="4" variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                Exec delay
                <Info ml="3" mt="1">
                  <Text size="1">
                    Roles are assigned to users along with an execution delay,
                    which is the amount of time the user needs to call{" "}
                    <Code>schedule</Code>
                    in advance of calling <Code>execute</Code> for any allowed
                    operation to its role.
                  </Text>
                </Info>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Member since</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.account.asAccessManager.members.map((member: any) => (
              <Table.Row key={member.id}>
                <Table.RowHeaderCell>
                  <Text>
                    <Role role={member.role} />
                  </Text>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Address
                    address={{
                      value: member.asAccount.id,
                    }}
                    truncate={{
                      leading: 6,
                      trailing: 6,
                    }}
                    icons={{
                      etherscan: true,
                      copy: true,
                    }}
                  />
                </Table.Cell>
                <Table.Cell>
                  <DelayedValue {...member.executionDelay} />
                </Table.Cell>
                <Table.Cell>
                  <Text>
                    {format.relativeTime(member.since * 1000, now.getTime())}
                  </Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </>
  );
};

export default Members;
