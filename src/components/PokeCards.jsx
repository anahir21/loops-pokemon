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

//console.log(myMockData[i].sprites.back_default);
//console.log(myMockData[i].sprites.back_shiny);
//return <p>{[i].name}</p>;

//const allPokemons = pokemons.map(
// (pokemon) => `
// <div class="card">
// <img src="${pokemon.img}">
//  <p class="name">${pokemon.num} ${pokemon.name}</p>
// <p class="type">Tipo: ${pokemon.type.join(", ")}</p>
//  <p class="physical">Peso: ${pokemon.size.weight} | Altura: ${
//  pokemon.size.height
// }</p>
//  <div class="footer-card">
//   <span class="generation">${pokemon.generation.name}</span>
//   </div>
// </div>
//`
//);
