import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <>
      <main className=" bg-gray-950">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route path="/auth/*" element={<PublicRoutes />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      </main>
    </>
  );
};

export default App;
