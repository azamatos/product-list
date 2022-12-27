import { FC } from "react";
import Image, { ImageProps } from "next/image";

export const ImageComponent: FC<ImageProps> = ({ alt, ...restProps }) => (
  <Image {...restProps} alt={alt} />
);
