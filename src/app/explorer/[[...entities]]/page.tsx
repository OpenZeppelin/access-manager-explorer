import AccessManager from "@/components/entities/access-manager";
import AccessManagerMember from "@/components/entities/access-manager-member";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { EntityPrefix } from "@/types";
import { Flex, ScrollArea } from "@radix-ui/themes";
import { FC } from "react";
import { Address } from "viem";

interface Props {
  params: {
    entities: `${EntityPrefix}-${Address}`[];
  };
}

const Explorer: FC<Props> = ({ params: { entities } }) => {
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
          {entities?.map((id, depth) => {
            const [type, address] = id.split("-");

            switch (type) {
              case "mgr":
                return (
                  <AccessManager
                    key={id}
                    address={address as Address}
                    depth={depth}
                    size="4"
                    variant="classic"
                    className="no-radius"
                    style={{
                      maxWidth: 750,
                      minWidth: 750,
                      border: 0,
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  />
                );
              case "mbr":
                return (
                  <AccessManagerMember
                    key={id}
                    address={address as Address}
                    depth={depth}
                    size="4"
                    variant="classic"
                    className="no-radius"
                    style={{
                      maxWidth: 750,
                      minWidth: 750,
                      border: 0,
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  />
                );
            }
          })}
        </Flex>
      </ScrollArea>
    </>
  );
};

export default Explorer;
