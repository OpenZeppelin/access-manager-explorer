import Address from "@/components/address";
import { AddressEntity } from "@/types";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Card, Flex } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  members: any[];
  depth: number;
}

const Members: FC<Props> = ({ members, depth }) => {
  return (
    <>
      {!members.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No members found</Callout.Text>
        </Callout.Root>
      ) : (
        <Flex direction="column" gap="2">
          {members.map(({ id, asAccount }: any) => (
            <Card key={id} size="1">
              <Address
                key={id}
                addreth={{
                  address: asAccount.id,
                  shortenAddress: false,
                }}
                onDetail={{
                  entity: {
                    type: AddressEntity.AccessManagerRoleMember,
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

export default Members;
