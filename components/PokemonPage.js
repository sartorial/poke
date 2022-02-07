import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";



function PokemonPage() {

  const [pokeObj, setPokeObj] = useState([])
  const [ search, setSearch ] = useState('')

useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(res => res.json())
  .then(data => setPokeObj(data))
},[])

const pokeSearch = pokeObj.filter(poke => {return poke.name.toLowerCase().includes(search.toLowerCase())})

function addPokemon(newPoke){
  setPokeObj([...pokeObj, newPoke])
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokeObj={pokeSearch}/>
    </Container>
  );
}

export default PokemonPage;
