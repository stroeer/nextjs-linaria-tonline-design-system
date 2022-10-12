import { createStyleObject } from "@capsizecss/core";
import fontMetrics from "@capsizecss/metrics/roboto";
import t from "./tokens";

function capSize<T extends Record<"fontSize" | "lineHeight", any>>(
  styles: T
): T & ReturnType<typeof createStyleObject> {
  const { fontSize, lineHeight } = styles;
  return Object.assign(
    {},
    styles,
    createStyleObject({
      capHeight: fontSize,
      lineGap: Math.round(fontSize * lineHeight - fontSize),
      fontMetrics,
    })
  );
}

export const headline = {
  xlarge: capSize({
    fontSize: t.fontSize.fs72,
    lineHeight: t.lineHeight.lh1,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
  large: capSize({
    fontSize: t.fontSize.fs40,
    lineHeight: t.lineHeight.lh12,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
  medium: capSize({
    fontSize: t.fontSize.fs28,
    lineHeight: t.lineHeight.lh12,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
  regular: capSize({
    fontSize: t.fontSize.fs22,
    lineHeight: t.lineHeight.lh12,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
  small: capSize({
    fontSize: t.fontSize.fs18,
    lineHeight: t.lineHeight.lh12,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
  xsmall: capSize({
    fontSize: t.fontSize.fs14,
    lineHeight: t.lineHeight.lh12,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
  xxsmall: capSize({
    fontSize: t.fontSize.fs12,
    lineHeight: t.lineHeight.lh12,
    fontWeight: t.fontWeight.bold,
    color: t.color.salemsfur,
  }),
};

export const text = {
  large: capSize({
    fontSize: t.fontSize.fs18,
    lineHeight: t.lineHeight.lh17,
    color: t.color.trout,
  }),
  regular: capSize({
    fontSize: t.fontSize.fs14,
    lineHeight: t.lineHeight.lh15,
    color: t.color.trout,
  }),
  small: capSize({
    fontSize: t.fontSize.fs12,
    lineHeight: t.lineHeight.lh15,
    color: t.color.trout,
  }),
};

export const kicker = capSize({
  fontSize: t.fontSize.fs14,
  lineHeight: t.lineHeight.lh16,
  color: t.color.trout,
});
