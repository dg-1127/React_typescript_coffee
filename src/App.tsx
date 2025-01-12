import { useEffect, useState } from "react";
import { CoffeeCardProps } from "./molecules/CoffeeCard";
import Menu from "./organism/Menu";

type CoffeeAPI = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

function App() {
  const [data, setData] = useState<CoffeeCardProps[]>([]);

  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();
    const data1 = json.map((v: CoffeeAPI) => ({
      imgSrc: v.image,
      title: v.title,
      description: v.description,
      badges: v.ingredients.map((ingredient) => ({
        text: ingredient,
        color: "green",
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
