import { graphql } from "@/gql";

const ACCOUNT_QUERY = graphql(/* GraphQL */ `
  query Account($id: ID!) {
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
          ...AccessManagerRoleFragment
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
`);

export { ACCOUNT_QUERY };
