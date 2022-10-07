import { css } from "@linaria/core";

const fontFace = css`
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
`;

const color = css`
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
    --color-salemsfur: var(--color-alpine);
    --color-snow: var(--color-black);
    --color-trout: var(--color-cadetBlue);
    --color-manatee: var(--color-cadetBlue);
    --color-botticelli: var(--color-riverBed);
    --color-whitelilac: var(--color-ebony);
    --color-alpine: var(--color-salemsfur);
  }
`;

const font = css`
  --font-sans: "Roboto", sans-serif;
  --font-weight-bold: 700;
  --font-weight-light: 300;
`;

const fontSize = css`
  --font-size-10: 10px;
  --font-size-12: 12px;
  --font-size-14: 14px;
  --font-size-16: 16px;
  --font-size-18: 18px;
  --font-size-22: 22px;
  --font-size-28: 28px;
  --font-size-40: 40px;
  --font-size-72: 72px;
`;

const lineHeight = css`
  --line-height-1: 1;
  --line-height-12: 1.2;
  --line-height-13: 1.3;
  --line-height-14: 1.4;
  --line-height-15: 1.5;
  --line-height-16: 1.6;
  --line-height-17: 1.7;
`;

const space = css`
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
`;
