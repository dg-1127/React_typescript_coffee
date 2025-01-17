type DescriptionProps = {
  text?: string;
};

const Description = ({ text = "No data" }: DescriptionProps) => {
  return <p>{text}</p>;
};

export default Description;
