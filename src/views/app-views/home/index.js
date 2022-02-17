import React from "react";

import PokeCard from "components/pokemon/PokeCard";

const Home = () => {
  const poke = {
    imgAlt: "example",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    id: "001",
    title: "Bossman TJ",
    tags: [
      { title: "Plante", color: "#2db7f5" },
      { title: "Poison", color: "#87d068" },
    ],
  };
  return <PokeCard poke={poke} />;
};

export default Home;
