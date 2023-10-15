import { gql } from "urql";

const ACCESS_MANAGER_TARGET_QUERY = gql`
  query AccessManagerTarget($id: ID!) {
    accessManagerTarget(id: $id) {
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
      adminDelay {
        id
        oldValue
        value
        since
      }
      closed
      functions {
        id
        asSelector {
          id
        }
      }
    }
  }
`;

export { ACCESS_MANAGER_TARGET_QUERY };
