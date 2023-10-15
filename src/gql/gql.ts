/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment DelayedBigIntFragment on DelayedBigInt {\n    id\n    value\n    oldValue\n    since\n  }\n": types.DelayedBigIntFragmentFragmentDoc,
    "\n  query AccessManaged($id: ID!) {\n    accessManaged(id: $id) {\n      id\n      asAccount {\n        id\n        targettedBy {\n          id\n          manager {\n            id\n            asAccount {\n              id\n            }\n          }\n        }\n      }\n      authority {\n        id\n        asAccessManager {\n          id\n        }\n      }\n    }\n  }\n": types.AccessManagedDocument,
    "\n  query AccessManagerRoleMember($id: ID!) {\n    accessManagerRoleMember(id: $id) {\n      id\n      asAccount {\n        id\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n      since\n      executionDelay {\n        ...DelayedBigIntFragment\n      }\n    }\n  }\n": types.AccessManagerRoleMemberDocument,
    "\n  query AccessManagerRole($id: ID!) {\n    accessManagerRole(id: $id) {\n      ...AccessManagerRoleFragment\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      grantDelay {\n        ...DelayedBigIntFragment\n      }\n      admin {\n        ...AccessManagerRoleFragment\n      }\n      guardian {\n        ...AccessManagerRoleFragment\n      }\n      adminOf {\n        ...AccessManagerRoleFragment\n      }\n      guardianOf {\n        ...AccessManagerRoleFragment\n      }\n      members {\n        id\n        asAccount {\n          id\n        }\n      }\n      functions {\n        ...AccessManagerTargetFunctionFragment\n      }\n    }\n  }\n": types.AccessManagerRoleDocument,
    "\n  query AccessManagerTargetFunction($id: ID!) {\n    accessManagerTargetFunction(id: $id) {\n      ...AccessManagerTargetFunctionFragment\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      target {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n    }\n  }\n": types.AccessManagerTargetFunctionDocument,
    "\n  query AccessManagerTarget($id: ID!) {\n    accessManagerTarget(id: $id) {\n      id\n      asAccount {\n        id\n        asAccessManaged {\n          id\n        }\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      adminDelay {\n        ...DelayedBigIntFragment\n      }\n      closed\n      functions {\n        ...AccessManagerTargetFunctionFragment\n      }\n    }\n  }\n": types.AccessManagerTargetDocument,
    "\n  query AccessManager($id: ID!) {\n    accessManager(id: $id) {\n      id\n      targets {\n        id\n        asAccount {\n          id\n        }\n      }\n      roles {\n        ...AccessManagerRoleFragment\n      }\n      members {\n        id\n        asAccount {\n          id\n        }\n      }\n      operations {\n        id\n        nonce\n        schedule\n        data\n        status\n        asOperation {\n          id\n        }\n      }\n    }\n  }\n": types.AccessManagerDocument,
    "\n  fragment AccessManagerTargetFunctionFragment on AccessManagerTargetFunction {\n    id\n    asSelector {\n      id\n    }\n  }\n": types.AccessManagerTargetFunctionFragmentFragmentDoc,
    "\n  query Account($id: ID!) {\n    account(id: $id) {\n      id\n      asAccessManager {\n        id\n      }\n      asAccessManaged {\n        id\n      }\n      membership {\n        id\n        manager {\n          id\n          asAccount {\n            id\n          }\n        }\n        role {\n          ...AccessManagerRoleFragment\n        }\n      }\n      targettedBy {\n        id\n        manager {\n          id\n          asAccount {\n            id\n          }\n        }\n      }\n    }\n  }\n": types.AccountDocument,
    "\n  fragment AccessManagerRoleFragment on AccessManagerRole {\n    id\n    label\n    asRole {\n      id\n    }\n  }\n": types.AccessManagerRoleFragmentFragmentDoc,
    "\n  query AccessManagerRoleMembers($address: String!) {\n    accessManagerRoleMembers(where: { asAccount: $address }) {\n      id\n      asAccount {\n        id\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n    }\n  }\n": types.AccessManagerRoleMembersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DelayedBigIntFragment on DelayedBigInt {\n    id\n    value\n    oldValue\n    since\n  }\n"): (typeof documents)["\n  fragment DelayedBigIntFragment on DelayedBigInt {\n    id\n    value\n    oldValue\n    since\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManaged($id: ID!) {\n    accessManaged(id: $id) {\n      id\n      asAccount {\n        id\n        targettedBy {\n          id\n          manager {\n            id\n            asAccount {\n              id\n            }\n          }\n        }\n      }\n      authority {\n        id\n        asAccessManager {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManaged($id: ID!) {\n    accessManaged(id: $id) {\n      id\n      asAccount {\n        id\n        targettedBy {\n          id\n          manager {\n            id\n            asAccount {\n              id\n            }\n          }\n        }\n      }\n      authority {\n        id\n        asAccessManager {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManagerRoleMember($id: ID!) {\n    accessManagerRoleMember(id: $id) {\n      id\n      asAccount {\n        id\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n      since\n      executionDelay {\n        ...DelayedBigIntFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManagerRoleMember($id: ID!) {\n    accessManagerRoleMember(id: $id) {\n      id\n      asAccount {\n        id\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n      since\n      executionDelay {\n        ...DelayedBigIntFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManagerRole($id: ID!) {\n    accessManagerRole(id: $id) {\n      ...AccessManagerRoleFragment\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      grantDelay {\n        ...DelayedBigIntFragment\n      }\n      admin {\n        ...AccessManagerRoleFragment\n      }\n      guardian {\n        ...AccessManagerRoleFragment\n      }\n      adminOf {\n        ...AccessManagerRoleFragment\n      }\n      guardianOf {\n        ...AccessManagerRoleFragment\n      }\n      members {\n        id\n        asAccount {\n          id\n        }\n      }\n      functions {\n        ...AccessManagerTargetFunctionFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManagerRole($id: ID!) {\n    accessManagerRole(id: $id) {\n      ...AccessManagerRoleFragment\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      grantDelay {\n        ...DelayedBigIntFragment\n      }\n      admin {\n        ...AccessManagerRoleFragment\n      }\n      guardian {\n        ...AccessManagerRoleFragment\n      }\n      adminOf {\n        ...AccessManagerRoleFragment\n      }\n      guardianOf {\n        ...AccessManagerRoleFragment\n      }\n      members {\n        id\n        asAccount {\n          id\n        }\n      }\n      functions {\n        ...AccessManagerTargetFunctionFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManagerTargetFunction($id: ID!) {\n    accessManagerTargetFunction(id: $id) {\n      ...AccessManagerTargetFunctionFragment\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      target {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManagerTargetFunction($id: ID!) {\n    accessManagerTargetFunction(id: $id) {\n      ...AccessManagerTargetFunctionFragment\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      target {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManagerTarget($id: ID!) {\n    accessManagerTarget(id: $id) {\n      id\n      asAccount {\n        id\n        asAccessManaged {\n          id\n        }\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      adminDelay {\n        ...DelayedBigIntFragment\n      }\n      closed\n      functions {\n        ...AccessManagerTargetFunctionFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManagerTarget($id: ID!) {\n    accessManagerTarget(id: $id) {\n      id\n      asAccount {\n        id\n        asAccessManaged {\n          id\n        }\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      adminDelay {\n        ...DelayedBigIntFragment\n      }\n      closed\n      functions {\n        ...AccessManagerTargetFunctionFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManager($id: ID!) {\n    accessManager(id: $id) {\n      id\n      targets {\n        id\n        asAccount {\n          id\n        }\n      }\n      roles {\n        ...AccessManagerRoleFragment\n      }\n      members {\n        id\n        asAccount {\n          id\n        }\n      }\n      operations {\n        id\n        nonce\n        schedule\n        data\n        status\n        asOperation {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManager($id: ID!) {\n    accessManager(id: $id) {\n      id\n      targets {\n        id\n        asAccount {\n          id\n        }\n      }\n      roles {\n        ...AccessManagerRoleFragment\n      }\n      members {\n        id\n        asAccount {\n          id\n        }\n      }\n      operations {\n        id\n        nonce\n        schedule\n        data\n        status\n        asOperation {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccessManagerTargetFunctionFragment on AccessManagerTargetFunction {\n    id\n    asSelector {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment AccessManagerTargetFunctionFragment on AccessManagerTargetFunction {\n    id\n    asSelector {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Account($id: ID!) {\n    account(id: $id) {\n      id\n      asAccessManager {\n        id\n      }\n      asAccessManaged {\n        id\n      }\n      membership {\n        id\n        manager {\n          id\n          asAccount {\n            id\n          }\n        }\n        role {\n          ...AccessManagerRoleFragment\n        }\n      }\n      targettedBy {\n        id\n        manager {\n          id\n          asAccount {\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Account($id: ID!) {\n    account(id: $id) {\n      id\n      asAccessManager {\n        id\n      }\n      asAccessManaged {\n        id\n      }\n      membership {\n        id\n        manager {\n          id\n          asAccount {\n            id\n          }\n        }\n        role {\n          ...AccessManagerRoleFragment\n        }\n      }\n      targettedBy {\n        id\n        manager {\n          id\n          asAccount {\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccessManagerRoleFragment on AccessManagerRole {\n    id\n    label\n    asRole {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment AccessManagerRoleFragment on AccessManagerRole {\n    id\n    label\n    asRole {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AccessManagerRoleMembers($address: String!) {\n    accessManagerRoleMembers(where: { asAccount: $address }) {\n      id\n      asAccount {\n        id\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessManagerRoleMembers($address: String!) {\n    accessManagerRoleMembers(where: { asAccount: $address }) {\n      id\n      asAccount {\n        id\n      }\n      manager {\n        id\n        asAccount {\n          id\n        }\n      }\n      role {\n        ...AccessManagerRoleFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;