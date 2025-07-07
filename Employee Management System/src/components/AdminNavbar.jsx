const AdminNavbar = () => {
  return (
    <>
      <section className="py-1 ">
        <div className="w-full h-full pb-1 border-b border-gray-600">
          <ul className="pr-2 text-sm capitalize text-gray-400 flex justify-around">
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-list"></i>Menu
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-list-nested"></i>Dashboard
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-clipboard2-data"></i>project
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-person"></i>Employee
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-file-check"></i>Attendence
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-shuffle"></i>Leave
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-cash-coin"></i>payroll
            </li>
            <li className="my-1 px-2 py-1 flex items-center gap-4 hover:bg-white/10 rounded-md cursor-pointer transition duration-300">
              <i className="bi text-xl bi-diagram-3  "></i>user roles
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default AdminNavbar;
