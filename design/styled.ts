import { createElement } from "react";
import { cx } from "@linaria/core";

import type { FC, PropsWithChildren } from "react";

type Tag = keyof JSX.IntrinsicElements;
type StyledComponent<T extends Tag> = FC<PropsWithChildren<JSX.IntrinsicElements[T]>>;

export function styled<T extends Tag>(tag: Tag, ...classNames: string[]): StyledComponent<T> {
  const component: StyledComponent<T> = ({ children, ...props }) =>
    createElement(tag, { className: cx(...classNames), ...props }, children);
  component.displayName = tag;
  return component;
}
