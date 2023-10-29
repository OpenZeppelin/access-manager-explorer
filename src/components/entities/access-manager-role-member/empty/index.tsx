import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Link } from "@radix-ui/themes";
import { useChainModal } from "@rainbow-me/rainbowkit";

const Empty = () => {
  const { openChainModal } = useChainModal();

  return (
    <Callout.Root color="amber">
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        Access Manager Role Member doesn&rsquo;t exist on this network.
        <Link ml="1" onClick={openChainModal}>
          Change network
        </Link>
      </Callout.Text>
    </Callout.Root>
  );
};

export default Empty;
