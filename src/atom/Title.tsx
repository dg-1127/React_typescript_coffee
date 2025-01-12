export type TitleProps = {
  title?: string;
};

const Title = ({ title = "No Data" }: TitleProps) => {
  return <strong>{title}</strong>;
};

export default Title;
