const title = "OpenZeppelin - Access Manager Explorer";

const description =
  "OpenZeppelin's Access Manager UI to explore and interact with permissions around an AccessManager smart contract.";

const links = {
  twitter: "https://twitter.com/openzeppelin",
  github: "https://github.com/OpenZeppelin/access-manager-explorer",
  docs: "https://docs.openzeppelin.com/contracts/5.x/",
};

const gtag = (...args: Parameters<typeof window.gtag>) => {
  if (window.gtag) return window.gtag(args[0], args);
  return Function;
};

export { title, description, links, gtag };
