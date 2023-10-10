import Link from "next/link";

import Button, { buttonVariants } from "@/components/button";

import { site } from "@/config";
import { Github, Twitter } from "lucide-react";
import Logo from "../logo";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-auto w-6" />
          <span className="hidden font-silka font-semibold sm:inline-block">
            OpenZeppelin <span className="font-light">| AccessManager</span>
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href={site.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Github />
              </div>
            </Link>
            <Link href={site.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
