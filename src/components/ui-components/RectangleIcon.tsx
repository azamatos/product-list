import { FC, SVGProps } from "react";

export const RectangleIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    width="64"
    height="24"
    viewBox="0 0 64 24"
    fill="none"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64 0H14L0 24H64V0Z"
      fill={props.fill}
    />
    <path d="M64 0L50 24H64V0Z" fill={props.stroke} />
    <path d="M50 24L64 0H50V24Z" fill={props.fill} />
  </svg>
);
