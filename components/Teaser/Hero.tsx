import { css } from "@linaria/atomic";
import { styled } from "design/styled";

import type { FC, PropsWithChildren } from "react";

const aspectRatio = {
  container: css`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: ${(9 / 16) * 100};
    overflow: hidden;
  `,
  child: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
};

const Figure = styled("figure", aspectRatio.container);
const Img = styled("img", aspectRatio.child);

export const HeroTeaser: FC = () => {};
