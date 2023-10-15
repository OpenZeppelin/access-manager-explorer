import AccessManaged from "@/components/entities/access-managed";
import AccessManager from "@/components/entities/access-manager";
import AccessManagerMember from "@/components/entities/access-manager-member";
import AccessManagerTarget from "@/components/entities/access-manager-target";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { toGraphId } from "@/config/routes";
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
          {entities?.map((prefixedId, depth) => {
            const { type, id } = toGraphId(prefixedId);
            switch (type) {
              case "mgr":
                return (
                  <AccessManager
                    key={prefixedId}
                    address={id as Address}
                    depth={depth}
                    size="4"
                    variant="classic"
                    className="no-radius"
                    truncate={{
                      leading: 4,
                      trailing: 6,
                    }}
                    style={{
                      maxWidth: 530,
                      minWidth: 530,
                      border: 0,
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  />
                );
              case "mbr":
                return (
                  <AccessManagerMember
                    key={prefixedId}
                    id={id}
                    depth={depth}
                    size="4"
                    variant="classic"
                    className="no-radius"
                    truncate={{
                      leading: 2,
                      trailing: 4,
                    }}
                    style={{
                      maxWidth: 430,
                      minWidth: 430,
                      border: 0,
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  />
                );
              case "mgd":
                return (
                  <AccessManaged
                    key={prefixedId}
                    address={id as Address}
                    depth={depth}
                    size="4"
                    variant="classic"
                    className="no-radius"
                    truncate={{
                      leading: 2,
                      trailing: 4,
                    }}
                    style={{
                      maxWidth: 430,
                      minWidth: 430,
                      border: 0,
                      maxHeight: "calc(100vh - 64px)",
                    }}
                  />
                );
              case "tgt":
                return (
                  <AccessManagerTarget
                    key={prefixedId}
                    id={id}
                    depth={depth}
                    size="4"
                    variant="classic"
                    className="no-radius"
                    truncate={{
                      leading: 2,
                      trailing: 4,
                    }}
                    style={{
                      maxWidth: 430,
                      minWidth: 430,
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
