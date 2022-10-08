import { styled } from "@linaria/react";
import { headline } from "../design/text";
import "../design/tokens";
import "../design/reset";
import "../design/defaults";

import type { NextPage } from "next";

const Title2 = styled.h1`
  ${headline.xlarge}
`;

const Home: NextPage = () => {
  return (
    <div>
      <Title2>hello world</Title2>
    </div>
  );
};

export default Home;
