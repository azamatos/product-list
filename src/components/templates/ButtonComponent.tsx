import { ButtonHTMLAttributes, FC } from "react";

export const ButtonComponent: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...restProps
}) => <button {...restProps}>{children}</button>;
