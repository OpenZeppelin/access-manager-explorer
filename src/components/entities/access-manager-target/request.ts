import { graphql } from "@/gql";

const ACCESS_MANAGER_TARGET_QUERY = graphql(/* GraphQL */ `
  query AccessManagerTarget($id: ID!) {
    accessManagerTarget(id: $id) {
      id
      asAccount {
        id
        asAccessManaged {
          id
        }
      }
      manager {
        id
        asAccount {
          id
        }
      }
      adminDelay {
        ...DelayedBigIntFragment
      }
      closed
      functions {
        ...AccessManagerTargetFunctionFragment
      }
    }
  }
`);

export { ACCESS_MANAGER_TARGET_QUERY };
