import { graphql } from "@/gql";

const DELAYED_BIG_INT_FRAGMENT = graphql(/* GraphQL */ `
  fragment DelayedBigIntFragment on DelayedBigInt {
    id
    value
    oldValue
    since
  }
`);

export { DELAYED_BIG_INT_FRAGMENT };
