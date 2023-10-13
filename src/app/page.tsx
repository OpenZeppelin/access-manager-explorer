import AccessManager from "@/components/access-manager";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Flex, ScrollArea } from "@radix-ui/themes";

const Home = () => {
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
          <AccessManager
            address={"0x4ee69a1703b717cb46cd12c71c6fe225f646ba1e"}
            size="3"
            variant="classic"
            className="no-radius"
            style={{
              maxWidth: 600,
              minWidth: 600,
              border: 0,
              maxHeight: "calc(100vh - 64px)",
            }}
          />
        </Flex>
      </ScrollArea>
    </>
  );
};

export default Home;
