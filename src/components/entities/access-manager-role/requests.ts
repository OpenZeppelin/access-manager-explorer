import { gql } from "urql";

const ACESS_MANAGER_ROLE_QUERY = gql`
  query AccessManagerRole($id: ID!) {
    accessManagerRole(id: $id) {
      id
      label
      asRole {
        id
      }
      manager {
        id
        asAccount {
          id
        }
      }
      grantDelay {
        id
        oldValue
        value
        since
      }
      admin {
        id
        label
        asRole {
          id
        }
      }
      guardian {
        id
        label
        asRole {
          id
        }
      }
      adminOf {
        id
        label
        asRole {
          id
        }
      }
      guardianOf {
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
      functions {
        id
        asSelector {
          id
        }
      }
    }
  }
`;

export { ACESS_MANAGER_ROLE_QUERY };
