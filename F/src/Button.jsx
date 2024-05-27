import React from "react";
import { useState } from "react";
function Button({ colorName, colorHex }) {
  const [color, setColor] = useState("#000000");
  function changeBgcolor(color) {
    document.body.style.backgroundColor = color;
  }
  function handleClick(){
    setColor(colorHex);
    changeBgcolor(colorHex);
  }
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-full bg-${colorName}-600 text-blue-800`}
      style={{ backgroundColor: colorHex }}
      onClick={handleClick}
    >
      {colorName}
    </button>
  );
}

export default Button;
