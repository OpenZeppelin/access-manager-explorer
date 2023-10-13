import { truncateAddress } from "@/utils";
import { CircleIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Callout,
  Code,
  HoverCard,
  IconButton,
  Table,
  Text,
} from "@radix-ui/themes";
import { useFormatter } from "next-intl";
import { FC } from "react";

interface Props {
  data: any;
}

const Operations: FC<Props> = ({ data }) => {
  const format = useFormatter();

  return (
    <Box mt="4">
      {!data.account.asAccessManager.operations.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No operations found</Callout.Text>
        </Callout.Root>
      ) : (
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Operation ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Nonce</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Schedule</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Data</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.account.asAccessManager.operations.map((operation: any) => (
              <Table.Row key={operation.id}>
                <Table.RowHeaderCell>
                  <Text>{operation.operation.id}</Text>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Badge size="1" color="gray">
                    {operation.nonce}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Text>
                    {format.dateTime(operation.schedule * 1000, {
                      dateStyle: "medium",
                      timeStyle: "medium",
                    })}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <IconButton size="1" ml="2" variant="ghost" color="gray">
                        {truncateAddress(operation.data, {
                          leading: 10,
                          trailing: 2,
                        })}
                      </IconButton>
                    </HoverCard.Trigger>
                    <HoverCard.Content size="1" className="w-64">
                      <Code>{operation.data}</Code>
                    </HoverCard.Content>
                  </HoverCard.Root>
                </Table.Cell>
                <Table.Cell>
                  <Badge size="1" variant="soft">
                    {operation.status}
                  </Badge>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
};

export default Operations;
