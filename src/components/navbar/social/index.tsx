import { links } from "@/config/site";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { ComponentProps, FC } from "react";
import ThemeIcon from "../theme-icon";

const Social: FC<ComponentProps<typeof Flex>> = (props) => {
  return (
    <Flex align="center" {...props}>
      <IconButton mx="2" size="3" variant="ghost" color="gray" asChild>
        <Link href={links.github} target="_blank" rel="noreferrer">
          <GitHubLogoIcon />
          <span className="sr-only">Github</span>
        </Link>
      </IconButton>
      <IconButton mx="2" size="3" variant="ghost" color="gray" asChild>
        <Link href={links.twitter} target="_blank" rel="noreferrer">
          <TwitterLogoIcon />
          <span className="sr-only">Twitter</span>
        </Link>
      </IconButton>
      <ThemeIcon mx="2" size="3" variant="ghost" color="gray" />
    </Flex>
  );
};

export default Social;
