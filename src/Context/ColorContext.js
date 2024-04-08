"use client";
import React, { createContext, useContext, useState } from "react";

// Crear el contexto
export const ColorContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [colorSelected, setColorSelected] = useState("#fff");
  const [backgroundSelected, setBackgroundSelected] = useState("#000");
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontSize, setFontSize] = useState("16");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textAlign, setTextAlign] = useState("left");
  return (
    <ColorContext.Provider
      value={{
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
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  return useContext(ColorContext);
};
