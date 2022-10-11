import { css } from "@linaria/core";

export const fontFace = css`
  :global() {
    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      src: url("/fonts/Roboto-Regular.woff2") format("woff2");
      font-display: fallback;
    }

    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      src: url("/fonts/Roboto-Bold.woff2") format("woff2");
      font-display: fallback;
    }

    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 300;
      src: url("/fonts/Roboto-Light.woff2") format("woff2");
      font-display: fallback;
    }
  }
`;

export const color = css`
  :global() {
    :root {
      --color-magenta: #e20074;
      --color-salemsfur: #171b26;
      --color-royalblue: #00a0de;
      --color-trout: #474c59;
      --color-manatee: #8d93a6;
      --color-snow: #ffffff;
      --color-botticelli: #cfd5e5;
      --color-whitelilac: #ebeff7;
      --color-alpine: #f7f9fc;
      --color-red: #ee3f54;
      --color-netflixRed: #e50914;
      --color-green: #48c974;
      --color-cararra: #e7e6e0;
      --color-iceWater: #f2f6ff;
      --color-pro: #edfaf2;
      --color-con: #feecee;
      --color-black: #0a0c14;
      --color-cadetBlue: #a3aabf;
      --color-riverBed: #495166;
      --color-ebony: #262c3b;
      --color-inherit: inherit;

      @media (prefers-color-scheme: dark) {
        --color-salemsfur: #f7f9fc;
        --color-snow: #0a0c14;
        --color-trout: #a3aabf;
        --color-manatee: #a3aabf;
        --color-botticelli: #495166;
        --color-whitelilac: #262c3b;
        --color-alpine: #171b26;
      }
    }
  }
`;

export const font = css`
  :global() {
    :root {
      --font-sans: "Roboto", sans-serif;
      --font-weight-bold: 700;
      --font-weight-light: 300;
    }
  }
`;

export const fontSize = css`
  :global() {
    :root {
      --font-size-10: ${10 / 16}rem;
      --font-size-12: ${12 / 16}rem;
      --font-size-14: ${14 / 16}rem;
      --font-size-16: ${16 / 16}rem;
      --font-size-18: ${18 / 16}rem;
      --font-size-22: ${22 / 16}rem;
      --font-size-28: ${28 / 16}rem;
      --font-size-40: ${40 / 16}rem;
      --font-size-72: ${72 / 16}rem;
    }
  }
`;

export const lineHeight = css`
  :global() {
    :root {
      --line-height-1: 1;
      --line-height-12: 1.2;
      --line-height-13: 1.3;
      --line-height-14: 1.4;
      --line-height-15: 1.5;
      --line-height-16: 1.6;
      --line-height-17: 1.7;
    }
  }
`;

export const space = css`
  :global() {
    :root {
      --space-0: 0px;
      --space-2: 2px;
      --space-4: 4px;
      --space-8: 8px;
      --space-12: 12px;
      --space-16: 16px;
      --space-24: 24px;
      --space-32: 32px;
      --space-40: 40px;
      --space-48: 48px;
    }
  }
`;

export const border = css`
  :global() {
    :root {
      --border-0: 0px;
      --border-1: 1px;
      --border-2: 2px;
      --border-4: 4px;
    }
  }
`;

export const radius = css`
  :global() {
    :root {
      --radius-4: 4px;
      --radius-8: 8px;
      --radius-24: 24px;
      --radius-100: 100px;
      --radius-circle: 50%;
    }
  }
`;
