export type DescriptionProps = {
  description?: string;
};

const Description = ({ description = "No Data" }: DescriptionProps) => {
  return <p>{description}</p>;
};

export default Description;
