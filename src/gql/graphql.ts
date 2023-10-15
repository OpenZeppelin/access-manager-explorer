/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
};

export type AccessManaged = {
  __typename?: 'AccessManaged';
  asAccount: Account;
  authority: Account;
  id: Scalars['Bytes']['output'];
};

export type AccessManagedOperation = {
  __typename?: 'AccessManagedOperation';
  asOperation: Operation;
  caller: Account;
  data: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  manager: AccessManager;
  nonce: Scalars['BigInt']['output'];
  schedule: Scalars['BigInt']['output'];
  status: AccessManagedOperationStatus;
  target: Account;
};

export enum AccessManagedOperationStatus {
  Canceled = 'CANCELED',
  Executed = 'EXECUTED',
  Scheduled = 'SCHEDULED'
}

export type AccessManagedOperation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccessManagedOperation_Filter>>>;
  asOperation?: InputMaybe<Scalars['String']['input']>;
  asOperation_?: InputMaybe<Operation_Filter>;
  asOperation_contains?: InputMaybe<Scalars['String']['input']>;
  asOperation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asOperation_ends_with?: InputMaybe<Scalars['String']['input']>;
  asOperation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asOperation_gt?: InputMaybe<Scalars['String']['input']>;
  asOperation_gte?: InputMaybe<Scalars['String']['input']>;
  asOperation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asOperation_lt?: InputMaybe<Scalars['String']['input']>;
  asOperation_lte?: InputMaybe<Scalars['String']['input']>;
  asOperation_not?: InputMaybe<Scalars['String']['input']>;
  asOperation_not_contains?: InputMaybe<Scalars['String']['input']>;
  asOperation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asOperation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asOperation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asOperation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asOperation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asOperation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asOperation_starts_with?: InputMaybe<Scalars['String']['input']>;
  asOperation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_?: InputMaybe<Account_Filter>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_gt?: InputMaybe<Scalars['String']['input']>;
  caller_gte?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caller_lt?: InputMaybe<Scalars['String']['input']>;
  caller_lte?: InputMaybe<Scalars['String']['input']>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<AccessManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccessManagedOperation_Filter>>>;
  schedule?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_gt?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_gte?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  schedule_lt?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_lte?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_not?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<AccessManagedOperationStatus>;
  status_in?: InputMaybe<Array<AccessManagedOperationStatus>>;
  status_not?: InputMaybe<AccessManagedOperationStatus>;
  status_not_in?: InputMaybe<Array<AccessManagedOperationStatus>>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_?: InputMaybe<Account_Filter>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccessManagedOperation_OrderBy {
  AsOperation = 'asOperation',
  AsOperationId = 'asOperation__id',
  Caller = 'caller',
  CallerId = 'caller__id',
  Data = 'data',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  Nonce = 'nonce',
  Schedule = 'schedule',
  Status = 'status',
  Target = 'target',
  TargetId = 'target__id'
}

export type AccessManaged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccessManaged_Filter>>>;
  asAccount?: InputMaybe<Scalars['String']['input']>;
  asAccount_?: InputMaybe<Account_Filter>;
  asAccount_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_gt?: InputMaybe<Scalars['String']['input']>;
  asAccount_gte?: InputMaybe<Scalars['String']['input']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_lt?: InputMaybe<Scalars['String']['input']>;
  asAccount_lte?: InputMaybe<Scalars['String']['input']>;
  asAccount_not?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority?: InputMaybe<Scalars['String']['input']>;
  authority_?: InputMaybe<Account_Filter>;
  authority_contains?: InputMaybe<Scalars['String']['input']>;
  authority_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_ends_with?: InputMaybe<Scalars['String']['input']>;
  authority_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_gt?: InputMaybe<Scalars['String']['input']>;
  authority_gte?: InputMaybe<Scalars['String']['input']>;
  authority_in?: InputMaybe<Array<Scalars['String']['input']>>;
  authority_lt?: InputMaybe<Scalars['String']['input']>;
  authority_lte?: InputMaybe<Scalars['String']['input']>;
  authority_not?: InputMaybe<Scalars['String']['input']>;
  authority_not_contains?: InputMaybe<Scalars['String']['input']>;
  authority_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  authority_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  authority_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  authority_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_starts_with?: InputMaybe<Scalars['String']['input']>;
  authority_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccessManaged_Filter>>>;
};

export enum AccessManaged_OrderBy {
  AsAccount = 'asAccount',
  AsAccountId = 'asAccount__id',
  Authority = 'authority',
  AuthorityId = 'authority__id',
  Id = 'id'
}

export type AccessManager = {
  __typename?: 'AccessManager';
  asAccount: Account;
  functions: Array<AccessManagerTargetFunction>;
  id: Scalars['Bytes']['output'];
  members: Array<AccessManagerRoleMember>;
  operations: Array<AccessManagedOperation>;
  roles: Array<AccessManagerRole>;
  targets: Array<AccessManagerTarget>;
};


export type AccessManagerFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTargetFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerTargetFunction_Filter>;
};


export type AccessManagerMembersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRoleMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRoleMember_Filter>;
};


export type AccessManagerOperationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagedOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagedOperation_Filter>;
};


export type AccessManagerRolesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRole_Filter>;
};


export type AccessManagerTargetsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTarget_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerTarget_Filter>;
};

export type AccessManagerRole = {
  __typename?: 'AccessManagerRole';
  admin: AccessManagerRole;
  adminOf: Array<AccessManagerRole>;
  asRole: Role;
  functions: Array<AccessManagerTargetFunction>;
  grantDelay: DelayedBigInt;
  guardian: AccessManagerRole;
  guardianOf: Array<AccessManagerRole>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  manager: AccessManager;
  members: Array<AccessManagerRoleMember>;
};


export type AccessManagerRoleAdminOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRole_Filter>;
};


export type AccessManagerRoleFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTargetFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerTargetFunction_Filter>;
};


export type AccessManagerRoleGuardianOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRole_Filter>;
};


export type AccessManagerRoleMembersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRoleMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRoleMember_Filter>;
};

export type AccessManagerRoleMember = {
  __typename?: 'AccessManagerRoleMember';
  asAccount: Account;
  executionDelay: DelayedBigInt;
  id: Scalars['ID']['output'];
  manager: AccessManager;
  role: AccessManagerRole;
  since: Scalars['BigInt']['output'];
};

export type AccessManagerRoleMember_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccessManagerRoleMember_Filter>>>;
  asAccount?: InputMaybe<Scalars['String']['input']>;
  asAccount_?: InputMaybe<Account_Filter>;
  asAccount_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_gt?: InputMaybe<Scalars['String']['input']>;
  asAccount_gte?: InputMaybe<Scalars['String']['input']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_lt?: InputMaybe<Scalars['String']['input']>;
  asAccount_lte?: InputMaybe<Scalars['String']['input']>;
  asAccount_not?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  executionDelay?: InputMaybe<Scalars['String']['input']>;
  executionDelay_?: InputMaybe<DelayedBigInt_Filter>;
  executionDelay_contains?: InputMaybe<Scalars['String']['input']>;
  executionDelay_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  executionDelay_ends_with?: InputMaybe<Scalars['String']['input']>;
  executionDelay_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  executionDelay_gt?: InputMaybe<Scalars['String']['input']>;
  executionDelay_gte?: InputMaybe<Scalars['String']['input']>;
  executionDelay_in?: InputMaybe<Array<Scalars['String']['input']>>;
  executionDelay_lt?: InputMaybe<Scalars['String']['input']>;
  executionDelay_lte?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not_contains?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  executionDelay_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  executionDelay_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  executionDelay_starts_with?: InputMaybe<Scalars['String']['input']>;
  executionDelay_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<AccessManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccessManagerRoleMember_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<AccessManagerRole_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  since?: InputMaybe<Scalars['BigInt']['input']>;
  since_gt?: InputMaybe<Scalars['BigInt']['input']>;
  since_gte?: InputMaybe<Scalars['BigInt']['input']>;
  since_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  since_lt?: InputMaybe<Scalars['BigInt']['input']>;
  since_lte?: InputMaybe<Scalars['BigInt']['input']>;
  since_not?: InputMaybe<Scalars['BigInt']['input']>;
  since_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccessManagerRoleMember_OrderBy {
  AsAccount = 'asAccount',
  AsAccountId = 'asAccount__id',
  ExecutionDelay = 'executionDelay',
  ExecutionDelayId = 'executionDelay__id',
  ExecutionDelayOldValue = 'executionDelay__oldValue',
  ExecutionDelaySince = 'executionDelay__since',
  ExecutionDelayValue = 'executionDelay__value',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  Role = 'role',
  RoleId = 'role__id',
  RoleLabel = 'role__label',
  Since = 'since'
}

