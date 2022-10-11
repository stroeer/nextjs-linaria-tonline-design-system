import { HeroTeaser } from "components/Teaser/Hero";
import placeholder from "../public/images/palceholder-1280x720.png";
import "design/bootstrap";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
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
