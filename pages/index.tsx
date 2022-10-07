import { cx } from "@linaria/core";
import { xlarge } from "../design/text/headline";
import "../design/tokens";
import "../design/reset";
import "../design/defaults";

import type { FC, ReactNode } from "react";
import type { NextPage } from "next";

/**
 * todo can't put css`` into styled`` css
 */
const Title: FC<{ children?: ReactNode | undefined }> = ({ children }) => {
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
