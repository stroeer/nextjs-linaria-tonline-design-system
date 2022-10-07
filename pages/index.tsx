import { cx } from "@linaria/core";
import { xlarge } from "../design/text/headline";
import "../design/tokens";

import type { FC, ReactNode } from "react";
import type { NextPage } from "next";

const Title: FC<{ children?: ReactNode | undefined }> = ({ children }) => <h1 className={cx(xlarge)}>{children}</h1>;

const Home: NextPage = () => {
  return (
    <div>
      <Title>hello world</Title>
    </div>
  );
};

export default Home;
