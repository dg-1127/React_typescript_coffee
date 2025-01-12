import CoffeeCard, { CoffeeCardProps } from "../molecules/CoffeeCard";

export type MenuProps = {
  coffees: CoffeeCardProps[];
};

const Menu = ({ coffees }: MenuProps) => {
  return (
    <section className="grid grid-cols-4 w-full max-w-5xl m-auto">
      {coffees.map((v) => (
        <CoffeeCard imgSrc={v.imgSrc} title={v.title} description={v.description} badges={v.badges} />
      ))}
    </section>
  );
};

export default Menu;
