"use client";
import React from "react";
import MenuLeft from "../components/menuLeft/menuLeft";
import s from "./page.module.css";
import TestArea from "../components/testArea/testArea";

const Home = () => {
  return (
    <div className={s.Container}>
      <MenuLeft />
      <TestArea />
    </div>
  );
};

export default Home;
