import { graphql } from "@/gql";

const ACCESS_MANAGER_ROLE_QUERY = graphql(/* GraphQL */ `
  query AccessManagerRole($id: ID!) {
    accessManagerRole(id: $id) {
      ...AccessManagerRoleFragment
      manager {
        id
        asAccount {
          id
        }
      }
      grantDelay {
        ...DelayedBigIntFragment
      }
      admin {
        ...AccessManagerRoleFragment
      }
      guardian {
        ...AccessManagerRoleFragment
      }
      adminOf {
        ...AccessManagerRoleFragment
      }
      guardianOf {
        ...AccessManagerRoleFragment
      }
      members {
        id
        asAccount {
          id
        }
      }
      functions {
        ...AccessManagerTargetFunctionFragment
      }
    }
  }
`);

export { ACCESS_MANAGER_ROLE_QUERY };