export type AccessManagerRole_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  admin?: InputMaybe<Scalars['String']['input']>;
  adminOf_?: InputMaybe<AccessManagerRole_Filter>;
  admin_?: InputMaybe<AccessManagerRole_Filter>;
  admin_contains?: InputMaybe<Scalars['String']['input']>;
  admin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_gt?: InputMaybe<Scalars['String']['input']>;
  admin_gte?: InputMaybe<Scalars['String']['input']>;
  admin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_lt?: InputMaybe<Scalars['String']['input']>;
  admin_lte?: InputMaybe<Scalars['String']['input']>;
  admin_not?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccessManagerRole_Filter>>>;
  asRole?: InputMaybe<Scalars['String']['input']>;
  asRole_?: InputMaybe<Role_Filter>;
  asRole_contains?: InputMaybe<Scalars['String']['input']>;
  asRole_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asRole_ends_with?: InputMaybe<Scalars['String']['input']>;
  asRole_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asRole_gt?: InputMaybe<Scalars['String']['input']>;
  asRole_gte?: InputMaybe<Scalars['String']['input']>;
  asRole_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asRole_lt?: InputMaybe<Scalars['String']['input']>;
  asRole_lte?: InputMaybe<Scalars['String']['input']>;
  asRole_not?: InputMaybe<Scalars['String']['input']>;
  asRole_not_contains?: InputMaybe<Scalars['String']['input']>;
  asRole_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asRole_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asRole_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asRole_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asRole_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asRole_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asRole_starts_with?: InputMaybe<Scalars['String']['input']>;
  asRole_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  functions_?: InputMaybe<AccessManagerTargetFunction_Filter>;
  grantDelay?: InputMaybe<Scalars['String']['input']>;
  grantDelay_?: InputMaybe<DelayedBigInt_Filter>;
  grantDelay_contains?: InputMaybe<Scalars['String']['input']>;
  grantDelay_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  grantDelay_ends_with?: InputMaybe<Scalars['String']['input']>;
  grantDelay_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  grantDelay_gt?: InputMaybe<Scalars['String']['input']>;
  grantDelay_gte?: InputMaybe<Scalars['String']['input']>;
  grantDelay_in?: InputMaybe<Array<Scalars['String']['input']>>;
  grantDelay_lt?: InputMaybe<Scalars['String']['input']>;
  grantDelay_lte?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not_contains?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  grantDelay_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  grantDelay_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  grantDelay_starts_with?: InputMaybe<Scalars['String']['input']>;
  grantDelay_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian?: InputMaybe<Scalars['String']['input']>;
  guardianOf_?: InputMaybe<AccessManagerRole_Filter>;
  guardian_?: InputMaybe<AccessManagerRole_Filter>;
  guardian_contains?: InputMaybe<Scalars['String']['input']>;
  guardian_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_ends_with?: InputMaybe<Scalars['String']['input']>;
  guardian_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_gt?: InputMaybe<Scalars['String']['input']>;
  guardian_gte?: InputMaybe<Scalars['String']['input']>;
  guardian_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guardian_lt?: InputMaybe<Scalars['String']['input']>;
  guardian_lte?: InputMaybe<Scalars['String']['input']>;
  guardian_not?: InputMaybe<Scalars['String']['input']>;
  guardian_not_contains?: InputMaybe<Scalars['String']['input']>;
  guardian_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  guardian_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guardian_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  guardian_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_starts_with?: InputMaybe<Scalars['String']['input']>;
  guardian_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_gt?: InputMaybe<Scalars['String']['input']>;
  label_gte?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_lt?: InputMaybe<Scalars['String']['input']>;
  label_lte?: InputMaybe<Scalars['String']['input']>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<AccessManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  members_?: InputMaybe<AccessManagerRoleMember_Filter>;
  or?: InputMaybe<Array<InputMaybe<AccessManagerRole_Filter>>>;
};

export enum AccessManagerRole_OrderBy {
  Admin = 'admin',
  AdminOf = 'adminOf',
  AdminId = 'admin__id',
  AdminLabel = 'admin__label',
  AsRole = 'asRole',
  AsRoleId = 'asRole__id',
  Functions = 'functions',
  GrantDelay = 'grantDelay',
  GrantDelayId = 'grantDelay__id',
  GrantDelayOldValue = 'grantDelay__oldValue',
  GrantDelaySince = 'grantDelay__since',
  GrantDelayValue = 'grantDelay__value',
  Guardian = 'guardian',
  GuardianOf = 'guardianOf',
  GuardianId = 'guardian__id',
  GuardianLabel = 'guardian__label',
  Id = 'id',
  Label = 'label',
  Manager = 'manager',
  ManagerId = 'manager__id',
  Members = 'members'
}

export type AccessManagerTarget = {
  __typename?: 'AccessManagerTarget';
  adminDelay: DelayedBigInt;
  asAccount: Account;
  closed: Scalars['Boolean']['output'];
  functions: Array<AccessManagerTargetFunction>;
  id: Scalars['ID']['output'];
  manager: AccessManager;
};


export type AccessManagerTargetFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTargetFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerTargetFunction_Filter>;
};

export type AccessManagerTargetFunction = {
  __typename?: 'AccessManagerTargetFunction';
  asSelector: Selector;
  id: Scalars['ID']['output'];
  manager: AccessManager;
  role: AccessManagerRole;
  target: AccessManagerTarget;
};

export type AccessManagerTargetFunction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccessManagerTargetFunction_Filter>>>;
  asSelector?: InputMaybe<Scalars['String']['input']>;
  asSelector_?: InputMaybe<Selector_Filter>;
  asSelector_contains?: InputMaybe<Scalars['String']['input']>;
  asSelector_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asSelector_ends_with?: InputMaybe<Scalars['String']['input']>;
  asSelector_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asSelector_gt?: InputMaybe<Scalars['String']['input']>;
  asSelector_gte?: InputMaybe<Scalars['String']['input']>;
  asSelector_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asSelector_lt?: InputMaybe<Scalars['String']['input']>;
  asSelector_lte?: InputMaybe<Scalars['String']['input']>;
  asSelector_not?: InputMaybe<Scalars['String']['input']>;
  asSelector_not_contains?: InputMaybe<Scalars['String']['input']>;
  asSelector_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asSelector_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asSelector_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asSelector_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asSelector_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asSelector_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asSelector_starts_with?: InputMaybe<Scalars['String']['input']>;
  asSelector_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<AccessManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccessManagerTargetFunction_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<AccessManagerRole_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_?: InputMaybe<AccessManagerTarget_Filter>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AccessManagerTargetFunction_OrderBy {
  AsSelector = 'asSelector',
  AsSelectorId = 'asSelector__id',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id',
  Role = 'role',
  RoleId = 'role__id',
  RoleLabel = 'role__label',
  Target = 'target',
  TargetClosed = 'target__closed',
  TargetId = 'target__id'
}

export type AccessManagerTarget_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adminDelay?: InputMaybe<Scalars['String']['input']>;
  adminDelay_?: InputMaybe<DelayedBigInt_Filter>;
  adminDelay_contains?: InputMaybe<Scalars['String']['input']>;
  adminDelay_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adminDelay_ends_with?: InputMaybe<Scalars['String']['input']>;
  adminDelay_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminDelay_gt?: InputMaybe<Scalars['String']['input']>;
  adminDelay_gte?: InputMaybe<Scalars['String']['input']>;
  adminDelay_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adminDelay_lt?: InputMaybe<Scalars['String']['input']>;
  adminDelay_lte?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not_contains?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adminDelay_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adminDelay_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adminDelay_starts_with?: InputMaybe<Scalars['String']['input']>;
  adminDelay_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccessManagerTarget_Filter>>>;
  asAccount?: InputMaybe<Scalars['String']['input']>;
  asAccount_?: InputMaybe<Account_Filter>;
  asAccount_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_gt?: InputMaybe<Scalars['String']['input']>;
  asAccount_gte?: InputMaybe<Scalars['String']['input']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_lt?: InputMaybe<Scalars['String']['input']>;
  asAccount_lte?: InputMaybe<Scalars['String']['input']>;
  asAccount_not?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  functions_?: InputMaybe<AccessManagerTargetFunction_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<AccessManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccessManagerTarget_Filter>>>;
};

