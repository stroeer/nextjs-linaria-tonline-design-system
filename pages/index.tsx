import { styled } from "design/styled";
import { headline } from "design/headline";
import "design/bootstrap";

import type { NextPage } from "next";

const Title = styled("a", headline.xlarge);

const Home: NextPage = () => {
  return (
    <div>
      <Title href="/">hello world</Title>
    </div>
  );
};

export default Home;
