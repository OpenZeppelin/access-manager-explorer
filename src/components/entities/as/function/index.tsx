"use client";
import { ComponentProps, FC } from "react";
import Entity from "../entity";
import FunctionHeader from "@/components/function";

interface Props extends Omit<ComponentProps<typeof Entity>, "header" | "role"> {
  method: ComponentProps<typeof FunctionHeader>["method"];
}

const Function: FC<Props> = ({ method, children, ...props }) => {
  return (
    <Entity
      header={<FunctionHeader size="5" mr="auto" method={method} />}
      {...props}
    >
      {children}
    </Entity>
  );
};

export default Function;
