import Operation from "@/components/operation";
import { CircleIcon } from "@radix-ui/react-icons";
import { Callout, Grid } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  operations: any[];
}

const Operations: FC<Props> = ({ operations }) => {
  return (
    <>
      {!operations.length ? (
        <Callout.Root>
          <Callout.Icon>
            <CircleIcon />
          </Callout.Icon>
          <Callout.Text>No operations found</Callout.Text>
        </Callout.Root>
      ) : (
        <Grid columns="2" gap="3" width="auto">
          {operations.map((operation) => (
            <Operation
              key={operation.id}
              className="w-full"
              size="2"
              operation={operation}
            />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Operations;
