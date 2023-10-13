import Address from "@/components/address";
import Role from "@/components/role";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Code, Table, Box, Text } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  data: any;
}

const Functions: FC<Props> = ({ data }) => {
  return (
    <Box mt="4">
      {!data.account.asAccessManager.selectors.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No functions found</Callout.Text>
        </Callout.Root>
      ) : (
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Method</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Target</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Allowed role</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.account.asAccessManager.selectors.map((selector: any) => (
              <Table.Row key={selector.id}>
                <Table.RowHeaderCell>
                  <Code>{selector.selector.id}</Code>
                  <Text></Text>
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Address
                    address={{
                      value: selector.target.target.id,
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
                  <Role role={selector.role} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </Box>
  );
};

export default Functions;
