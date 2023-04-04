import React from "react";
import ColorTitle from "./ColorTitle";

const RandomColor = () => {
  const handleClick = (e) => {
    console.log(randomColorGenerator());
    let bodyBackgroundColor = document.querySelector("body");
    bodyBackgroundColor.style.background = randomColorGenerator();
  };

  const randomColorGenerator = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section>
      <h2>Randomize Color App</h2>
      <ColorTitle colorName = {randomColorGenerator} onChildClick ={handleClick}/>
     
    </section>
  );
};

export default RandomColor;
