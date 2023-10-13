import { cn } from "@/utils";
import { Box, Button } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<typeof Box> {}

const Skeleton: FC<Props> = (props: Props) => {
  return (
    <div role="status" className="animate-pulse">
      <Box
        {...props}
        className={cn("rounded-sm", props.className)}
        style={{
          backgroundColor: "var(--gray-4)",
        }}
      />
    </div>
  );
};

export default Skeleton;
