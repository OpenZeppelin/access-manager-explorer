import AccessManager from "@/components/access-manager";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Flex, ScrollArea } from "@radix-ui/themes";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <ScrollArea scrollbars="horizontal">
          <Flex>
            <Sidebar />
            <AccessManager
              address={"0x4ee69a1703b717cb46cd12c71c6fe225f646ba1e"}
              size="3"
              variant="classic"
              className="no-radius"
              style={{
                minWidth: 600,
                border: 0,
              }}
            />
          </Flex>
        </ScrollArea>
      </main>
    </>
  );
};

export default Home;
