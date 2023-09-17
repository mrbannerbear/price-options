import Routes from "./Routes";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-200 rounded-xl">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end pr-6">
        <ul className="flex flex-col md:flex-row gap-3 md:gap-5">
          <Routes></Routes>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
