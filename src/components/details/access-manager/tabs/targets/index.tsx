import Address from "@/components/address";
import DelayedValue from "@/components/delayed-value";
import Info from "@/components/info";
import { CheckIcon, CircleIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Table, Badge, Text, Code, Box, Callout } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  data: any;
}

const Targets: FC<Props> = ({ data }) => {
  return (
    <Box>
      <Text size="2">
        Contracts of which permissions the AccessManager keeps track of
      </Text>
      {!data.account.asAccessManager.targets.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No targets found</Callout.Text>
        </Callout.Root>
      ) : (
        <Table.Root mt="4" variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                Admin delay
                <Info ml="3" mt="1">
                  <Text size="1">
                    AccessManager admins can scheduled delayed admin actions.
                    This is the time it takes to execute one of these actions
                    after a previous <Code>schedule</Code> call, namely{" "}
                    <Code>updateAuthority</Code>, <Code>setTargetClosed</Code>{" "}
                    and <Code>setTargetFunctionRole</Code>.
                  </Text>
                </Info>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                Status
                <Info ml="3" mt="1">
                  <Text size="1">
                    A target can be closed, which means that every{" "}
                    <Code>canCall</Code> invokation will return false. Contracts
                    managed by this AccessManager won't be accessible. This
                    state can be changed by the AccessManager admins.
                  </Text>
                </Info>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell align="center">
                Managed
                <Info ml="3" mt="1">
                  <Text size="1">
                    This target is an AccessManaged contract and has reported
                    this AccessManager as its authority.
                  </Text>
                </Info>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.account.asAccessManager.targets.map((target: any) => (
              <Table.Row key={target.id}>
                <Table.RowHeaderCell>
                  <Address
                    address={{
                      value: target.target.id,
                    }}
                    truncate={{
                      leading: 8,
                      trailing: 8,
                    }}
                    icons={{
                      etherscan: true,
                      copy: true
                    }}
                  />
                </Table.RowHeaderCell>
                <Table.Cell>
                  <DelayedValue {...target.adminDelay} />
                </Table.Cell>
                <Table.Cell align="center">
                  {target.closed ? (
                    <Badge color="red">Closed</Badge>
                  ) : (
                    <Badge color="green">Open</Badge>
                  )}
                </Table.Cell>
                <Table.Cell align="center">
                  {data.account.asAccessManager.id === target.manager.id ? (
                    <Badge radius="full" variant="soft" color="green">
                      <CheckIcon />
                    </Badge>
                  ) : (
                    <Badge radius="full" variant="soft" color="red">
                      <Cross2Icon />
                    </Badge>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
};

export default Targets;
