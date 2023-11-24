import { gtag } from "@/config/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type Events = 'deploy' | 'search' | 'demo';
export type Network = string;

export interface EventOptions {
  'deploy': {
    deployer: string;
    hash: string;
  }
  'search': {
    account: string;
    manager: string;
    hasRole: string;
  };
  'demo': {};
}

export async function postEvent(opts: Required<EventOptions[keyof EventOptions]>, event: Events, network: Network) {
  gtag('event', event, { ...opts, network: network });
}