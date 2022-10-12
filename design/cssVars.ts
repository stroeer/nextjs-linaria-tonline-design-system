import { css } from "@linaria/core";
import t from "./tokens";

export const color = css`
  :global() {
    :root {
      --color-magenta: ${t.color.hexcode.magenta};
      --color-salemsfur: ${t.color.hexcode.salemsfur};
      --color-royalblue: ${t.color.hexcode.royalblue};
      --color-trout: ${t.color.hexcode.trout};
      --color-manatee: ${t.color.hexcode.manatee};
      --color-snow: ${t.color.hexcode.snow};
      --color-botticelli: ${t.color.hexcode.botticelli};
      --color-whitelilac: ${t.color.hexcode.whitelilac};
      --color-alpine: ${t.color.hexcode.alpine};
      --color-red: ${t.color.hexcode.red};
      --color-netflixred: ${t.color.hexcode.netflixred};
      --color-green: ${t.color.hexcode.green};
      --color-cararra: ${t.color.hexcode.cararra};
      --color-icewater: ${t.color.hexcode.icewater};
      --color-pro: ${t.color.hexcode.pro};
      --color-con: ${t.color.hexcode.con};
      --color-black: ${t.color.hexcode.black};
      --color-cadetblue: ${t.color.hexcode.cadetblue};
      --color-riverbed: ${t.color.hexcode.riverbed};
      --color-ebony: ${t.color.hexcode.ebony};
      --color-inherit: ${t.color.hexcode.inherit};

      @media (prefers-color-scheme: dark) {
        --color-salemsfur: ${t.color.hexcode.alpine};
        --color-snow: ${t.color.hexcode.black};
        --color-trout: ${t.color.hexcode.cadetblue};
        --color-manatee: ${t.color.hexcode.cadetblue};
        --color-botticelli: ${t.color.hexcode.riverbed};
        --color-whitelilac: ${t.color.hexcode.ebony};
        --color-alpine: ${t.color.hexcode.salemsfur};
      }
    }
  }
`;
