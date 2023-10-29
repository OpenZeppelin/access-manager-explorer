import Address from "@/components/address";
import Role from "@/components/role";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "@/components/role/requests";
import { makeFragmentData, useFragment as asFragment } from "@/gql";
import { AccessManagerRoleMembersQuery } from "@/gql/graphql";
import { useEntities } from "@/providers/entities";
import { AddressEntity } from "@/types";
import { Button } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  membership: AccessManagerRoleMembersQuery["accessManagerRoleMembers"][number];
}

const MemberOf: FC<Props> = ({ membership }) => {
  const role = asFragment(ACCESS_MANAGER_ROLE_FRAGMENT, membership.role);
  const entities = useEntities();

  const asRole = role?.label ? { id: role.label } : role.asRole;
  const roleFragment = makeFragmentData(
    {
      id: role.id,
      asRole: asRole,
    },
    ACCESS_MANAGER_ROLE_FRAGMENT
  );

  return (
    <Button
      my="1"
      variant="ghost"
      color="gray"
      className="w-full"
      onClick={() => {
        entities.clear();
        entities.push({
          type: AddressEntity.AccessManagerRoleMember,
          id: membership.id,
        });
      }}
    >
      <Role ml="3" accessManagerRole={roleFragment} />
      <Address
        addreth={{
          address: membership.manager.asAccount.id,
          shortenAddress: 6,
        }}
        p="1"
        mr="auto"
      />
    </Button>
  );
};

export default MemberOf;
