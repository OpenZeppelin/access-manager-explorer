import { chains } from "@/config/chains";

export enum AddressEntity {
  AccessManager = "Access Manager",
  AccessManaged = "Access Managed",
  AccessManagerTarget = "Target",
  AccessManagerRoleMember = "Role member",
}

export enum Entity {
  AccessManagerTargetFunction = "Function",
  AccessManagerRole = "Role",
  AccessManagerOperation = "Operation",
}

export enum EntityPrefix {
  AccessManager = "mgr",
  AccessManaged = "mgd",
  AccessManagerTarget = "tgt",
  AccessManagerTargetFunction = "fn",
  AccessManagerRole = "role",
  AccessManagerRoleMember = "mbr",
}

export type SupportedChain = (typeof chains)[number];
export type SupportedChainDefinition = SupportedChain["definition"];
export type SupportedChainId = SupportedChainDefinition["id"];
