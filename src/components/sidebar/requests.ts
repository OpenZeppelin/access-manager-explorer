import { gql } from "urql";

const ACCESS_MANAGER_MEMBER_QUERY = gql`
  query AccessManagerRoleMembers($address: ID!) {
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
        id
        label
        asRole {
          id
        }
      }
    }
  }
`;

export { ACCESS_MANAGER_MEMBER_QUERY };
