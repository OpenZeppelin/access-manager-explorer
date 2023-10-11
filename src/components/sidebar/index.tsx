"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import AddressItem from "./address-item";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-auto w-64 border-r p-4">
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <div className="flex items-center cursor-pointer">
            <span className="text-sm font-semibold mr-3">My Wallets</span>
            {!open ? <ChevronRight size={15} /> : <ChevronDown size={15} />}
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <AddressItem />
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};

export default Sidebar;
