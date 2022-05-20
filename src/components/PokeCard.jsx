import React, { useState } from "react";
import { PokeCards, myMockData } from "./PokeCards";

export function PokeCard(props) {
  return (
    <div className="pokemon-card">
      <h1 className="name">{props.name}</h1>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          alt="pokemon"
          src={props.sprites.back_default || props.sprites.front_default}
          onMouseOver={(e) =>
            (e.currentTarget.src =
              props.sprites.back_shiny ||
              props.sprites.back_default ||
              props.sprites.front_shiny)
          }
        />
      </a>
    </div>
  );
}
