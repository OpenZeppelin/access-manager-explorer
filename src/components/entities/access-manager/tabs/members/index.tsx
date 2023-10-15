import Address from "@/components/address";
import ROUTES from "@/config/routes";
import { EntityPrefix } from "@/types";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Card, Flex, Text } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  members: any[];
}

const Members: FC<Props> = ({ members }) => {
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
                address={{
                  value: asAccount.id,
                }}
                icons={{
                  etherscan: true,
                  copy: true,
                  navigate: {
                    id: ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManagerRoleMember,
                      id
                    ),
                  },
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
