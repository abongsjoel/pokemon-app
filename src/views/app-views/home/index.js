import React from "react";

import { Space } from "antd";
import { gql, useQuery } from "@apollo/client";

import PokeCard from "components/pokemon/PokeCard";

export const POKES = gql`
  query GetFuzzyPokemon($pokemon: String!, $take: Int) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take) {
      species
      color
      backSprite
      types
      key
      shinySprite
      shinyBackSprite
      sprite
      weight
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(POKES, {
    variables: {
      pokemon: "Syclar",
      take: 20,
    },
  });

  console.log({ loading, error, data });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Space wrap space="large">
      {data.getFuzzyPokemon.map((poke, indx) => (
        <div>
          <PokeCard poke={{ ...poke, id: indx + 1 }} />
        </div>
      ))}
    </Space>
  );
};

export default Home;

// const pokes = [
//   {
//     imgAlt: "example",
//     imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
//     id: "001",
//     title: "Bossman TJ",
//     tags: [
//       { title: "Plante", color: "#2db7f5" },
//       { title: "Poison", color: "#87d068" },
//     ],
//   },
// ];
