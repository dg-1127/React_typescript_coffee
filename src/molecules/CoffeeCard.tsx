import Badge, { BadgeProps } from "../atom/Badge";
import Description, { DescriptionProps } from "../atom/Description";
import Image, { ImageProps } from "../atom/Image";
import Title, { TitleProps } from "../atom/Title";

export type CoffeeCardProps = {
  imgSrc: ImageProps["imgSrc"];
  title: TitleProps["title"];
  description: DescriptionProps["description"];
  badges: BadgeProps[];
};

const CoffeeCard = ({ imgSrc, title, description, badges }: CoffeeCardProps) => {
  return (
    <article className="flex flex-col items-center p-10">
      <Image imgSrc={imgSrc} />
      <Title title={title} />
      <Description description={description} />
      {badges.map((v) => (
        <Badge {...v} />
      ))}
    </article>
  );
};

export default CoffeeCard;
