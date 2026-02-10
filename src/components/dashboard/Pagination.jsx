import { useState } from "react";
import { employee } from "../../dataSets/employee";

const Pagination = () => {
  const length = employee.length;
  const [size, setSize] = useState(100);
  const [count, setCount] = useState(1);
  // const [start, setStart] = useState(1);
  // const [end, setEnd] = useState(1);
  const handleChange = (e) => {
    setSize(e.target.value);
    console.log("entries: ", e.target.value);
  };
  let entry = Math.ceil(length / size);

  const previous = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  const next = () => {
    if (count < entry) setCount((prev) => prev + 1);
  };
  return (
    <>
      <div className="mt-8 flex justify-between">
        <div className="   border border-gray-500 rounded-sm flex">
          <span className="px-2 border-r">Entries</span>
          <select
            className="px-2 text-gray-300 bg-black/90"
            value={size}
            onChange={handleChange}
          >
            <option value="25">25</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 border border-gray-500 rounded-md cursor-pointer"
            onClick={previous}
          >
            <i className="bi bi-chevron-double-left"></i>
          </button>
          <button className="px-3 border border-gray-500 rounded-md cursor-pointer">
            {count}
          </button>

          <button className="px-3 border border-gray-500 rounded-md cursor-pointer">
            ...
          </button>
          <button className="px-3 border border-gray-500 rounded-md cursor-pointer">
            {entry}
          </button>
          <button
            className="px-3 border border-gray-500 rounded-md cursor-pointer"
            onClick={next}
          >
            <i className="bi bi-chevron-double-right"></i>
          </button>
        </div>
        <div className="text-sm text-gray-500">
          <p>
            {size * count} of {length} Entries
          </p>
        </div>
      </div>
    </>
  );
};
export default Pagination;
