import React from "react";

import { Space } from "antd";

import PokeCard from "components/pokemon/PokeCard";

const Home = () => {
  const pokes = [
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Bossman TJ",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Dr. Mike",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Bebe Les",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Bossman TJ",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Bossman TJ",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Bossman TJ",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
    {
      imgAlt: "example",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      id: "001",
      title: "Bossman TJ",
      tags: [
        { title: "Plante", color: "#2db7f5" },
        { title: "Poison", color: "#87d068" },
      ],
    },
  ];
  return (
    <Space wrap>
      {pokes.map((poke) => (
        <PokeCard poke={poke} />
      ))}
    </Space>
  );
};

export default Home;