export enum AccessManagerTarget_OrderBy {
  AdminDelay = 'adminDelay',
  AdminDelayId = 'adminDelay__id',
  AdminDelayOldValue = 'adminDelay__oldValue',
  AdminDelaySince = 'adminDelay__since',
  AdminDelayValue = 'adminDelay__value',
  AsAccount = 'asAccount',
  AsAccountId = 'asAccount__id',
  Closed = 'closed',
  Functions = 'functions',
  Id = 'id',
  Manager = 'manager',
  ManagerId = 'manager__id'
}

export type AccessManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccessManager_Filter>>>;
  asAccount?: InputMaybe<Scalars['String']['input']>;
  asAccount_?: InputMaybe<Account_Filter>;
  asAccount_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_gt?: InputMaybe<Scalars['String']['input']>;
  asAccount_gte?: InputMaybe<Scalars['String']['input']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_lt?: InputMaybe<Scalars['String']['input']>;
  asAccount_lte?: InputMaybe<Scalars['String']['input']>;
  asAccount_not?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  functions_?: InputMaybe<AccessManagerTargetFunction_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  members_?: InputMaybe<AccessManagerRoleMember_Filter>;
  operations_?: InputMaybe<AccessManagedOperation_Filter>;
  or?: InputMaybe<Array<InputMaybe<AccessManager_Filter>>>;
  roles_?: InputMaybe<AccessManagerRole_Filter>;
  targets_?: InputMaybe<AccessManagerTarget_Filter>;
};

export enum AccessManager_OrderBy {
  AsAccount = 'asAccount',
  AsAccountId = 'asAccount__id',
  Functions = 'functions',
  Id = 'id',
  Members = 'members',
  Operations = 'operations',
  Roles = 'roles',
  Targets = 'targets'
}

export type Account = {
  __typename?: 'Account';
  asAccessManaged?: Maybe<AccessManaged>;
  asAccessManager?: Maybe<AccessManager>;
  authorityOf: Array<AccessManaged>;
  authorityUpdated: Array<AuthorityUpdated>;
  authorityUpdatedSender: Array<AuthorityUpdated>;
  events: Array<Event>;
  id: Scalars['Bytes']['output'];
  membership: Array<AccessManagerRoleMember>;
  operationCallerOf: Array<AccessManagedOperation>;
  operationExecutedSender: Array<OperationExecuted>;
  operationScheduledCaller: Array<OperationScheduled>;
  operationScheduledSender: Array<OperationScheduled>;
  operationScheduledTarget: Array<OperationScheduled>;
  operationTargetOf: Array<AccessManagedOperation>;
  roleAdminChangedSender: Array<RoleAdminChanged>;
  roleGranted: Array<RoleGranted>;
  roleGrantedSender: Array<RoleGranted>;
  roleLabelSender: Array<RoleLabel>;
  roleRevoked: Array<RoleRevoked>;
  roleRevokedSender: Array<RoleRevoked>;
  targetAdminDelayUpdatedSender: Array<TargetAdminDelayUpdated>;
  targetClosed: Array<TargetClosed>;
  targetClosedSender: Array<TargetClosed>;
  targetFunctionRoleUpdated: Array<TargetFunctionRoleUpdated>;
  targetFunctionRoleUpdatedSender: Array<TargetFunctionRoleUpdated>;
  targettedBy: Array<AccessManagerTarget>;
  transactions: Array<Transaction>;
};


export type AccountAuthorityOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManaged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManaged_Filter>;
};


export type AccountAuthorityUpdatedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuthorityUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorityUpdated_Filter>;
};


export type AccountAuthorityUpdatedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuthorityUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorityUpdated_Filter>;
};


export type AccountEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};


export type AccountMembershipArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRoleMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRoleMember_Filter>;
};


export type AccountOperationCallerOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagedOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagedOperation_Filter>;
};


export type AccountOperationExecutedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationExecuted_Filter>;
};


export type AccountOperationScheduledCallerArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationScheduled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationScheduled_Filter>;
};


export type AccountOperationScheduledSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationScheduled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationScheduled_Filter>;
};


export type AccountOperationScheduledTargetArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationScheduled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationScheduled_Filter>;
};


export type AccountOperationTargetOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagedOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagedOperation_Filter>;
};


export type AccountRoleAdminChangedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type AccountRoleGrantedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type AccountRoleGrantedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type AccountRoleLabelSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleLabel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleLabel_Filter>;
};


export type AccountRoleRevokedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type AccountRoleRevokedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type AccountTargetAdminDelayUpdatedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetAdminDelayUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetAdminDelayUpdated_Filter>;
};


export type AccountTargetClosedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetClosed_Filter>;
};


export type AccountTargetClosedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetClosed_Filter>;
};


export type AccountTargetFunctionRoleUpdatedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetFunctionRoleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};


export type AccountTargetFunctionRoleUpdatedSenderArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetFunctionRoleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};


export type AccountTargettedByArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTarget_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerTarget_Filter>;
};


export type AccountTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Transaction_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  asAccessManaged?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_?: InputMaybe<AccessManaged_Filter>;
  asAccessManaged_contains?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_gt?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_gte?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccessManaged_lt?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_lte?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccessManaged_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManaged_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManager?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_?: InputMaybe<AccessManager_Filter>;
  asAccessManager_contains?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_gt?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_gte?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccessManager_lt?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_lte?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccessManager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccessManager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authorityOf_?: InputMaybe<AccessManaged_Filter>;
  authorityUpdatedSender_?: InputMaybe<AuthorityUpdated_Filter>;
  authorityUpdated_?: InputMaybe<AuthorityUpdated_Filter>;
  events_?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  membership_?: InputMaybe<AccessManagerRoleMember_Filter>;
  operationCallerOf_?: InputMaybe<AccessManagedOperation_Filter>;
  operationExecutedSender_?: InputMaybe<OperationExecuted_Filter>;
  operationScheduledCaller_?: InputMaybe<OperationScheduled_Filter>;
  operationScheduledSender_?: InputMaybe<OperationScheduled_Filter>;
  operationScheduledTarget_?: InputMaybe<OperationScheduled_Filter>;
  operationTargetOf_?: InputMaybe<AccessManagedOperation_Filter>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  roleAdminChangedSender_?: InputMaybe<RoleAdminChanged_Filter>;
  roleGrantedSender_?: InputMaybe<RoleGranted_Filter>;
  roleGranted_?: InputMaybe<RoleGranted_Filter>;
  roleLabelSender_?: InputMaybe<RoleLabel_Filter>;
  roleRevokedSender_?: InputMaybe<RoleRevoked_Filter>;
  roleRevoked_?: InputMaybe<RoleRevoked_Filter>;
  targetAdminDelayUpdatedSender_?: InputMaybe<TargetAdminDelayUpdated_Filter>;
  targetClosedSender_?: InputMaybe<TargetClosed_Filter>;
  targetClosed_?: InputMaybe<TargetClosed_Filter>;
  targetFunctionRoleUpdatedSender_?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
  targetFunctionRoleUpdated_?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
  targettedBy_?: InputMaybe<AccessManagerTarget_Filter>;
  transactions_?: InputMaybe<Transaction_Filter>;
};

