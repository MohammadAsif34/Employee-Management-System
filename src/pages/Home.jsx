import React from "react";
import LandingPage from "../components/LandingPage";
import { useUser } from "../context/CreateContext";
import Loading from "../components/Loading";

const Home = () => {
  const { loading } = useUser();

  if (loading) return <Loading />;
  return <div className="bg-neutral-800 text-white">{<LandingPage />}</div>;
};

export default Home;
