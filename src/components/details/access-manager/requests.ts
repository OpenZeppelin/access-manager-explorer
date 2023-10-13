import { gql } from "urql";

const ACCOUNT_QUERY = gql`
  query AccountQuery($id: ID!) {
    account(id: $id) {
      id
      asAccessManager {
        id
        targets {
          id
          manager {
            id
          }
          target {
            id
          }
          adminDelay {
            id
            oldValue
            value
            since
          }
          closed
        }
        roles {
          id
          role {
            id
          }
          label
          grantDelay {
            id
            value
            oldValue
            since
          }
        }
        members {
          id
          asAccount {
            id
          }
          role {
            id
            label
            role {
              id
            }
          }
          since
          executionDelay {
            id
            value
            oldValue
            since
          }
        }
        selectors {
          id
          target {
            id
            target {
              id
            }
          }
          selector {
            id
          }
          role {
            id
            label
            role {
              id
            }
          }
        }
        operations {
          id
          nonce
          schedule
          data
          status
          operation {
            id
          }
        }
      }
      authorityOf {
        id
      }
      events {
        id
        transaction {
          id
        }
        timestamp
        sender {
          id
        }
      }
    }
  }
`;

export { ACCOUNT_QUERY };
