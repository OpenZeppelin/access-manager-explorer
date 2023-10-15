import { graphql } from "@/gql";

const ACCESS_MANAGER_TARGET_FUNCTION_QUERY = graphql(/* GraphQL */ `
  query AccessManagerTargetFunction($id: ID!) {
    accessManagerTargetFunction(id: $id) {
      ...AccessManagerTargetFunctionFragment
      manager {
        id
        asAccount {
          id
        }
      }
      target {
        id
        asAccount {
          id
        }
      }
      role {
        ...AccessManagerRoleFragment
      }
    }
  }
`);

export { ACCESS_MANAGER_TARGET_FUNCTION_QUERY };
