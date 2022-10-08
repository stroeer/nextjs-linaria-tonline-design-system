import { createElement } from "react";
import { cx } from "@linaria/core";

import type { FC, PropsWithChildren } from "react";

export function styled<Tag extends keyof JSX.IntrinsicElements>(
  tag: Tag,
  ...classNames: string[]
): FC<PropsWithChildren<JSX.IntrinsicElements[Tag]>> {
  return ({ children }) => createElement(tag, { className: cx(...classNames) }, children);
}
