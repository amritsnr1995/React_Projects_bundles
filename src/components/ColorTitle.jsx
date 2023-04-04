import React from "react";

const ColorTitle = ({ colorName,onChildClick }) => {
  return (
    <div>
      ColorName: {colorName}
      <button onClick={onChildClick}>Generate random color</button>
    </div>
  );
};

export default ColorTitle;
