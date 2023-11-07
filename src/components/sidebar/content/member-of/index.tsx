import Address from "@/components/address";
import Role from "@/components/role";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "@/components/role/requests";
import { makeFragmentData, useFragment as asFragment } from "@/gql";
import { AccessManagerRoleMembersQuery } from "@/gql/graphql";
import { useEntities } from "@/providers/entities";
import { EntityInstance } from "@/providers/entities/provider";
import { AddressEntity } from "@/types";
import { Button } from "@radix-ui/themes";
import { FC } from "react";

interface Props {
  membership: AccessManagerRoleMembersQuery["accessManagerRoleMembers"][number];
  onNavigate: (entity: EntityInstance) => void;
}

const MemberOf: FC<Props> = ({ membership, onNavigate }) => {
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

  const clearAndPushNav = (entity: EntityInstance) => {
    entities.clearAndPush(entity);
    onNavigate(entity);
  };

  return (
    <Button
      my="1"
      variant="ghost"
      color="gray"
      className="w-full"
      onClick={() => {
        clearAndPushNav({
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
          actions: "none",
        }}
        hidePopup
        p="1"
        mr="auto"
      />
    </Button>
  );
};

export default MemberOf;
