import Address from "@/components/address";
import Role from "@/components/role";
import { ACCESS_MANAGER_ROLE_FRAGMENT } from "@/components/role/requests";
import ROUTES from "@/config/routes";
import { makeFragmentData, useFragment as asFragment } from "@/gql";
import { AccessManagerRoleMembersQuery } from "@/gql/graphql";
import { useRouteNetwork } from "@/providers/route-network";
import { EntityPrefix } from "@/types";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { join } from "path";
import { FC } from "react";

interface Props {
  membership: AccessManagerRoleMembersQuery["accessManagerRoleMembers"][number];
}

const MemberOf: FC<Props> = ({ membership }) => {
  const { currentChainId } = useRouteNetwork();
  const role = asFragment(ACCESS_MANAGER_ROLE_FRAGMENT, membership.role);

  const asRole = role?.label ? { id: role.label } : role.asRole;
  const roleFragment = makeFragmentData(
    {
      id: role.id,
      asRole: asRole,
    },
    ACCESS_MANAGER_ROLE_FRAGMENT
  );

  return (
    <Button my="1" variant="ghost" color="gray" className="w-full" asChild>
      <Link
        scroll={false}
        href={join(
          ROUTES.EXPLORER.ROOT(currentChainId),
          ROUTES.EXPLORER.DETAILS(
            EntityPrefix.AccessManagerRoleMember,
            membership.id
          )
        )}
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
      </Link>
    </Button>
  );
};

export default MemberOf;
