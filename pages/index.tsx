import { cx } from "@linaria/core";
import { xlarge } from "../design/text/headline";
import "../design/tokens";
import "../design/reset";
import "../design/defaults";

import type { FC, PropsWithChildren } from "react";
import type { NextPage } from "next";

/**
 * todo can't put css`` into styled`` css
 */
const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={cx(xlarge)}>{children}</h1>;
};

const Home: NextPage = () => {
  return (
    <div>
      <Title>hello world</Title>
    </div>
  );
};

export default Home;
