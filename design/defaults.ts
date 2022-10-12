import { css } from "@linaria/core";
import t from "./tokens";

export const reset = css`
  :global() {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
    }

    html,
    body {
      height: 100%;
    }

    body {
      line-height: 1;
      font-family: ${t.font.sans};
      background-color: ${t.color.snow};
      -webkit-font-smoothing: antialiased;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }
  }
`;