export enum Account_OrderBy {
  AsAccessManaged = 'asAccessManaged',
  AsAccessManagedId = 'asAccessManaged__id',
  AsAccessManager = 'asAccessManager',
  AsAccessManagerId = 'asAccessManager__id',
  AuthorityOf = 'authorityOf',
  AuthorityUpdated = 'authorityUpdated',
  AuthorityUpdatedSender = 'authorityUpdatedSender',
  Events = 'events',
  Id = 'id',
  Membership = 'membership',
  OperationCallerOf = 'operationCallerOf',
  OperationExecutedSender = 'operationExecutedSender',
  OperationScheduledCaller = 'operationScheduledCaller',
  OperationScheduledSender = 'operationScheduledSender',
  OperationScheduledTarget = 'operationScheduledTarget',
  OperationTargetOf = 'operationTargetOf',
  RoleAdminChangedSender = 'roleAdminChangedSender',
  RoleGranted = 'roleGranted',
  RoleGrantedSender = 'roleGrantedSender',
  RoleLabelSender = 'roleLabelSender',
  RoleRevoked = 'roleRevoked',
  RoleRevokedSender = 'roleRevokedSender',
  TargetAdminDelayUpdatedSender = 'targetAdminDelayUpdatedSender',
  TargetClosed = 'targetClosed',
  TargetClosedSender = 'targetClosedSender',
  TargetFunctionRoleUpdated = 'targetFunctionRoleUpdated',
  TargetFunctionRoleUpdatedSender = 'targetFunctionRoleUpdatedSender',
  TargettedBy = 'targettedBy',
  Transactions = 'transactions'
}

export type AuthorityUpdated = Event & {
  __typename?: 'AuthorityUpdated';
  authority: Account;
  emitter: Account;
  id: Scalars['Bytes']['output'];
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type AuthorityUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuthorityUpdated_Filter>>>;
  authority?: InputMaybe<Scalars['String']['input']>;
  authority_?: InputMaybe<Account_Filter>;
  authority_contains?: InputMaybe<Scalars['String']['input']>;
  authority_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_ends_with?: InputMaybe<Scalars['String']['input']>;
  authority_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_gt?: InputMaybe<Scalars['String']['input']>;
  authority_gte?: InputMaybe<Scalars['String']['input']>;
  authority_in?: InputMaybe<Array<Scalars['String']['input']>>;
  authority_lt?: InputMaybe<Scalars['String']['input']>;
  authority_lte?: InputMaybe<Scalars['String']['input']>;
  authority_not?: InputMaybe<Scalars['String']['input']>;
  authority_not_contains?: InputMaybe<Scalars['String']['input']>;
  authority_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  authority_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  authority_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  authority_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  authority_starts_with?: InputMaybe<Scalars['String']['input']>;
  authority_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AuthorityUpdated_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AuthorityUpdated_OrderBy {
  Authority = 'authority',
  AuthorityId = 'authority__id',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type DelayedBigInt = {
  __typename?: 'DelayedBigInt';
  id: Scalars['ID']['output'];
  oldValue: Scalars['BigInt']['output'];
  since: Scalars['BigInt']['output'];
  value: Scalars['BigInt']['output'];
};

export type DelayedBigInt_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelayedBigInt_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  oldValue?: InputMaybe<Scalars['BigInt']['input']>;
  oldValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oldValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oldValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oldValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oldValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oldValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  oldValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DelayedBigInt_Filter>>>;
  since?: InputMaybe<Scalars['BigInt']['input']>;
  since_gt?: InputMaybe<Scalars['BigInt']['input']>;
  since_gte?: InputMaybe<Scalars['BigInt']['input']>;
  since_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  since_lt?: InputMaybe<Scalars['BigInt']['input']>;
  since_lte?: InputMaybe<Scalars['BigInt']['input']>;
  since_not?: InputMaybe<Scalars['BigInt']['input']>;
  since_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DelayedBigInt_OrderBy {
  Id = 'id',
  OldValue = 'oldValue',
  Since = 'since',
  Value = 'value'
}

export type Event = {
  emitter: Account;
  id: Scalars['Bytes']['output'];
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Event_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Operation = {
  __typename?: 'Operation';
  id: Scalars['Bytes']['output'];
  operationCanceled: Array<OperationCanceled>;
  operationExecuted: Array<OperationExecuted>;
  operationOf: Array<Maybe<AccessManagedOperation>>;
  operationScheduled: Array<OperationScheduled>;
};


export type OperationOperationCanceledArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationCanceled_Filter>;
};


export type OperationOperationExecutedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationExecuted_Filter>;
};


export type OperationOperationOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagedOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagedOperation_Filter>;
};


export type OperationOperationScheduledArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationScheduled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperationScheduled_Filter>;
};

export type OperationCanceled = Event & {
  __typename?: 'OperationCanceled';
  emitter: Account;
  id: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  operation: Operation;
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type OperationCanceled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperationCanceled_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operation?: InputMaybe<Scalars['String']['input']>;
  operation_?: InputMaybe<Operation_Filter>;
  operation_contains?: InputMaybe<Scalars['String']['input']>;
  operation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_ends_with?: InputMaybe<Scalars['String']['input']>;
  operation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_gt?: InputMaybe<Scalars['String']['input']>;
  operation_gte?: InputMaybe<Scalars['String']['input']>;
  operation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operation_lt?: InputMaybe<Scalars['String']['input']>;
  operation_lte?: InputMaybe<Scalars['String']['input']>;
  operation_not?: InputMaybe<Scalars['String']['input']>;
  operation_not_contains?: InputMaybe<Scalars['String']['input']>;
  operation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_starts_with?: InputMaybe<Scalars['String']['input']>;
  operation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<OperationCanceled_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OperationCanceled_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Nonce = 'nonce',
  Operation = 'operation',
  OperationId = 'operation__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type OperationExecuted = Event & {
  __typename?: 'OperationExecuted';
  emitter: Account;
  id: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  operation: Operation;
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type OperationExecuted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperationExecuted_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operation?: InputMaybe<Scalars['String']['input']>;
  operation_?: InputMaybe<Operation_Filter>;
  operation_contains?: InputMaybe<Scalars['String']['input']>;
  operation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_ends_with?: InputMaybe<Scalars['String']['input']>;
  operation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_gt?: InputMaybe<Scalars['String']['input']>;
  operation_gte?: InputMaybe<Scalars['String']['input']>;
  operation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operation_lt?: InputMaybe<Scalars['String']['input']>;
  operation_lte?: InputMaybe<Scalars['String']['input']>;
  operation_not?: InputMaybe<Scalars['String']['input']>;
  operation_not_contains?: InputMaybe<Scalars['String']['input']>;
  operation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_starts_with?: InputMaybe<Scalars['String']['input']>;
  operation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<OperationExecuted_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OperationExecuted_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Nonce = 'nonce',
  Operation = 'operation',
  OperationId = 'operation__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type OperationScheduled = Event & {
  __typename?: 'OperationScheduled';
  caller: Account;
  data: Scalars['Bytes']['output'];
  emitter: Account;
  id: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  operation: Operation;
  schedule: Scalars['BigInt']['output'];
  sender: Account;
  target: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type OperationScheduled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperationScheduled_Filter>>>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_?: InputMaybe<Account_Filter>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_gt?: InputMaybe<Scalars['String']['input']>;
  caller_gte?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caller_lt?: InputMaybe<Scalars['String']['input']>;
  caller_lte?: InputMaybe<Scalars['String']['input']>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operation?: InputMaybe<Scalars['String']['input']>;
  operation_?: InputMaybe<Operation_Filter>;
  operation_contains?: InputMaybe<Scalars['String']['input']>;
  operation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_ends_with?: InputMaybe<Scalars['String']['input']>;
  operation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_gt?: InputMaybe<Scalars['String']['input']>;
  operation_gte?: InputMaybe<Scalars['String']['input']>;
  operation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operation_lt?: InputMaybe<Scalars['String']['input']>;
  operation_lte?: InputMaybe<Scalars['String']['input']>;
  operation_not?: InputMaybe<Scalars['String']['input']>;
  operation_not_contains?: InputMaybe<Scalars['String']['input']>;
  operation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation_starts_with?: InputMaybe<Scalars['String']['input']>;
  operation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<OperationScheduled_Filter>>>;
  schedule?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_gt?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_gte?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  schedule_lt?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_lte?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_not?: InputMaybe<Scalars['BigInt']['input']>;
  schedule_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_?: InputMaybe<Account_Filter>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OperationScheduled_OrderBy {
  Caller = 'caller',
  CallerId = 'caller__id',
  Data = 'data',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Nonce = 'nonce',
  Operation = 'operation',
  OperationId = 'operation__id',
  Schedule = 'schedule',
  Sender = 'sender',
  SenderId = 'sender__id',
  Target = 'target',
  TargetId = 'target__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Operation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Operation_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operationCanceled_?: InputMaybe<OperationCanceled_Filter>;
  operationExecuted_?: InputMaybe<OperationExecuted_Filter>;
  operationOf_?: InputMaybe<AccessManagedOperation_Filter>;
  operationScheduled_?: InputMaybe<OperationScheduled_Filter>;
  or?: InputMaybe<Array<InputMaybe<Operation_Filter>>>;
};

export enum Operation_OrderBy {
  Id = 'id',
  OperationCanceled = 'operationCanceled',
  OperationExecuted = 'operationExecuted',
  OperationOf = 'operationOf',
  OperationScheduled = 'operationScheduled'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accessManaged?: Maybe<AccessManaged>;
  accessManagedOperation?: Maybe<AccessManagedOperation>;
  accessManagedOperations: Array<AccessManagedOperation>;
  accessManageds: Array<AccessManaged>;
  accessManager?: Maybe<AccessManager>;
  accessManagerRole?: Maybe<AccessManagerRole>;
  accessManagerRoleMember?: Maybe<AccessManagerRoleMember>;
  accessManagerRoleMembers: Array<AccessManagerRoleMember>;
  accessManagerRoles: Array<AccessManagerRole>;
  accessManagerTarget?: Maybe<AccessManagerTarget>;
  accessManagerTargetFunction?: Maybe<AccessManagerTargetFunction>;
  accessManagerTargetFunctions: Array<AccessManagerTargetFunction>;
  accessManagerTargets: Array<AccessManagerTarget>;
  accessManagers: Array<AccessManager>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  authorityUpdated?: Maybe<AuthorityUpdated>;
  authorityUpdateds: Array<AuthorityUpdated>;
  delayedBigInt?: Maybe<DelayedBigInt>;
  delayedBigInts: Array<DelayedBigInt>;
  event?: Maybe<Event>;
  events: Array<Event>;
  operation?: Maybe<Operation>;
  operationCanceled?: Maybe<OperationCanceled>;
  operationCanceleds: Array<OperationCanceled>;
  operationExecuted?: Maybe<OperationExecuted>;
  operationExecuteds: Array<OperationExecuted>;
  operationScheduled?: Maybe<OperationScheduled>;
  operationScheduleds: Array<OperationScheduled>;
  operations: Array<Operation>;
  role?: Maybe<Role>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGrantDelayChanged?: Maybe<RoleGrantDelayChanged>;
  roleGrantDelayChangeds: Array<RoleGrantDelayChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleGuardianChanged?: Maybe<RoleGuardianChanged>;
  roleGuardianChangeds: Array<RoleGuardianChanged>;
  roleLabel?: Maybe<RoleLabel>;
  roleLabels: Array<RoleLabel>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  roles: Array<Role>;
  selector?: Maybe<Selector>;
  selectors: Array<Selector>;
  targetAdminDelayUpdated?: Maybe<TargetAdminDelayUpdated>;
  targetAdminDelayUpdateds: Array<TargetAdminDelayUpdated>;
  targetClosed?: Maybe<TargetClosed>;
  targetCloseds: Array<TargetClosed>;
  targetFunctionRoleUpdated?: Maybe<TargetFunctionRoleUpdated>;
  targetFunctionRoleUpdateds: Array<TargetFunctionRoleUpdated>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccessManagedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagedOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagedOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagedOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagedOperation_Filter>;
};


export type QueryAccessManagedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManaged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManaged_Filter>;
};


