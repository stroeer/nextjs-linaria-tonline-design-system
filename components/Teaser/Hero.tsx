import NextImage from "next/image";
import { styled } from "@linaria/atomic";
import { headline, kicker } from "design/text";
import { pull } from "design/layout";

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

const Text = styled.div`
  ${pull.up24}
`;

const Kicker = styled.p`
  ${kicker}
`;

const Hedline = styled.p`
  ${headline.large}
`;

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
