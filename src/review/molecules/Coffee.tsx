import { DescriptionProps } from "../../atom/Description";
import { TitleProps } from "../../atom/Title";
import Badge, { BadgeProps } from "../atom/Badge";
import Description from "../atom/Description";
import Image, { ImageProps } from "../atom/Image";
import Title from "../atom/Title";

export type CoffeeProps = {
  imgSrc: ImageProps["imgSrc"];
  title: TitleProps["title"];
  description: DescriptionProps["description"];
  badges: BadgeProps[];
};

const Coffee = ({ imgSrc, title, description, badges }: CoffeeProps) => {
  return (
    <article className="flex flex-col items-center p-10">
      <Image imgSrc={imgSrc} />
      <Title title={title} />
      <Description text={description} />
      {badges.map((v) => (
        <Badge {...v} />
      ))}
    </article>
  );
};

export default Coffee;
