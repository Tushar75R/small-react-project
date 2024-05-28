import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  // Tailwind-compatible color names and their hex values
  const ColorArr = [
    { colorName: "black", colorHex: "#000000" },
    { colorName: "red", colorHex: "#FF2D00" },
    { colorName: "green", colorHex: "#13FF00" },
    { colorName: "pink", colorHex: "#FF00F0" },
    { colorName: "yellow", colorHex: "#FFF300" },
  ];
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex-auto flex space-x-4">
        {ColorArr.map((colorObject, index) => (
          <Button
            key={index}
            colorName={colorObject.colorName}
            colorHex={colorObject.colorHex}
          />
        ))}
      </div>
    </>
  );
}

export default App;
