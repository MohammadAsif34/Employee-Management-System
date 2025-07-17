import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-2xl font-bold text-white">
      Loading <span className="animate-spin ">...</span>
    </div>
  );
};

export default Loading;
