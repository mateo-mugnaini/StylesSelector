import React from "react";
import FontColor from "../colorPiker/FontColor";
import s from "./menuLeft.module.css";
import BackgroundColor from "../colorPiker/BackgroundColor";

const MenuLeft = () => {
  return (
    <div className={s.Container}>
      <FontColor />
      <BackgroundColor />
    </div>
  );
};

export default MenuLeft;
