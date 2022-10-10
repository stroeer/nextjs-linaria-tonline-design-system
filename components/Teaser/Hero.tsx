import NextImage from "next/image";
import { styled } from "@linaria/atomic";
import { headline, kicker } from "design/text";
import { pull } from "design/layout";
import { background } from "design/color";
import { border } from "design/border";

import type { FC } from "react";
import type { StaticImageData } from "next/image";

interface HeroTeaserProps {
  headline: string;
  kicker: string;
  media: Media;
}

interface Media {
  type: "image";
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

const Article = styled.article`
  display: grid;
  grid-template-columns: var(--space-24) 1fr var(--space-24);
  grid-template-rows: repeat(2, auto);

  & > *:nth-child(1) {
    grid-area: 1 / 1 / 2 / 4;
  }

  & > *:nth-child(2) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

const Text = styled.div`
  position: relative;
  padding: var(--space-24);
  ${pull.up24}
  ${background.snow};
  ${border.radius8}
`;

const Kicker = styled.p`
  ${kicker}
`;

const Hedline = styled.p`
  ${headline.large}
`;

const Media: FC<{ media: Media }> = ({ media: { src, alt, width, height } }) => (
  <NextImage layout="responsive" src={src} alt={alt} width={width} height={height} />
);

export const HeroTeaser: FC<HeroTeaserProps> = ({ media, kicker, headline }) => {
  return (
    <Article>
      <Media media={media} />
      <Text>
        <Kicker>{kicker}</Kicker>
        <Hedline>{headline}</Hedline>
      </Text>
    </Article>
  );
};
