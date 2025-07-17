import React from "react";

const ScrollTopBottom = () => {
  return (
    <>
      <div className="text-white fixed bottom-5 right-15 flex flex-col justify-center items-center gap-4  ">
        <button
          className="px-3 py-2 rounded-full bg-color cursor-pointer"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <i className="bi bi-arrow-up"></i>
        </button>
        <button
          className="px-3 py-2 rounded-full bg-color cursor-pointer "
          onClick={() =>
            window.scroll({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <i className="bi bi-arrow-down"></i>
        </button>
      </div>
    </>
  );
};

export default ScrollTopBottom;
