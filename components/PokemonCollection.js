import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeObj}) {

const pokeList = pokeObj.map(poke => {return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} spritesfront={poke.sprites.front} spritesback={poke.sprites.back} />})

  return (
    <Card.Group itemsPerRow={6}>
  
      {pokeList}
    </Card.Group>
  );
}

export default PokemonCollection;
