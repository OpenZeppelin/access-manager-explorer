import { graphql } from "@/gql";

const ACCESS_MANAGER_MEMBER_QUERY = graphql(/* GraphQL */`
  query AccessManagerRoleMember($id: ID!) {
    accessManagerRoleMember(id: $id) {
      id
      asAccount {
        id
      }
      manager {
        id
        asAccount {
          id
        }
      }
      role {
        ...AccessManagerRoleFragment
      }
      since
      executionDelay {
        ...DelayedBigIntFragment
      }
    }
  }
`);

export { ACCESS_MANAGER_MEMBER_QUERY };
