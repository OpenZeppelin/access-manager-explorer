import AccessManager from "@/components/details/access-manager";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Flex, ScrollArea } from "@radix-ui/themes";
import { FC } from "react";
import { Address } from "viem";

interface Props {
  params: {
    detail: Address[];
  };
}

const Explorer: FC<Props> = ({ params: { detail } }) => {
  return (
    <>
      <Navbar />
      <ScrollArea size="2" scrollbars="horizontal">
        <Flex>
          <Sidebar
            style={{
              minHeight: "calc(100vh - 64px)",
              maxHeight: "calc(100vh - 64px)",
            }}
          />
          {detail?.map((account, depth) => (
            <AccessManager
              key={account}
              address={account}
              size="4"
              depth={depth}
              variant="classic"
              className="no-radius"
              style={{
                maxWidth: 750,
                minWidth: 750,
                border: 0,
                maxHeight: "calc(100vh - 64px)",
              }}
            />
          ))}
        </Flex>
      </ScrollArea>
    </>
  );
};

export default Explorer;
