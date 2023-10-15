import Address from "@/components/address";
import ROUTES from "@/config/routes";
import { EntityPrefix } from "@/types";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Card } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  targets: any[];
}

const Targets: FC<Props> = ({ targets }) => {
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
                address={{
                  value: asAccount.id,
                }}
                icons={{
                  etherscan: true,
                  copy: true,
                  navigate: {
                    id: ROUTES.EXPLORER.DETAILS(
                      EntityPrefix.AccessManagerTarget,
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

export default Targets;
