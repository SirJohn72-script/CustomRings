import React from "react";
import {
  OptionEngravingContainer,
  OptionEngravingDetail,
} from "./RingTexture.elements";
import * as THREE from "three";

const RingTexture = ({ setCurrentRingTextures }) => {
  const handleRingTextures = (folder) => {
    const textureLoader = new THREE.TextureLoader();

    setCurrentRingTextures({
      base: textureLoader.load(`./model/textures/${folder}/base.png`),
      normal: textureLoader.load(`./model/textures/${folder}/normal.png`),
      roughness: textureLoader.load(
        `./model/textures/${folder}/roughness_metalness.png`
      ),
    });
  };

  return (
    <OptionEngravingContainer>
      <h2>Metal Engraving</h2>
      <OptionEngravingDetail>
        <h4 onClick={() => handleRingTextures("1")}>Option 1</h4>
        <h4 onClick={() => handleRingTextures("2")}>Option 2</h4>
        <h4 onClick={() => handleRingTextures("3")}>Option 3</h4>
        <h4 onClick={() => handleRingTextures("4")}>Option 4</h4>
      </OptionEngravingDetail>
    </OptionEngravingContainer>
  );
};

export default RingTexture;