export type QueryAccessManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagerRoleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagerRoleMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagerRoleMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRoleMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerRoleMember_Filter>;
};


export type QueryAccessManagerRolesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerRole_Filter>;
};


export type QueryAccessManagerTargetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagerTargetFunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccessManagerTargetFunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTargetFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerTargetFunction_Filter>;
};


export type QueryAccessManagerTargetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTarget_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerTarget_Filter>;
};


export type QueryAccessManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManager_Filter>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAuthorityUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAuthorityUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuthorityUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuthorityUpdated_Filter>;
};


export type QueryDelayedBigIntArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelayedBigIntsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelayedBigInt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelayedBigInt_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperationCanceledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperationCanceledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperationCanceled_Filter>;
};


export type QueryOperationExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperationExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperationExecuted_Filter>;
};


export type QueryOperationScheduledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperationScheduledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationScheduled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperationScheduled_Filter>;
};


export type QueryOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operation_Filter>;
};


export type QueryRoleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type QueryRoleGrantDelayChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantDelayChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGrantDelayChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGrantDelayChanged_Filter>;
};


export type QueryRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type QueryRoleGuardianChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleGuardianChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGuardianChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGuardianChanged_Filter>;
};


export type QueryRoleLabelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleLabelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleLabel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleLabel_Filter>;
};


export type QueryRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type QueryRolesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Role_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Role_Filter>;
};


export type QuerySelectorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySelectorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Selector_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Selector_Filter>;
};


export type QueryTargetAdminDelayUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTargetAdminDelayUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetAdminDelayUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TargetAdminDelayUpdated_Filter>;
};


export type QueryTargetClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTargetClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TargetClosed_Filter>;
};


export type QueryTargetFunctionRoleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTargetFunctionRoleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetFunctionRoleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID']['output'];
  roleAdminChangedAdmin: Array<RoleAdminChanged>;
  roleAdminChangedRole: Array<RoleAdminChanged>;
  roleGrantDelayChanged: Array<RoleGrantDelayChanged>;
  roleGranted: Array<RoleGranted>;
  roleGuardianChangedGuardian: Array<RoleGuardianChanged>;
  roleGuardianChangedRole: Array<RoleGuardianChanged>;
  roleLabel: Array<RoleLabel>;
  roleOf: Array<AccessManagerRole>;
  roleRevoked: Array<RoleRevoked>;
  targetFunctionRoleUpdated: Array<TargetFunctionRoleUpdated>;
};


export type RoleRoleAdminChangedAdminArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type RoleRoleAdminChangedRoleArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type RoleRoleGrantDelayChangedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGrantDelayChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleGrantDelayChanged_Filter>;
};


export type RoleRoleGrantedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type RoleRoleGuardianChangedGuardianArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGuardianChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleGuardianChanged_Filter>;
};


export type RoleRoleGuardianChangedRoleArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGuardianChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleGuardianChanged_Filter>;
};


export type RoleRoleLabelArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleLabel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleLabel_Filter>;
};


export type RoleRoleOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerRole_Filter>;
};


export type RoleRoleRevokedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type RoleTargetFunctionRoleUpdatedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetFunctionRoleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};

