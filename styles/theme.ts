import { tokens } from "./tokens";

// type Name = keyof typeof tokens;

// const names = Object.keys(tokens);

/* function getName(attr: string): Name | null {
  const sortedDesc = names.slice().sort((a, b) => b.length - a.length);
  const matcher = sortedDesc.join("|");
  const match = attr.match(new RegExp(`^(${matcher})`));
  return match ? (match[0] as Name) : null;
} */

function cap(value: string | number) {
  const str = value.toString();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* const tokenMap = Object.fromEntries(
  Object.keys(tokens).flatMap(name =>
    Object.keys(tokens[name]).map(prop => [`${name}${cap(prop)}`, tokens[name][prop]])
  )
); */

function traverseKeys(obj: Record<PropertyKey, unknown>, callback: (path: PropertyKey[], value: unknown) => any) {
  return Object.keys(obj).map(key => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      return traverseKeys(value, callback);
    } else {
      return callback([], value);
    }
  });
}

const theme = new Proxy(
  {},
  {
    get(_, prop) {
      // if (tokenMap[prop])

      if (typeof prop === "symbol") {
        return undefined;
      }

      /* const name = getName(prop);

      if (!name) {
        return undefined;
      } */
    },
  }
);
