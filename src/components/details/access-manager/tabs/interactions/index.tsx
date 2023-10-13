import Address from "@/components/address";
import { truncateAddress } from "@/utils";
import { CircleIcon } from "@radix-ui/react-icons";
import { Box, Callout, Table, Text } from "@radix-ui/themes";
import { useFormatter } from "next-intl";
import { FC } from "react";

interface Props {
  data: any;
}

const Interactions: FC<Props> = ({ data }) => {
  const format = useFormatter();
  return (
    <Box mt="4">
      {!data.account.events.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No interactions found</Callout.Text>
        </Callout.Root>
      ) : (
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>TX Hash</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Timestamp</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Sender</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.account.events.map((event: any) => (
              <Table.Row key={event.id} className="whitespace-nowrap">
                <Table.RowHeaderCell>
                  <Text>
                    {truncateAddress(event.transaction.id, {
                      leading: 10,
                      trailing: 10,
                    })}
                  </Text>
                </Table.RowHeaderCell>
                <Table.Cell className="whitespace-nowrap">
                  <Text className="whitespace-nowrap">
                    {format.dateTime(event.timestamp * 1000, {
                      dateStyle: "medium",
                      timeStyle: "medium",
                    })}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>
                    <Address
                      address={{
                        value: event.sender.id,
                      }}
                      truncate
                      icons={{
                        etherscan: true,
                        copy: true,
                      }}
                    />
                  </Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
};

export default Interactions;