export type RoleAdminChanged = Event & {
  __typename?: 'RoleAdminChanged';
  admin: Role;
  emitter: Account;
  id: Scalars['Bytes']['output'];
  role: Role;
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type RoleAdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  admin?: InputMaybe<Scalars['String']['input']>;
  admin_?: InputMaybe<Role_Filter>;
  admin_contains?: InputMaybe<Scalars['String']['input']>;
  admin_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_gt?: InputMaybe<Scalars['String']['input']>;
  admin_gte?: InputMaybe<Scalars['String']['input']>;
  admin_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_lt?: InputMaybe<Scalars['String']['input']>;
  admin_lte?: InputMaybe<Scalars['String']['input']>;
  admin_not?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains?: InputMaybe<Scalars['String']['input']>;
  admin_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with?: InputMaybe<Scalars['String']['input']>;
  admin_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleAdminChanged_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleAdminChanged_OrderBy {
  Admin = 'admin',
  AdminId = 'admin__id',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Role = 'role',
  RoleId = 'role__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type RoleGrantDelayChanged = Event & {
  __typename?: 'RoleGrantDelayChanged';
  delay: Scalars['BigInt']['output'];
  emitter: Account;
  id: Scalars['Bytes']['output'];
  role: Role;
  sender: Account;
  since: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type RoleGrantDelayChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleGrantDelayChanged_Filter>>>;
  delay?: InputMaybe<Scalars['BigInt']['input']>;
  delay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delay_not?: InputMaybe<Scalars['BigInt']['input']>;
  delay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleGrantDelayChanged_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  since?: InputMaybe<Scalars['BigInt']['input']>;
  since_gt?: InputMaybe<Scalars['BigInt']['input']>;
  since_gte?: InputMaybe<Scalars['BigInt']['input']>;
  since_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  since_lt?: InputMaybe<Scalars['BigInt']['input']>;
  since_lte?: InputMaybe<Scalars['BigInt']['input']>;
  since_not?: InputMaybe<Scalars['BigInt']['input']>;
  since_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleGrantDelayChanged_OrderBy {
  Delay = 'delay',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Role = 'role',
  RoleId = 'role__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Since = 'since',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type RoleGranted = Event & {
  __typename?: 'RoleGranted';
  account: Account;
  delay: Scalars['BigInt']['output'];
  emitter: Account;
  id: Scalars['Bytes']['output'];
  newMember: Scalars['Boolean']['output'];
  role: Role;
  sender: Account;
  since: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type RoleGranted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  delay?: InputMaybe<Scalars['BigInt']['input']>;
  delay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delay_not?: InputMaybe<Scalars['BigInt']['input']>;
  delay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newMember?: InputMaybe<Scalars['Boolean']['input']>;
  newMember_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newMember_not?: InputMaybe<Scalars['Boolean']['input']>;
  newMember_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleGranted_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  since?: InputMaybe<Scalars['BigInt']['input']>;
  since_gt?: InputMaybe<Scalars['BigInt']['input']>;
  since_gte?: InputMaybe<Scalars['BigInt']['input']>;
  since_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  since_lt?: InputMaybe<Scalars['BigInt']['input']>;
  since_lte?: InputMaybe<Scalars['BigInt']['input']>;
  since_not?: InputMaybe<Scalars['BigInt']['input']>;
  since_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleGranted_OrderBy {
  Account = 'account',
  AccountId = 'account__id',
  Delay = 'delay',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  NewMember = 'newMember',
  Role = 'role',
  RoleId = 'role__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Since = 'since',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type RoleGuardianChanged = Event & {
  __typename?: 'RoleGuardianChanged';
  emitter: Account;
  guardian: Role;
  id: Scalars['Bytes']['output'];
  role: Role;
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type RoleGuardianChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleGuardianChanged_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian?: InputMaybe<Scalars['String']['input']>;
  guardian_?: InputMaybe<Role_Filter>;
  guardian_contains?: InputMaybe<Scalars['String']['input']>;
  guardian_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_ends_with?: InputMaybe<Scalars['String']['input']>;
  guardian_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_gt?: InputMaybe<Scalars['String']['input']>;
  guardian_gte?: InputMaybe<Scalars['String']['input']>;
  guardian_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guardian_lt?: InputMaybe<Scalars['String']['input']>;
  guardian_lte?: InputMaybe<Scalars['String']['input']>;
  guardian_not?: InputMaybe<Scalars['String']['input']>;
  guardian_not_contains?: InputMaybe<Scalars['String']['input']>;
  guardian_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  guardian_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  guardian_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  guardian_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  guardian_starts_with?: InputMaybe<Scalars['String']['input']>;
  guardian_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleGuardianChanged_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleGuardianChanged_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Guardian = 'guardian',
  GuardianId = 'guardian__id',
  Id = 'id',
  Role = 'role',
  RoleId = 'role__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type RoleLabel = Event & {
  __typename?: 'RoleLabel';
  emitter: Account;
  id: Scalars['Bytes']['output'];
  label: Scalars['String']['output'];
  role: Role;
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type RoleLabel_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RoleLabel_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_gt?: InputMaybe<Scalars['String']['input']>;
  label_gte?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_lt?: InputMaybe<Scalars['String']['input']>;
  label_lte?: InputMaybe<Scalars['String']['input']>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<RoleLabel_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleLabel_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Label = 'label',
  Role = 'role',
  RoleId = 'role__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type RoleRevoked = Event & {
  __typename?: 'RoleRevoked';
  account: Account;
  emitter: Account;
  id: Scalars['Bytes']['output'];
  role: Role;
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type RoleRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoleRevoked_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleRevoked_OrderBy {
  Account = 'account',
  AccountId = 'account__id',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Role = 'role',
  RoleId = 'role__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Role_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Role_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Role_Filter>>>;
  roleAdminChangedAdmin_?: InputMaybe<RoleAdminChanged_Filter>;
  roleAdminChangedRole_?: InputMaybe<RoleAdminChanged_Filter>;
  roleGrantDelayChanged_?: InputMaybe<RoleGrantDelayChanged_Filter>;
  roleGranted_?: InputMaybe<RoleGranted_Filter>;
  roleGuardianChangedGuardian_?: InputMaybe<RoleGuardianChanged_Filter>;
  roleGuardianChangedRole_?: InputMaybe<RoleGuardianChanged_Filter>;
  roleLabel_?: InputMaybe<RoleLabel_Filter>;
  roleOf_?: InputMaybe<AccessManagerRole_Filter>;
  roleRevoked_?: InputMaybe<RoleRevoked_Filter>;
  targetFunctionRoleUpdated_?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};

export enum Role_OrderBy {
  Id = 'id',
  RoleAdminChangedAdmin = 'roleAdminChangedAdmin',
  RoleAdminChangedRole = 'roleAdminChangedRole',
  RoleGrantDelayChanged = 'roleGrantDelayChanged',
  RoleGranted = 'roleGranted',
  RoleGuardianChangedGuardian = 'roleGuardianChangedGuardian',
  RoleGuardianChangedRole = 'roleGuardianChangedRole',
  RoleLabel = 'roleLabel',
  RoleOf = 'roleOf',
  RoleRevoked = 'roleRevoked',
  TargetFunctionRoleUpdated = 'targetFunctionRoleUpdated'
}

export type Selector = {
  __typename?: 'Selector';
  functionOf: Array<Maybe<AccessManagerTargetFunction>>;
  id: Scalars['Bytes']['output'];
  targetFunctionRoleUpdated: Array<TargetFunctionRoleUpdated>;
};


export type SelectorFunctionOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTargetFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccessManagerTargetFunction_Filter>;
};


export type SelectorTargetFunctionRoleUpdatedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetFunctionRoleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};

export type Selector_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Selector_Filter>>>;
  functionOf_?: InputMaybe<AccessManagerTargetFunction_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Selector_Filter>>>;
  targetFunctionRoleUpdated_?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};

export enum Selector_OrderBy {
  FunctionOf = 'functionOf',
  Id = 'id',
  TargetFunctionRoleUpdated = 'targetFunctionRoleUpdated'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  accessManaged?: Maybe<AccessManaged>;
  accessManagedOperation?: Maybe<AccessManagedOperation>;
  accessManagedOperations: Array<AccessManagedOperation>;
  accessManageds: Array<AccessManaged>;
  accessManager?: Maybe<AccessManager>;
  accessManagerRole?: Maybe<AccessManagerRole>;
  accessManagerRoleMember?: Maybe<AccessManagerRoleMember>;
  accessManagerRoleMembers: Array<AccessManagerRoleMember>;
  accessManagerRoles: Array<AccessManagerRole>;
  accessManagerTarget?: Maybe<AccessManagerTarget>;
  accessManagerTargetFunction?: Maybe<AccessManagerTargetFunction>;
  accessManagerTargetFunctions: Array<AccessManagerTargetFunction>;
  accessManagerTargets: Array<AccessManagerTarget>;
  accessManagers: Array<AccessManager>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  authorityUpdated?: Maybe<AuthorityUpdated>;
  authorityUpdateds: Array<AuthorityUpdated>;
  delayedBigInt?: Maybe<DelayedBigInt>;
  delayedBigInts: Array<DelayedBigInt>;
  event?: Maybe<Event>;
  events: Array<Event>;
  operation?: Maybe<Operation>;
  operationCanceled?: Maybe<OperationCanceled>;
  operationCanceleds: Array<OperationCanceled>;
  operationExecuted?: Maybe<OperationExecuted>;
  operationExecuteds: Array<OperationExecuted>;
  operationScheduled?: Maybe<OperationScheduled>;
  operationScheduleds: Array<OperationScheduled>;
  operations: Array<Operation>;
  role?: Maybe<Role>;
  roleAdminChanged?: Maybe<RoleAdminChanged>;
  roleAdminChangeds: Array<RoleAdminChanged>;
  roleGrantDelayChanged?: Maybe<RoleGrantDelayChanged>;
  roleGrantDelayChangeds: Array<RoleGrantDelayChanged>;
  roleGranted?: Maybe<RoleGranted>;
  roleGranteds: Array<RoleGranted>;
  roleGuardianChanged?: Maybe<RoleGuardianChanged>;
  roleGuardianChangeds: Array<RoleGuardianChanged>;
  roleLabel?: Maybe<RoleLabel>;
  roleLabels: Array<RoleLabel>;
  roleRevoked?: Maybe<RoleRevoked>;
  roleRevokeds: Array<RoleRevoked>;
  roles: Array<Role>;
  selector?: Maybe<Selector>;
  selectors: Array<Selector>;
  targetAdminDelayUpdated?: Maybe<TargetAdminDelayUpdated>;
  targetAdminDelayUpdateds: Array<TargetAdminDelayUpdated>;
  targetClosed?: Maybe<TargetClosed>;
  targetCloseds: Array<TargetClosed>;
  targetFunctionRoleUpdated?: Maybe<TargetFunctionRoleUpdated>;
  targetFunctionRoleUpdateds: Array<TargetFunctionRoleUpdated>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccessManagedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagedOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagedOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagedOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagedOperation_Filter>;
};


export type SubscriptionAccessManagedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManaged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManaged_Filter>;
};


