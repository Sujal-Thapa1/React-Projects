import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hex1, setHex1] = useState("#fff");
  const [hex2, setHex2] = useState("#000");
  const [gradientCode, setGradientCode] = useState(
    `background: linear-gradient(to right, ${hex1}, ${hex2})`
  );

  useEffect(() => {
    document.body.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`;
  }, [hex1, hex2]);

  const generateRandomHex = () => {
    const values = "0123456789abcdef";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += values[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  const handleColor1Click = () => {
    const newHex1 = generateRandomHex();
    setHex1(newHex1);
    const newCode = `background: linear-gradient(to right, ${newHex1}, ${hex2})`;
    setGradientCode(newCode);
  };

  const handleColor2Click = () => {
    const newHex2 = generateRandomHex();
    setHex2(newHex2);
    const newCode = `background: linear-gradient(to right, ${hex1}, ${newHex2})`;
    setGradientCode(newCode);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(gradientCode);
    alert("Copied to clipboard!");
  };

  return (
    <div className="container">
      <div className="btn">
        <button onClick={handleColor1Click}>{hex1}</button>
        <button onClick={handleColor2Click}>{hex2}</button>
      </div>
      <div className="content">
        <h2>Click to copy the code</h2>
        <div className="copycode" onClick={handleCopyCode}>
          {gradientCode}
        </div>
      </div>
    </div>
  );
}

export default App;
