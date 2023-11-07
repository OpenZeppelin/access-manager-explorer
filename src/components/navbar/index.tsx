import Link from "next/link";
import Logo from "./logo";
import { Box, Card, Flex, Separator, Text } from "@radix-ui/themes";
import Search from "./search";
import { FC } from "react";
import ResponsiveMenu from "./responsive-menu";
import ConnectButton from "../connect-button";
import DeployManager from "../deploy/manager";
import Social from "./social";

const Navbar: FC<{}> = () => {
  return (
    <Box className="sticky top-0 z-40 w-full">
      <Card asChild size="2" className="no-radius">
        <header>
          <Flex
            px={{
              initial: "2",
              sm: "4",
            }}
            mx="0"
            align="center"
          >
            <Link href="/" className="flex items-center">
              <Logo className="h-auto w-6" />
              <Text
                ml="1"
                as="span"
                weight="bold"
                className="whitespace-nowrap"
              >
                OpenZeppelin{" "}
                <Text
                  as="span"
                  className="md:hidden xl:inline-block"
                  weight="light"
                >
                  | AccessManager
                </Text>
              </Text>
            </Link>
            <Box className="hidden md:flex flex-grow">
              <Search
                mx={{
                  sm: "4",
                }}
                mr="4"
                size="2"
                variant="soft"
                color="gray"
                radius="full"
                className="md:flex flex-grow"
                style={{
                  maxWidth: 500,
                }}
                input={{
                  placeholder: "Search address...",
                  className: "flex-grow",
                }}
              />
            </Box>
            <ResponsiveMenu ml="auto" />
            <Box ml="auto" className="align-center justify-end hidden lg:flex">
              <Flex asChild align="center" mx="2">
                <nav>
                  <ConnectButton
                    mr="2"
                    states={{
                      connect: {
                        variant: "solid",
                        color: "blue",
                      },
                      wrongNetwork: {
                        variant: "soft",
                        color: "red",
                      },
                      connected: {
                        account: {
                          variant: "outline",
                          color: "gray",
                        },
                        chain: {
                          variant: "soft",
                          color: "gray",
                          mr: "2",
                        },
                      },
                    }}
                  />
                  <DeployManager variant="soft" mr="2">
                    Deploy
                  </DeployManager>
                  <Separator orientation="vertical" mr="1" size="1" />
                  <Social />
                </nav>
              </Flex>
            </Box>
          </Flex>
        </header>
      </Card>
    </Box>
  );
};

export default Navbar;