export type SubscriptionAccessManagerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagerRoleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagerRoleMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagerRoleMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRoleMember_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerRoleMember_Filter>;
};


export type SubscriptionAccessManagerRolesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerRole_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerRole_Filter>;
};


export type SubscriptionAccessManagerTargetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagerTargetFunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccessManagerTargetFunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTargetFunction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerTargetFunction_Filter>;
};


export type SubscriptionAccessManagerTargetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManagerTarget_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManagerTarget_Filter>;
};


export type SubscriptionAccessManagersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccessManager_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccessManager_Filter>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAuthorityUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAuthorityUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuthorityUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuthorityUpdated_Filter>;
};


export type SubscriptionDelayedBigIntArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelayedBigIntsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelayedBigInt_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelayedBigInt_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperationCanceledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperationCanceledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationCanceled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperationCanceled_Filter>;
};


export type SubscriptionOperationExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperationExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperationExecuted_Filter>;
};


export type SubscriptionOperationScheduledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperationScheduledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperationScheduled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperationScheduled_Filter>;
};


export type SubscriptionOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operation_Filter>;
};


export type SubscriptionRoleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleAdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleAdminChanged_Filter>;
};


export type SubscriptionRoleGrantDelayChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantDelayChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGrantDelayChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGrantDelayChanged_Filter>;
};


export type SubscriptionRoleGrantedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGrantedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGranted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGranted_Filter>;
};


export type SubscriptionRoleGuardianChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleGuardianChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleGuardianChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleGuardianChanged_Filter>;
};


export type SubscriptionRoleLabelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleLabelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleLabel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleLabel_Filter>;
};


export type SubscriptionRoleRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoleRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoleRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoleRevoked_Filter>;
};


export type SubscriptionRolesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Role_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Role_Filter>;
};


export type SubscriptionSelectorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSelectorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Selector_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Selector_Filter>;
};


export type SubscriptionTargetAdminDelayUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTargetAdminDelayUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetAdminDelayUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TargetAdminDelayUpdated_Filter>;
};


export type SubscriptionTargetClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTargetClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TargetClosed_Filter>;
};


export type SubscriptionTargetFunctionRoleUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTargetFunctionRoleUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TargetFunctionRoleUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TargetFunctionRoleUpdated_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type TargetAdminDelayUpdated = Event & {
  __typename?: 'TargetAdminDelayUpdated';
  delay: Scalars['BigInt']['output'];
  emitter: Account;
  id: Scalars['Bytes']['output'];
  sender: Account;
  since: Scalars['BigInt']['output'];
  target: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TargetAdminDelayUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TargetAdminDelayUpdated_Filter>>>;
  delay?: InputMaybe<Scalars['BigInt']['input']>;
  delay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delay_not?: InputMaybe<Scalars['BigInt']['input']>;
  delay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TargetAdminDelayUpdated_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  since?: InputMaybe<Scalars['BigInt']['input']>;
  since_gt?: InputMaybe<Scalars['BigInt']['input']>;
  since_gte?: InputMaybe<Scalars['BigInt']['input']>;
  since_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  since_lt?: InputMaybe<Scalars['BigInt']['input']>;
  since_lte?: InputMaybe<Scalars['BigInt']['input']>;
  since_not?: InputMaybe<Scalars['BigInt']['input']>;
  since_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_?: InputMaybe<Account_Filter>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TargetAdminDelayUpdated_OrderBy {
  Delay = 'delay',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Since = 'since',
  Target = 'target',
  TargetId = 'target__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type TargetClosed = Event & {
  __typename?: 'TargetClosed';
  closed: Scalars['Boolean']['output'];
  emitter: Account;
  id: Scalars['Bytes']['output'];
  sender: Account;
  target: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TargetClosed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TargetClosed_Filter>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TargetClosed_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_?: InputMaybe<Account_Filter>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TargetClosed_OrderBy {
  Closed = 'closed',
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Target = 'target',
  TargetId = 'target__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type TargetFunctionRoleUpdated = Event & {
  __typename?: 'TargetFunctionRoleUpdated';
  emitter: Account;
  id: Scalars['Bytes']['output'];
  role: Role;
  selector: Selector;
  sender: Account;
  target: Account;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type TargetFunctionRoleUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TargetFunctionRoleUpdated_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TargetFunctionRoleUpdated_Filter>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_?: InputMaybe<Role_Filter>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_gt?: InputMaybe<Scalars['String']['input']>;
  role_gte?: InputMaybe<Scalars['String']['input']>;
  role_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_lt?: InputMaybe<Scalars['String']['input']>;
  role_lte?: InputMaybe<Scalars['String']['input']>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  role_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  role_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  role_starts_with?: InputMaybe<Scalars['String']['input']>;
  role_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  selector?: InputMaybe<Scalars['String']['input']>;
  selector_?: InputMaybe<Selector_Filter>;
  selector_contains?: InputMaybe<Scalars['String']['input']>;
  selector_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  selector_ends_with?: InputMaybe<Scalars['String']['input']>;
  selector_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  selector_gt?: InputMaybe<Scalars['String']['input']>;
  selector_gte?: InputMaybe<Scalars['String']['input']>;
  selector_in?: InputMaybe<Array<Scalars['String']['input']>>;
  selector_lt?: InputMaybe<Scalars['String']['input']>;
  selector_lte?: InputMaybe<Scalars['String']['input']>;
  selector_not?: InputMaybe<Scalars['String']['input']>;
  selector_not_contains?: InputMaybe<Scalars['String']['input']>;
  selector_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  selector_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  selector_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  selector_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  selector_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  selector_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  selector_starts_with?: InputMaybe<Scalars['String']['input']>;
  selector_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  target_?: InputMaybe<Account_Filter>;
  target_contains?: InputMaybe<Scalars['String']['input']>;
  target_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_gt?: InputMaybe<Scalars['String']['input']>;
  target_gte?: InputMaybe<Scalars['String']['input']>;
  target_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_lt?: InputMaybe<Scalars['String']['input']>;
  target_lte?: InputMaybe<Scalars['String']['input']>;
  target_not?: InputMaybe<Scalars['String']['input']>;
  target_not_contains?: InputMaybe<Scalars['String']['input']>;
  target_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  target_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  target_starts_with?: InputMaybe<Scalars['String']['input']>;
  target_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TargetFunctionRoleUpdated_OrderBy {
  Emitter = 'emitter',
  EmitterId = 'emitter__id',
  Id = 'id',
  Role = 'role',
  RoleId = 'role__id',
  Selector = 'selector',
  SelectorId = 'selector__id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Target = 'target',
  TargetId = 'target__id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['BigInt']['output'];
  events: Array<Event>;
  id: Scalars['Bytes']['output'];
  sender: Account;
  timestamp: Scalars['BigInt']['output'];
};


export type TransactionEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  events_?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Account_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Events = 'events',
  Id = 'id',
  Sender = 'sender',
  SenderId = 'sender__id',
  Timestamp = 'timestamp'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type DelayedBigIntFragmentFragment = { __typename?: 'DelayedBigInt', id: string, value: any, oldValue: any, since: any } & { ' $fragmentName'?: 'DelayedBigIntFragmentFragment' };

export type AccessManagedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccessManagedQuery = { __typename?: 'Query', accessManaged?: { __typename?: 'AccessManaged', id: any, asAccount: { __typename?: 'Account', id: any, targettedBy: Array<{ __typename?: 'AccessManagerTarget', id: string, manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } } }> }, authority: { __typename?: 'Account', id: any, asAccessManager?: { __typename?: 'AccessManager', id: any } | null } } | null };

export type AccessManagerRoleMemberQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccessManagerRoleMemberQuery = { __typename?: 'Query', accessManagerRoleMember?: { __typename?: 'AccessManagerRoleMember', id: string, since: any, asAccount: { __typename?: 'Account', id: any }, manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } }, role: (
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    ), executionDelay: (
      { __typename?: 'DelayedBigInt' }
      & { ' $fragmentRefs'?: { 'DelayedBigIntFragmentFragment': DelayedBigIntFragmentFragment } }
    ) } | null };

