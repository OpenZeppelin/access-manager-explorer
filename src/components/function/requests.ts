import { graphql } from "@/gql";

const ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT = graphql(/* GraphQL */ `
  fragment AccessManagerTargetFunctionFragment on AccessManagerTargetFunction {
    id
    asSelector {
      id
    }
  }
`);

export { ACCESS_MANAGER_TARGET_FUNCTION_FRAGMENT };
