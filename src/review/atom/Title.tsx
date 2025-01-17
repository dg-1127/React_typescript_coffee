type TitleProps = {
  title?: string;
};

const Title = ({ title = "No data" }: TitleProps) => {
  return <strong>{title}</strong>;
};

export default Title;
