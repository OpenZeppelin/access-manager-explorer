import { graphql } from "@/gql";

const ACCESS_MANAGER_QUERY = graphql(/* GraphQL */ `
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
        ...AccessManagerRoleFragment
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
`);

export { ACCESS_MANAGER_QUERY };
