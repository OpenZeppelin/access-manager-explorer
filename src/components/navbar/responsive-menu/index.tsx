"use client";
import Sheet from "@/components/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  IconButton,
  Separator,
  Text,
  VisuallyHidden,
} from "@radix-ui/themes";
import { ComponentProps, FC, useRef } from "react";
import SidebarContent from "@/components/sidebar/content";
import Logo from "../logo";
import ConnectButton from "@/components/connect-button";
import DeployManager from "@/components/deploy/manager";
import Social from "../social";
import useAccount from "@/hooks/use-account";
import Search from "../search";

const { Root, Trigger, Content, Header, Close } = Sheet;

interface Props extends ComponentProps<typeof Box> {}

const ResponsiveMenu: FC<Props> = ({ ...props }) => {
  const { address } = useAccount();
  const closeRef = useRef<HTMLButtonElement>(null);

  return (
    <Box className="flex lg:hidden" {...props}>
      <Root>
        <Trigger asChild>
          <IconButton size="2" variant="outline">
            <HamburgerMenuIcon />
          </IconButton>
        </Trigger>
        <Content className="w-5/6" side="left">
          <Header className="flex flex-row items-center">
            <Logo className="h-auto w-6" />
            <Text
              ml="1"
              mt="0"
              as="span"
              weight="bold"
              className="whitespace-nowrap"
            >
              OpenZeppelin
            </Text>
            <Social ml="auto" mr="5" />
          </Header>
          <Search
            mt="5"
            size="2"
            variant="soft"
            color="gray"
            radius="full"
            className="hidden md:flex flex-grow"
            style={{
              maxWidth: 500,
            }}
            onNavigate={() => closeRef.current?.click()}
            input={{
              placeholder: "Search address...",
              className: "flex-grow",
            }}
          />
          <Separator hidden={!address} my="3" size="4" />
          <ConnectButton
            hidden={!address}
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
          <Box hidden={!address}>
            <Separator my="3" size="4" />
            <DeployManager size="1" variant="soft" className="w-full">
              Deploy an AccessManager
            </DeployManager>
          </Box>
          <Separator my="3" size="4" />
          <Box mt="4">
            <SidebarContent onNavigate={() => closeRef.current?.click()} />
            <VisuallyHidden>
              <Close asChild>
                <Button ref={closeRef}></Button>
              </Close>
            </VisuallyHidden>
          </Box>
        </Content>
      </Root>
    </Box>
  );
};

export default ResponsiveMenu;
