type Dir = "Top" | "Left" | "Bottom" | "Right" | "X" | "Y" | "";
type Space = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48;

type Theme = {
  [key in `padding${Dir}${Space}`]: Record<string, string>;
};

const theme = new Proxy(
  {},
  {
    get(_target, prop) {
      if (typeof prop === "symbol") {
        return undefined;
      }

      const padding = parseProp("padding", prop);

      if (!padding) {
        return undefined;
      }

      const { dir = "", space } = padding;

      if (!space) {
        return undefined;
      }

      if (dir === "X") {
        return {
          paddingLeft: `var(--space-${space})`,
          paddingRight: `var(--space-${space})`,
        };
      }

      if (dir === "Y") {
        return {
          paddingTop: `var(--space-${space})`,
          paddingBottom: `var(--space-${space})`,
        };
      }

      return {
        [`padding${dir}`]: `var(--space-${space})`,
      };
    },
  }
) as Theme;

function parseProp(
  name: string,
  value: string
):
  | {
      dir?: "Top" | "Left" | "Bottom" | "Right" | "X" | "Y";
      space?: "0" | "2" | "4" | "8" | "12" | "16" | "24" | "32" | "40" | "48";
    }
  | undefined {
  const dir = ["Top", "Left", "Bottom", "Right", "X", "Y"].join("|");
  const space = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48].join("|");
  return new RegExp(`^${name}(?<dir>${dir})?(?<space>${space})$`).exec(value)?.groups;
}

export default theme;
