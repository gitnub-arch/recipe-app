import React, { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../../context/themeProvider";
import modeIcon from "../../assets/mode-icon.svg";

export const themeColors = ["#58249c", "#249c6b", "#b70233"];

function ThemeSelector() {
  const { changeColor, mode, changeMode } = useContext(ThemeContext);

  const handleColorChange = (color) => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="dark/light"
          style={{ filter: "dark" ? "invert(100%)" : "invert(20%" }}
          onClick={handleColorChange}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            onClick={() => changeColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;