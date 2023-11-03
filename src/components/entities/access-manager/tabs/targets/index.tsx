import Address from "@/components/address";
import { AddressEntity } from "@/types";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Card } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  targets: any[];
  depth: number;
}

const Targets: FC<Props> = ({ targets, depth }) => {
  return (
    <>
      {!targets.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No targets found</Callout.Text>
        </Callout.Root>
      ) : (
        <Flex direction="column" gap="2">
          {targets.map(({ id, asAccount }) => (
            <Card key={id} size="1">
              <Address
                key={id}
                addreth={{
                  address: asAccount.id,
                  shortenAddress: false,
                }}
                onDetail={{
                  entity: {
                    type: AddressEntity.AccessManagerTarget,
                    id,
                  },
                  at: depth,
                }}
              />
            </Card>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Targets;
