export type ImageProps = {
  imgSrc?: string;
};

const Image = ({ imgSrc = "NoData.webp" }: ImageProps) => {
  return (
    <figure className="w-full">
      <img className="w-full" src={imgSrc} alt="" />
    </figure>
  );
};

export default Image;
