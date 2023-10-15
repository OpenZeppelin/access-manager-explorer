import { gql } from "urql";

const ACCESS_MANAGER_QUERY = gql`
  query AccessManager($id: ID!) {
    accessManager(id: $id) {
      id
      targets {
        id
        asAccount {
          id
        }
      }
      roles {
        id
        label
        asRole {
          id
        }
      }
      members {
        id
        asAccount {
          id
        }
      }
      operations {
        id
        nonce
        schedule
        data
        status
        asOperation {
          id
        }
      }
    }
  }
`;

export { ACCESS_MANAGER_QUERY };
