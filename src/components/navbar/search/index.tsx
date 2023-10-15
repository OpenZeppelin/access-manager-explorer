"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Badge, DropdownMenu, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { join } from "path";
import {
  ComponentProps,
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ACCOUNT_QUERY } from "./requests";
import { useDebounce } from "use-debounce";
import { isAddress } from "viem";
import { useQuery } from "urql";
import Address from "@/components/address";
import { cn } from "@/utils";
import { EntityPrefix } from "@/types";
import ROUTES from "@/config/routes";
import Role from "@/components/role";
const { Root, Slot, Input } = TextField;

interface Props extends ComponentProps<typeof Root> {
  input?: ComponentProps<typeof Input>;
}

const Search: FC<Props> = (props) => {
  const [address, setAddress] = useState("");
  const [debouncedAddress] = useDebounce(address, 300);
  const [open, setOpen] = useState(false);
  const { replace } = useRouter();

  const isInputAddress = useMemo(
    () => isAddress(debouncedAddress),
    [debouncedAddress]
  );

  const [{ data, fetching, error }] = useQuery({
    query: ACCOUNT_QUERY,
    variables: {
      id: debouncedAddress,
    },
    pause: !isInputAddress,
  });

  const { isData, isManager, isManaged, hasMembership, isTarget } =
    useMemo(() => {
      const result = {
        isData: false,
        isManager: false,
        isManaged: false,
        hasMembership: false,
        isTarget: false,
      };
      result.isData = !!data?.account;

      if (!result.isData) return result;

      result.isManager = !!data.account.asAccessManager;
      result.isManaged = !!data.account.asAccessManaged;
      result.hasMembership = data.account.membership.length > 0;
      result.isTarget = data.account.targettedBy.length > 0;

      return result;
    }, [data?.account]);

  useEffect(() => {
    setOpen(isInputAddress && isData);
  }, [isData, data?.account, isInputAddress, address]);

  const navigate = (prefix: EntityPrefix, id: string) => {
    replace(join(ROUTES.EXPLORER.ROOT, ROUTES.EXPLORER.DETAILS(prefix, id)));
    setAddress("");
  };

  return (
    <Root {...props}>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger>
          <button
            style={{
              visibility: "hidden",
            }}
          />
        </DropdownMenu.Trigger>
        <Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </Slot>
        <Input
          {...props.input}
          onChange={(event) => setAddress(event.target.value)}
          value={address}
        />
        <DropdownMenu.Content>
          {isManager && (
            <DropdownMenu.Item
              onSelect={() =>
                navigate(
                  EntityPrefix.AccessManager,
                  data.account.asAccessManager.id
                )
              }
            >
              <Address address={{ value: data.account.asAccessManager.id }} />
              <Badge color="amber" ml="auto" size="1" variant="solid">
                Manager
              </Badge>
            </DropdownMenu.Item>
          )}
          {isManaged && (
            <DropdownMenu.Item
              onSelect={() =>
                navigate(
                  EntityPrefix.AccessManaged,
                  data.account.asAccessManaged.id
                )
              }
            >
              <Address
                mr="2"
                address={{ value: data.account.asAccessManaged.id }}
              />
              <Badge color="amber" ml="auto" size="1" variant="solid">
                Managed
              </Badge>
            </DropdownMenu.Item>
          )}
          {hasMembership && (
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>Member of</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                {data.account.membership.map((membership: any) => (
                  <DropdownMenu.Item
                    key={membership.id}
                    onSelect={() =>
                      navigate(
                        EntityPrefix.AccessManagerRoleMember,
                        membership.id
                      )
                    }
                  >
                    <Address
                      mr="2"
                      truncate={{
                        leading: 4,
                        trailing: 6,
                      }}
                      address={{ value: membership.manager.asAccount.id }}
                    />
                    <Role
                      mr="2"
                      role={{
                        asRole: {
                          id:
                            membership.role.label ?? membership.role.asRole.id,
                        },
                      }}
                    />
                    <Badge color="amber" ml="auto" size="1" variant="solid">
                      Role member
                    </Badge>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
          )}
          {isTarget && (
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>Managed by</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                {data.account.targettedBy.map((targettedBy: any) => (
                  <DropdownMenu.Item
                    key={targettedBy.id}
                    onSelect={() =>
                      navigate(EntityPrefix.AccessManagerTarget, targettedBy.id)
                    }
                  >
                    <Address
                      mr="2"
                      truncate={{
                        leading: 4,
                        trailing: 6,
                      }}
                      address={{ value: targettedBy.manager.asAccount.id }}
                    />
                    <Badge color="amber" ml="auto" size="1" variant="solid">
                      Target
                    </Badge>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Slot>
        <div
          className={cn(
            "animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent text-gray-600 rounded-full",
            {
              invisible: !fetching,
            }
          )}
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </Slot>
    </Root>
  );
};

export default Search;
