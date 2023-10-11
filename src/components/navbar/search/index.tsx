"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { ComponentProps, FC } from "react";

const { Root, Slot, Input } = TextField;

interface Props extends ComponentProps<typeof Root> {
  input?: ComponentProps<typeof Input>;
}

const Search: FC<Props> = (props) => {
  return (
    <Root {...props}>
      <Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </Slot>
      <Input {...props.input} />
    </Root>
  );
};

export default Search;
