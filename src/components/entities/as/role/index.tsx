"use client";
import { ComponentProps, FC } from "react";
import Entity from "../entity";
import RoleHeader from "@/components/role";

interface Props extends Omit<ComponentProps<typeof Entity>, "header"> {
  accessManagerRole: ComponentProps<typeof RoleHeader>["accessManagerRole"];
}

const Role: FC<Props> = ({ accessManagerRole, children, ...props }) => {
  return (
    <Entity
      header={
        <RoleHeader
          size="2"
          mr="auto"
          accessManagerRole={accessManagerRole}
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
