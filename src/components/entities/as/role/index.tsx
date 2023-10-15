"use client";
import { ComponentProps, FC } from "react";
import Entity from "../entity";
import RoleHeader from "@/components/role";

interface Props extends Omit<ComponentProps<typeof Entity>, "header" | "role"> {
  role: ComponentProps<typeof RoleHeader>["role"];
}

const Role: FC<Props> = ({ role, children, ...props }) => {
  return (
    <Entity
      header={
        <RoleHeader
          size="2"
          mr="auto"
          role={role}
          icons={{
            unlabelled: true,
          }}
        />
      }
      {...props}
    >
      {children}
    </Entity>
  );
};

export default Role;
