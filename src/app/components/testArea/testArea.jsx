"use client";
import React from "react";
import { useAppContext } from "@/Context/ColorContext";
import s from "./testArea.module.css";

const TestArea = () => {
  const {
    colorSelected,
    backgroundSelected,
    isUnderlined,
    fontWeight,
    fontSize,
    fontFamily,
    textAlign,
  } = useAppContext();

  const fontStyles = {
    color: colorSelected || "",
    textDecoration: isUnderlined ? "underline" : "none",
    fontWeight: fontWeight,
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    textAlign: textAlign,
  };

  return (
    <div
      className={s.Container}
      style={{ backgroundColor: backgroundSelected }}
    >
      <h1 style={fontStyles}>HELLO WORD</h1>
    </div>
  );
};

export default TestArea;
