import React from "react";
import { OptionGemContainer, OptionGemDetails } from "./Gem.elements";

const Gem = ({ setCurrentGem }) => {
  const handleGem = (gem) => {
    setCurrentGem({ name: gem });
  };

  return (
    <OptionGemContainer>
      <h2>Gems Options</h2>
      <OptionGemDetails>
        <h4 onClick={() => handleGem("blue")}>Option 1</h4>
        <h4 onClick={() => handleGem("monkey")}>Option 2</h4>
        <h4 onClick={() => handleGem("red")}>Option 3</h4>
      </OptionGemDetails>
    </OptionGemContainer>
  );
};

export default Gem;
