"use client";
import React from "react";
import { useAppContext } from "@/Context/ColorContext";
import s from "./FontColor.module.css";
const BackgroundColor = () => {
  const { backgroundSelected, setBackgroundSelected } = useAppContext();

  const handleColorChange = (e) => {
    setBackgroundSelected(e.target.value);
  };

  return (
    <div className={s.Container}>
      <h2>Background Color:</h2>
      <input
        type="color"
        value={backgroundSelected}
        onChange={handleColorChange}
      />
      <p>{backgroundSelected}</p>
    </div>
  );
};

export default BackgroundColor;
