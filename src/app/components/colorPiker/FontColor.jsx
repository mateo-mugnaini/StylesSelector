"use client";
import React from "react";
import { useAppContext } from "@/Context/ColorContext";
import s from "./FontColor.module.css";
const FontColor = () => {
  const {
    colorSelected,
    setColorSelected,
    backgroundSelected,
    setBackgroundSelected,
    isUnderlined,
    setIsUnderlined,
    fontWeight,
    setFontWeight,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    textAlign,
    setTextAlign,
  } = useAppContext();

  const handleColorChange = (e) => {
    setColorSelected(e.target.value);
  };

  const handleUnderlineChange = (e) => {
    setIsUnderlined(e.target.checked);
  };

  const handleFontWeightChange = (e) => {
    setFontWeight(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleTextAlignChange = (e) => {
    setTextAlign(e.target.value);
  };

  return (
    <div className={s.TextOptions}>
      <h2>Font Color:</h2>
      <input type="color" value={colorSelected} onChange={handleColorChange} />

      <label>
        <input
          type="checkbox"
          checked={isUnderlined}
          onChange={handleUnderlineChange}
        />
        Underline
      </label>
      <label>
        Font Weight:
        <select value={fontWeight} onChange={handleFontWeightChange}>
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="700">700</option>
          <option value="900">900</option>
        </select>
      </label>
      <label>
        Font Size:
        <input type="number" value={fontSize} onChange={handleFontSizeChange} />
      </label>
      <label>
        Font Family:
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </label>
      <label>
        Text Align:
        <select value={textAlign} onChange={handleTextAlignChange}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
    </div>
  );
};

export default FontColor;
