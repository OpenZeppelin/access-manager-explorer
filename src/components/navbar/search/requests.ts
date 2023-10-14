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
    }
  }
`;

export { ACCOUNT_QUERY };
