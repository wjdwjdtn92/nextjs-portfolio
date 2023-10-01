import { forwardRef } from "react";
import type {
  ButtonHTMLAttributes,
  ForwardedRef,
  PropsWithChildren,
} from "react";
import { button } from "./Button.css";
import type { ButtonVariants } from "./Button.type";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    className?: string;
  };

function Button(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  const { children, className, color, size, rounded, ...other } = props;
  return (
    <button
      ref={ref}
      className={[button({ color, size, rounded })].toString()}
      {...other}
    >
      {children}
    </button>
  );
}

export default forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  Button
);
