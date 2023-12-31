import { FC, SVGAttributes } from "react";

const Logo: FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.8648 33.6243H11.2221L14.2601 28.4565C15.5715 26.2273 17.9289 24.8762 20.4854 24.8762H29.8648V33.6243V33.6243Z"
        fill="#63D2F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H29.8648L24.7186 8.74804H0V0Z"
        fill="#4E5EE4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8198 13.6794C13.2474 11.2475 15.8372 9.76135 18.6261 9.76135H24.1708L10.0601 33.6243H0.0332031L11.8198 13.6794Z"
        fill="#63B0F9"
      />
    </svg>
  );
};

export default Logo;
