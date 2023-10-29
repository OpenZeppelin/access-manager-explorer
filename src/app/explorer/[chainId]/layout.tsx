import { FC, ReactNode } from "react";
import { RainbowKit, Urql } from "@/components/providers";
import { FavoritesProvider } from "@/providers/favorites";
import { NextIntlClientProvider } from "next-intl";
import { RouteNetworkProvider } from "@/providers/route-network";
import { SupportedChainId } from "@/types";
import { Flex, ScrollArea } from "@radix-ui/themes";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { EntitiesProvider } from "@/providers/entities";

type Props = {
  children: ReactNode;
  params: {
    chainId: SupportedChainId;
  };
};

const ExplorerLayout: FC<Props> = ({ children, params: { chainId } }) => {
  return (
    <RouteNetworkProvider routeChainId={chainId}>
      <Urql>
        <RainbowKit>
          <NextIntlClientProvider locale="en" messages={{}}>
            <FavoritesProvider>
              <EntitiesProvider>
                <Navbar />
                <ScrollArea size="2" scrollbars="horizontal">
                  <Flex className="min-w-130vw">
                    <Sidebar
                      style={{
                        minHeight: "calc(100vh - 64px)",
                        maxHeight: "calc(100vh - 64px)",
                      }}
                    />
                    {children}
                  </Flex>
                </ScrollArea>
              </EntitiesProvider>
            </FavoritesProvider>
          </NextIntlClientProvider>
        </RainbowKit>
      </Urql>
    </RouteNetworkProvider>
  );
};

export default ExplorerLayout;
