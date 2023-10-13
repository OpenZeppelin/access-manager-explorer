"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";
import { join } from "path";
import { ComponentProps, FC, KeyboardEventHandler, useState } from "react";
import { Address as AddressType, isAddress } from "viem";

const { Root, Slot, Input } = TextField;

interface Props extends ComponentProps<typeof Root> {
  input?: ComponentProps<typeof Input>;
}

const Search: FC<Props> = (props) => {
  const [address, setAddress] = useState("");
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSubmit = (
    event: Parameters<KeyboardEventHandler<HTMLInputElement>>[0]
  ) => {
    if (isAddress(address) && event.key == "Enter") {
      push(join(pathname, address));
      setAddress("");
    }
  };

  return (
    <Root {...props}>
      <Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </Slot>
      <Input
        {...props.input}
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        onKeyDown={handleSubmit}
      />
    </Root>
  );
};

export default Search;
