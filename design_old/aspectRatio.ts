import { css } from "@linaria/atomic";

export const aspectRatio = {
  container: css`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: ${(9 / 16) * 100};
    overflow: hidden;
  `,
  media: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
};
