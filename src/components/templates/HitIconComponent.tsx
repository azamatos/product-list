import { CSSProperties, FC } from "react";
import { RectangleIcon } from "components/ui-components/RectangleIcon";

interface HitIconProps {
  title: string;
  backgroundColor: string;
  titleStyle: string;
  strokeColor: string;
}

export const HitIconComponent: FC<HitIconProps> = ({
  title,
  backgroundColor,
  titleStyle,
  strokeColor
}) => (
  <div>
    <RectangleIcon fill={backgroundColor} stroke={strokeColor} />
    <span className={titleStyle}>{title}</span>
  </div>
);
