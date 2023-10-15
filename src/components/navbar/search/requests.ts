import { gql } from "urql";

const ACCOUNT_QUERY = gql`
  query AccessManager($id: ID!) {
    account(id: $id) {
      id
      asAccessManager {
        id
      }
      asAccessManaged {
        id
      }
      membership {
        id
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
      }
      targettedBy {
        id
        manager {
          id
          asAccount {
            id
          }
        }
      }
    }
  }
`;

export { ACCOUNT_QUERY };
