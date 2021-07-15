import React, { useState } from "react";
import { GeneralContainer, Wrapper } from "./Menu.elements";
import Properties from "../Properties/Properties";
import Ring from "../Ring/Ring";

const Menu = () => {
  const [currentGem, setCurrentGem] = useState({ name: "" });
  const [currentRingColor, setCurrentRingColor] = useState({ color: "" });
  const [currentRingTextures, setCurrentRingTextures] = useState({
    base: "",
    normal: "",
    roughness: "",
  });

  return (
    <GeneralContainer>
      <Wrapper>
        <Properties
          setCurrentGem={setCurrentGem}
          setCurrentRingColor={setCurrentRingColor}
          setCurrentRingTextures={setCurrentRingTextures}
        />
        <Ring
          currentGem={currentGem}
          currentRingColor={currentRingColor}
          currentRingTextures={currentRingTextures}
        />
      </Wrapper>
    </GeneralContainer>
  );
};

export default Menu;
