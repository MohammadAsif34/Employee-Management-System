import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
