import { graphql } from "@/gql";

const ACCESS_MANAGED_QUERY = graphql(/* GraphQL */ `
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
`);

export { ACCESS_MANAGED_QUERY };
