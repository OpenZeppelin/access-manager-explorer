import { graphql } from "@/gql";

const ACCESS_MANAGER_ROLE_FRAGMENT = graphql(/* GraphQL */ `
  fragment AccessManagerRoleFragment on AccessManagerRole {
    id
    label
    asRole {
      id
    }
  }
`);

export { ACCESS_MANAGER_ROLE_FRAGMENT };
