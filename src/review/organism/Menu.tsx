import Coffee, { CoffeeProps } from "../molecules/Coffee";

export type MenuProps = {
  coffees: CoffeeProps[];
};

const Menu = ({ coffees }: MenuProps) => {
  return (
    <section className="flex">
      {coffees.map((v) => (
        <Coffee imgSrc={v.imgSrc} title={v.title} description={v.description} badges={v.badges} />
      ))}
    </section>
  );
};

export default Menu;
