import { ReactNode, MouseEventHandler } from "react";

interface ButtonType {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export function Button({ onClick, children }: ButtonType): JSX.Element {
  return <button onClick={onClick}>Play {children}</button>;
}
