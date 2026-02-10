import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import MainLayout from "../layouts/MainLayout";
import { UserContextProvider } from "../context/contextProvide";

const PrivateRoutes = () => {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default PrivateRoutes;
