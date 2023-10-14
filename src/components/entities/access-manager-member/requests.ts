import { gql } from "urql";

const ACCESS_MANAGER_MEMBER_QUERY = gql`
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
        id
        label
        asRole {
          id
        }
      }
      since
      executionDelay {
        id
        oldValue
        value
        since
      }
    }
  }
`;

export { ACCESS_MANAGER_MEMBER_QUERY };
