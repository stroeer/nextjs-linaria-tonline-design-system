import { styled } from "../design/styled";
import { headline } from "../design/headline";
import "../design/tokens";
import "../design/reset";
import "../design/defaults";

import type { NextPage } from "next";

const Title = styled("h1", headline.xlarge);

const Home: NextPage = () => {
  return (
    <div>
      <Title>hello world</Title>
    </div>
  );
};

export default Home;
