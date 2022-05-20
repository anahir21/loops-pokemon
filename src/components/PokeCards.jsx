import React, { useState } from "react";
import { mockPokemonsData } from "../mock/pokeData";
import { PokeCard } from "./PokeCard";

export function PokeCards(props) {
  console.log("entrando", mockPokemonsData);
  const myMockData = mockPokemonsData;
  console.log(myMockData);
  let pokeList = [];
  for (var i = 0; i < myMockData.length; i++) {
    console.log(myMockData[i]);
    console.log(myMockData[i].name);

    pokeList.push(
      <PokeCard
        name={myMockData[i].name}
        sprites={myMockData[i].sprites}
        url={myMockData[i].videoLink}
      />
    );
  }

  return pokeList;
}


