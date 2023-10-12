"use client";
import { Box } from "@radix-ui/themes";
import { ComponentProps, FC, useEffect, useRef, useState } from "react";
import { Address, keccak256 } from "viem";

const hslTriad = require("hsl-triad");
const hslRgb = require("hsl-rgb");

interface Props extends ComponentProps<typeof Box> {
  address: Address;
  svgClassName: string;
}

const Gradient: FC<Props> = ({ address, svgClassName, ...props }) => {
  const hash = keccak256(address);
  const colors = hslTriad(Number(BigInt(hash) % BigInt(360)), 1, 0.5);
  const color1 = hslRgb(colors[0][0], colors[0][1], colors[0][2]);
  const color2 = hslRgb(colors[1][0], colors[1][1], colors[1][2]);
  const color1str = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`;
  const color2str = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`;

  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, [ref.current]);

  return (
    <Box {...props}>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
        ref={ref}
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            id={hash.toString()}
          >
            <stop stopColor={color1str} offset="0%"></stop>
            <stop stopColor={color2str} offset="100%"></stop>
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect
            id="Rectangle"
            fill={`url(#${hash})`}
            x="0"
            y="0"
            width={width}
            height={height}
          ></rect>
        </g>
      </svg>
    </Box>
  );
};

export default Gradient;
