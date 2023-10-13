import Address from "@/components/address";
import { CircleIcon } from "@radix-ui/react-icons";
import { Box, Callout, Card, Flex, Text } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  data: any;
}

const Managed: FC<Props> = ({ data }) => {
  return (
    <Box>
      <Text mt="4" size="2">
        Contracts that inherit from AccessManaged and have this manager as its
        authority
      </Text>
      {!data.account.authorityOf.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No members found</Callout.Text>
        </Callout.Root>
      ) : (
        <Flex mt="2" direction="column" gap="2">
          {data.account.authorityOf.map((managed: any) => (
            <Card size="2">
              <Address
                address={{
                  value: managed.id,
                }}
                icons={{
                  etherscan: true,
                  copy: true,
                }}
              />
            </Card>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Managed;
