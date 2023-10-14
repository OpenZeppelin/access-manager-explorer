"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Badge, Button, Card, Flex, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { join } from "path";
import { ComponentProps, FC, useState } from "react";
import { ACCOUNT_QUERY } from "./requests";
import { useDebounce } from "use-debounce";
import { isAddress } from "viem";
import { useQuery } from "urql";
import Address from "@/components/address";
const { Root, Slot, Input } = TextField;

interface Props extends ComponentProps<typeof Root> {
  input?: ComponentProps<typeof Input>;
}

const Search: FC<Props> = (props) => {
  const [address, setAddress] = useState("");
  const [debouncedAddress] = useDebounce(address, 1000);
  const { replace } = useRouter();

  const isInputAddress = isAddress(address);

  const [{ data, fetching }] = useQuery({
    query: ACCOUNT_QUERY,
    variables: {
      id: debouncedAddress,
    },
    pause: !isInputAddress,
  });

  return (
    <Root {...props}>
      <Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </Slot>
      <div className="inline-flex flex-col justify-center relative text-gray-500">
        <div className="relative">
          <Input
            {...props.input}
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          />
        </div>
        {isInputAddress && data?.account && (
          <Card
            size="1"
            variant="classic"
            asChild
            style={{
              backgroundColor: "var(--color-gray-3)",
              position: "fixed",
              zIndex: 100,
              top: 55,
              width: props.input?.style?.width,
            }}
          >
            <ul>
              {data.account.asAccessManager && (
                <Button
                  asChild
                  radius="none"
                  color="gray"
                  className="w-full"
                  variant="ghost"
                  style={{
                    justifyContent: "flex-start",
                  }}
                  onClick={() => {
                    replace(
                      join(
                        "/explorer",
                        `mgr-${data.account.asAccessManager.id}`
                      )
                    );
                    setAddress("");
                  }}
                >
                  <li>
                    <Flex width="100%">
                      <Address
                        truncate={{
                          leading: 8,
                          trailing: 8,
                        }}
                        address={{ value: data.account.asAccessManager.id }}
                      />
                      <Badge ml="auto" size="1" variant="solid">
                        Manager
                      </Badge>
                    </Flex>
                  </li>
                </Button>
              )}
              {data.account.asAccessManaged && (
                <Button
                  asChild
                  radius="none"
                  color="gray"
                  className="w-full"
                  variant="ghost"
                  style={{
                    justifyContent: "flex-start",
                  }}
                  onClick={() => {
                    replace(
                      join(
                        "/explorer",
                        `mgr-${data.account.asAccessManaged.id}`
                      )
                    );
                    setAddress("");
                  }}
                >
                  <li>
                    <Flex width="100%">
                      <Address
                        truncate={{
                          leading: 8,
                          trailing: 8,
                        }}
                        address={{ value: data.account.asAccessManaged.id }}
                      />
                      <Badge ml="auto" size="1" variant="solid">
                        Manager
                      </Badge>
                    </Flex>
                  </li>
                </Button>
              )}
            </ul>
          </Card>
        )}
      </div>
    </Root>
  );
};

export default Search;
