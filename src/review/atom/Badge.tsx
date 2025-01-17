export type BadgeProps = {
  text?: string;
  color?: "red" | "blue" | "green" | "grey";
};

const Badge = ({ text = "No data", color = "grey" }: BadgeProps) => {
  return <span className={`bg-${color}-200 p-4 rounded-sm`}>{text}</span>;
};

export default Badge;
