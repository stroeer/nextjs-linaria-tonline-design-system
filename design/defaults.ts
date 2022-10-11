import { css } from "@linaria/atomic";
import t from "./tokens";

export const defaults = css`
  :global() {
    body {
      font-family: ${t.fontSans};
      background-color: ${t.colorSnow};
    }
  }
`;
