import { createElement } from "react";
import { cx } from "@linaria/core";

export function styled(tag: string, ...classNames: string[]) {
  return ({ children }) => createElement(tag, { className: cx(...classNames) }, children);
}
