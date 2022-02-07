import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ spritesfront, spritesback, name, hp }) {


  const [side, setSide] = useState(true)

  function turnCard() {
    setSide(side => !side)
  }

  const sideImage = side ? spritesfront : spritesback
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={sideImage} onClick={turnCard} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
