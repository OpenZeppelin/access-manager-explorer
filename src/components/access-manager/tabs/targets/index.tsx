import Address from "@/components/address";
import DelayedValue from "@/components/delayed-value";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Table, Badge } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  data: any;
}

const Targets: FC<Props> = ({ data }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Admin delay</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Managed</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.account.asAccessManager.targets.map((target: any) => (
          <Table.Row>
            <Table.RowHeaderCell>
              <Address
                address={{
                  value: target.target.id,
                }}
                truncate={{
                  leading: 8,
                  trailing: 8,
                }}
                links={{
                  etherscan: true,
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
  );
};

export default Targets;
