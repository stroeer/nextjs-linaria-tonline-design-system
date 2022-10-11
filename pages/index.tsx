import { css, styled } from "@linaria/atomic";
import { HeroTeaser } from "components/Teaser/Hero";
import placeholder from "../public/images/palceholder-1280x720.png";
import "design/bootstrap";

import type { NextPage } from "next";

const Headline = styled.h1`
  font-size: var(--font-size-28);

  &:hover {
    color: purple;
  }
`;

const Container = styled.div`
  ${Headline} {
    color: yellow;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Headline>Headline</Headline>

      <HeroTeaser
        headline="Headline"
        kicker="Kicker"
        media={{
          type: "image",
          src: placeholder,
          alt: "placeholder",
          width: 1280,
          height: 720,
        }}
      />
    </div>
  );
};

export default Home;
