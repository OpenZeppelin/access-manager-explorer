import { gql } from "urql";

const ACCESS_MANAGER_TARGET_FUNCTION_QUERY = gql`
  query AccessManagerTargetFunction($id: ID!) {
    accessManagerTargetFunction(id: $id) {
      id
      manager {
        id
        asAccount {
          id
        }
      }
      asSelector {
        id
      }
      target {
        id
        asAccount {
          id
        }
      }
      role {
        id
        asRole {
          id
        }
      }
    }
  }
`;

export { ACCESS_MANAGER_TARGET_FUNCTION_QUERY };
