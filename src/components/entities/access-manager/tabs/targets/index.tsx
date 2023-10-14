import Address from "@/components/address";
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
          {targets.map(({ id, asAccount }: any) => (
            <Card key={id} size="1">
              <Address
                key={id}
                address={{
                  value: asAccount.id,
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
    </>
  );
};

export default Targets;
