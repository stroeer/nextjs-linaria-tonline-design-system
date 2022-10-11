import NextImage from "next/image";
import { styled } from "@linaria/atomic";
import t from "design/tokens";
import { headline, kicker } from "design/styles";

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
  grid-template-columns: ${t.space24}px 1fr ${t.space24}px;
  grid-template-rows: repeat(2, auto);

  & > *:nth-child(1) {
    grid-area: 1 / 1 / 2 / 4;
  }

  & > *:nth-child(2) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

const space = { 24: 24, s24: 24 };
const radius = { 8: 8, r8: 8 };
const color = { snow: "#ffffff" };
const { space24, radius8, colorSnow } = t;

const Text = styled.div`
  position: relative;
  padding: ${t.space24}px;
  margin-top: -${t.space24}px;
  border-radius: ${t.radius8}px;
  background: ${t.colorSnow};
`;

const Text2 = styled.div`
  position: relative;
  padding: ${space24}px;
  margin-top: -${space24}px;
  border-radius: ${radius8}px;
  background: ${colorSnow};
`;

const Text3 = styled.div`
  position: relative;
  padding: ${space[24]}px;
  margin-top: -${space[24]}px;
  border-radius: ${radius[8]}px;
  background: ${color.snow};
`;

const Text4 = styled.div`
  position: relative;
  padding: ${space.s24}px;
  margin-top: -${space.s24}px;
  border-radius: ${radius.r8}px;
  background: ${color.snow};
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
      <Text2 />
      <Text3 />
      <Text4 />
    </Article>
  );
};
