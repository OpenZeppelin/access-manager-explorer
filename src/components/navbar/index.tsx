import Link from "next/link";

import { links } from "@/config/site";
import Logo from "./logo";
import { Box, Card, Flex, IconButton, Separator, Text } from "@radix-ui/themes";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import ConnectButton from "../connect-button";
import Search from "./search";
import ThemeIcon from "./theme-icon";
import Menu from "./menu";

const Navbar = () => {
  return (
    <Box className="sticky top-0 z-40 w-full">
      <Card asChild size="2" className="no-radius">
        <header>
          <Flex
            align="center"
            justify={{
              sm: "between",
            }}
            px="4"
            mx="0"
          >
            <Link href="/" className="flex items-center">
              <Logo className="h-auto w-6" />
              <Text ml="1" as="span" weight="bold" className="sm:inline-block whitespace-nowrap">
                OpenZeppelin{" "}
                <Text as="span" weight="light">
                  | AccessManager
                </Text>
              </Text>
            </Link>
            <Flex>
              <Search
                ml="4"
                size="2"
                variant="soft"
                color="gray"
                radius="full"
                input={{
                  placeholder: "Search address...",
                  style: {
                    width: 400,
                  },
                }}
              />
            </Flex>
            <Flex ml="auto" align="center" justify="end">
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
                          ml: "2",
                        },
                      },
                    }}
                  />
                  <Menu />
                  <Separator orientation="vertical" mr="1" size="1" />
                  <IconButton
                    mx="2"
                    size="3"
                    variant="ghost"
                    color="gray"
                    asChild
                  >
                    <Link href={links.github} target="_blank" rel="noreferrer">
                      <GitHubLogoIcon />
                      <span className="sr-only">Github</span>
                    </Link>
                  </IconButton>
                  <IconButton
                    mx="2"
                    size="3"
                    variant="ghost"
                    color="gray"
                    asChild
                  >
                    <Link href={links.twitter} target="_blank" rel="noreferrer">
                      <TwitterLogoIcon />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </IconButton>
                  <ThemeIcon mx="2" size="3" variant="ghost" color="gray" />
                </nav>
              </Flex>
            </Flex>
          </Flex>
        </header>
      </Card>
    </Box>
  );
};

export default Navbar;
