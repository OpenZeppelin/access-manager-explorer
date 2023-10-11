import { cn } from "@/utils";
import * as Avatar from "@radix-ui/react-avatar";
import { HTMLAttributes } from "react";

const stringHash = require("string-hash");
const hslTriad = require("hsl-triad");
const hslRgb = require("hsl-rgb");

interface Props extends HTMLAttributes<HTMLDivElement> {
  address: string;
  size: number;
}

const AddressAvatar = ({ address, size, className, ...props }: Props) => {
  const hash = stringHash(address);
  const colors = hslTriad(hash % 360, 1, 0.5);
  const color1 = hslRgb(colors[0][0], colors[0][1], colors[0][2]);
  const color2 = hslRgb(colors[1][0], colors[1][1], colors[1][2]);
  const color1str = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`;
  const color2str = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`;

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <Avatar.Root className="inline-flex items-center jusity-center align-middle overflow-hidden select-none rounded-full">
        <Avatar.Fallback>
          <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                id={hash.toString()}
              >
                <stop stop-color={color1str} offset="0%"></stop>
                <stop stop-color={color2str} offset="100%"></stop>
              </linearGradient>
            </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect
                id="Rectangle"
                fill={`url(#${hash})`}
                x="0"
                y="0"
                width={size}
                height={size}
              ></rect>
            </g>
          </svg>
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default AddressAvatar;
