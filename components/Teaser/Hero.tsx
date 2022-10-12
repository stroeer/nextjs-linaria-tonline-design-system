import NextImage from "next/image";
import { styled } from "@linaria/atomic";
import { headline, kicker } from "design/styles";
import t from "design/tokens";

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
  grid-template-columns: ${t.space.s24} 1fr ${t.space.s24};
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
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, auto);
  grid-gap: ${t.space.s8};
  padding: ${t.space.s24};
  margin-top: -${t.space.s24};
  border-radius: ${t.radius.r8};
  background: ${t.color.snow};
`;

const Kicker = styled.p`
  ${kicker};
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