export type AccessManagerRoleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccessManagerRoleQuery = { __typename?: 'Query', accessManagerRole?: (
    { __typename?: 'AccessManagerRole', manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } }, grantDelay: (
      { __typename?: 'DelayedBigInt' }
      & { ' $fragmentRefs'?: { 'DelayedBigIntFragmentFragment': DelayedBigIntFragmentFragment } }
    ), admin: (
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    ), guardian: (
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    ), adminOf: Array<(
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    )>, guardianOf: Array<(
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    )>, members: Array<{ __typename?: 'AccessManagerRoleMember', id: string, asAccount: { __typename?: 'Account', id: any } }>, functions: Array<(
      { __typename?: 'AccessManagerTargetFunction' }
      & { ' $fragmentRefs'?: { 'AccessManagerTargetFunctionFragmentFragment': AccessManagerTargetFunctionFragmentFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
  ) | null };

export type AccessManagerTargetFunctionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccessManagerTargetFunctionQuery = { __typename?: 'Query', accessManagerTargetFunction?: (
    { __typename?: 'AccessManagerTargetFunction', manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } }, target: { __typename?: 'AccessManagerTarget', id: string, asAccount: { __typename?: 'Account', id: any } }, role: (
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    ) }
    & { ' $fragmentRefs'?: { 'AccessManagerTargetFunctionFragmentFragment': AccessManagerTargetFunctionFragmentFragment } }
  ) | null };

export type AccessManagerTargetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccessManagerTargetQuery = { __typename?: 'Query', accessManagerTarget?: { __typename?: 'AccessManagerTarget', id: string, closed: boolean, asAccount: { __typename?: 'Account', id: any, asAccessManaged?: { __typename?: 'AccessManaged', id: any } | null }, manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } }, adminDelay: (
      { __typename?: 'DelayedBigInt' }
      & { ' $fragmentRefs'?: { 'DelayedBigIntFragmentFragment': DelayedBigIntFragmentFragment } }
    ), functions: Array<(
      { __typename?: 'AccessManagerTargetFunction' }
      & { ' $fragmentRefs'?: { 'AccessManagerTargetFunctionFragmentFragment': AccessManagerTargetFunctionFragmentFragment } }
    )> } | null };

export type AccessManagerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccessManagerQuery = { __typename?: 'Query', accessManager?: { __typename?: 'AccessManager', id: any, targets: Array<{ __typename?: 'AccessManagerTarget', id: string, asAccount: { __typename?: 'Account', id: any } }>, roles: Array<(
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    )>, members: Array<{ __typename?: 'AccessManagerRoleMember', id: string, asAccount: { __typename?: 'Account', id: any } }>, operations: Array<{ __typename?: 'AccessManagedOperation', id: string, nonce: any, schedule: any, data: any, status: AccessManagedOperationStatus, asOperation: { __typename?: 'Operation', id: any } }> } | null };

export type AccessManagerTargetFunctionFragmentFragment = { __typename?: 'AccessManagerTargetFunction', id: string, asSelector: { __typename?: 'Selector', id: any } } & { ' $fragmentName'?: 'AccessManagerTargetFunctionFragmentFragment' };

export type AccountQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AccountQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: any, asAccessManager?: { __typename?: 'AccessManager', id: any } | null, asAccessManaged?: { __typename?: 'AccessManaged', id: any } | null, membership: Array<{ __typename?: 'AccessManagerRoleMember', id: string, manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } }, role: (
        { __typename?: 'AccessManagerRole' }
        & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
      ) }>, targettedBy: Array<{ __typename?: 'AccessManagerTarget', id: string, manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } } }> } | null };

export type AccessManagerRoleFragmentFragment = { __typename?: 'AccessManagerRole', id: string, label?: string | null, asRole: { __typename?: 'Role', id: string } } & { ' $fragmentName'?: 'AccessManagerRoleFragmentFragment' };

export type AccessManagerRoleMembersQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type AccessManagerRoleMembersQuery = { __typename?: 'Query', accessManagerRoleMembers: Array<{ __typename?: 'AccessManagerRoleMember', id: string, asAccount: { __typename?: 'Account', id: any }, manager: { __typename?: 'AccessManager', id: any, asAccount: { __typename?: 'Account', id: any } }, role: (
      { __typename?: 'AccessManagerRole' }
      & { ' $fragmentRefs'?: { 'AccessManagerRoleFragmentFragment': AccessManagerRoleFragmentFragment } }
    ) }> };

export const DelayedBigIntFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DelayedBigIntFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DelayedBigInt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"oldValue"}},{"kind":"Field","name":{"kind":"Name","value":"since"}}]}}]} as unknown as DocumentNode<DelayedBigIntFragmentFragment, unknown>;
export const AccessManagerTargetFunctionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerTargetFunction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asSelector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerTargetFunctionFragmentFragment, unknown>;
export const AccessManagerRoleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerRoleFragmentFragment, unknown>;
export const AccessManagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"targettedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccessManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AccessManagedQuery, AccessManagedQueryVariables>;
export const AccessManagerRoleMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManagerRoleMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManagerRoleMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"since"}},{"kind":"Field","name":{"kind":"Name","value":"executionDelay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DelayedBigIntFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DelayedBigIntFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DelayedBigInt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"oldValue"}},{"kind":"Field","name":{"kind":"Name","value":"since"}}]}}]} as unknown as DocumentNode<AccessManagerRoleMemberQuery, AccessManagerRoleMemberQueryVariables>;
export const AccessManagerRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManagerRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManagerRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"grantDelay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DelayedBigIntFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"guardian"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"guardianOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"functions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DelayedBigIntFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DelayedBigInt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"oldValue"}},{"kind":"Field","name":{"kind":"Name","value":"since"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerTargetFunction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asSelector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerRoleQuery, AccessManagerRoleQueryVariables>;
export const AccessManagerTargetFunctionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManagerTargetFunction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManagerTargetFunction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerTargetFunction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asSelector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerTargetFunctionQuery, AccessManagerTargetFunctionQueryVariables>;
export const AccessManagerTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManagerTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManagerTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccessManaged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"adminDelay"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DelayedBigIntFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"closed"}},{"kind":"Field","name":{"kind":"Name","value":"functions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DelayedBigIntFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DelayedBigInt"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"oldValue"}},{"kind":"Field","name":{"kind":"Name","value":"since"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerTargetFunctionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerTargetFunction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asSelector"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerTargetQuery, AccessManagerTargetQueryVariables>;
export const AccessManagerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManager"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManager"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"targets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"operations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"asOperation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerQuery, AccessManagerQueryVariables>;
export const AccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Account"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccessManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"asAccessManaged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"membership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"targettedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccountQuery, AccountQueryVariables>;
export const AccessManagerRoleMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessManagerRoleMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessManagerRoleMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"asAccount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"asAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessManagerRoleFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessManagerRoleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessManagerRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"asRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AccessManagerRoleMembersQuery, AccessManagerRoleMembersQueryVariables>;
