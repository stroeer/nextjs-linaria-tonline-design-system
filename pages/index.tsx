import { styled } from "@linaria/atomic";
import { headline } from "design/text.objectStyles";
import "design/bootstrap";

import type { NextPage } from "next";

const Title = styled.h1`
  ${headline.xlarge}

  &:hover {
    color: red;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Title href="/">hello world</Title>
    </div>
  );
};

export default Home;
