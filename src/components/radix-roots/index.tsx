import * as Collapsible from "@radix-ui/react-collapsible";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const RadixRoots = ({ children }: Props) => {
  return <Collapsible.Root>{children}</Collapsible.Root>;
};

export default RadixRoots;
