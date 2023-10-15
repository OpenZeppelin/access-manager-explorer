import { graphql } from "@/gql";

const ACCESS_MANAGER_ROLE_MEMBERS_QUERY = graphql(/* GraphQL */ `
  query AccessManagerRoleMembers($address: String!) {
    accessManagerRoleMembers(where: { asAccount: $address }) {
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
        ...AccessManagerRoleFragment
      }
    }
  }
`);

export { ACCESS_MANAGER_ROLE_MEMBERS_QUERY };
