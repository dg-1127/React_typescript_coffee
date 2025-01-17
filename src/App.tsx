import { useEffect, useState } from "react";
import Menu from "./review/organism/Menu";
import { CoffeeProps } from "./review/molecules/Coffee";

type CoffeeAPI = {
  image: string;
  title: string;
  description: string;
  ingredients: string[];
  id: number;
};

function App() {
  const [data, setData] = useState<CoffeeProps[]>([]);

  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/iced");
    const json = await resp.json();
    const data1 = json.map((v: CoffeeAPI) => ({
      imgSrc: v.image,
      title: v.title,
      description: v.description,
      badges: v.ingredients.map((ingredient) => ({
        text: ingredient,
      })),
    }));
    setData(data1);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Menu coffees={data} />;
}

export default App;
