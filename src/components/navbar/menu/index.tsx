"use client";

import DeployManager from "@/components/deploy/manager";
import { HamburgerMenuIcon, PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { ComponentProps, FC, useState } from "react";

interface Props extends ComponentProps<typeof IconButton> {}

const Menu: FC<Props> = (props) => {
  const [deployManager, toggleDeployManager] = useState(false);

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton mr="3" variant="soft" {...props}>
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item
            onClick={() => toggleDeployManager((prev) => !prev)}
          >
            Deploy
            <PlusIcon />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <DeployManager open={deployManager} onOpenChange={toggleDeployManager} />
    </>
  );
};

export default Menu;
