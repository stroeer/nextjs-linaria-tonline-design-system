import NextImage from "next/image";
import { styled } from "design/styled";
import { pull } from "design/pull";

import type { FC } from "react";

interface HeroTeaserProps {
  media: Media;
  kicker: string;
  headline: string;
}

interface Media {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Text = styled("div", pull.up24);
const Kicker = styled("p");
const Hedline = styled("p");

const Media: FC<{ media: Media }> = ({ media }) => (
  <NextImage layout="responsive" src={media.src} alt={media.alt} width={media.width} height={media.height} />
);

export const HeroTeaser: FC<HeroTeaserProps> = ({ media, kicker, headline }) => {
  return (
    <article>
      <Media media={media} />
      <Text>
        <Kicker>{kicker}</Kicker>
        <Hedline>{headline}</Hedline>
      </Text>
    </article>
  );
};
