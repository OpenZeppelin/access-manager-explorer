import { useRouteNetwork } from "@/providers/route-network";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Link } from "@radix-ui/themes";
import { useChainModal } from "@rainbow-me/rainbowkit";
import { switchNetwork } from "wagmi/actions";

const Empty = () => {
  const { openChainModal } = useChainModal();

  const { routeChainId, clientChainId } = useRouteNetwork();

  const onChangeNetwork = () => {
    if (routeChainId !== clientChainId) {
      switchNetwork({ chainId: routeChainId });
    } else {
      openChainModal?.();
    }
  };

  return (
    <Callout.Root color="amber">
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        Access Manager Role doesn&rsquo;t exist on this network.
        <Link ml="1" onClick={onChangeNetwork}>
          Change network
        </Link>
      </Callout.Text>
    </Callout.Root>
  );
};

export default Empty;
