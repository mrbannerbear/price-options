import { useState } from "react";
import Routes from "./Routes";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBarClick = () => {
    setMenuBar(!menuBar);
  };
  return (
    <nav className="navbar bg-base-200 p-3 md:px-12 md:py-5">
      <div className="navbar-start pl-4">
        <a
          className="normal-case text-xl font-bold"
          style={{ fontFamily: "sans-serif" }}
        >
          Price Options
        </a>
      </div>
      <div className="navbar-end pr-6">
        <button
          onClick={handleMenuBarClick}
          className= "md:hidden btn focus:ring-0 focus:transition-all focus:scale-105 relative"
        >
          {menuBar === true ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
        <ul className="hidden md:flex gap-5">
          <Routes></Routes>
        </ul>
        {menuBar === true && (
          <ul className="md:hidden absolute top-[60px] bg-base-200 shadow-sm border p-3 rounded-xl text-sm">
            <Routes></Routes>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
