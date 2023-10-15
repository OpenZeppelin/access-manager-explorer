import { gql } from "urql";

const ACCESS_MANAGED_QUERY = gql`
  query AccessManaged($id: ID!) {
    accessManaged(id: $id) {
      id
      asAccount {
        id
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
      authority {
        id
        asAccessManager {
          id
        }
      }
    }
  }
`;

export { ACCESS_MANAGED_QUERY };
