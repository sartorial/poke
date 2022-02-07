import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {

const [ name, setName ] = useState('')
const [ hp, setHp ] = useState('')
const [spritesFront, setSpritesFront ] = useState('')
const [ spritesBack, setSpritesBack ] = useState('')


function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    name: name,
    hp: hp,
    front: spritesFront,
    back: spritesBack
  }

fetch('http://localhost:3001/pokemon', {
  method: "POST",
  headers: {
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(res => res.json())
.then(data => {
  addPokemon(data)
})
}
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={e => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setSpritesFront(e.target.value)}
            value={spritesFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setSpritesBack(e.target.value)}
            value={spritesBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
