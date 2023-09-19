import { Link } from "react-router-dom";

const Routes = () => {
  const routes = [
    { id: 1, path: "/", description: "Home" },
    { id: 2, path: "/about", description: "About" },
    { id: 3, path: "/users", description: "Users" },
    { id: 4, path: "/profile/:username", description: "Profile" },
  ];

  return (
    <>
      {routes.map((route) => (
        <li
          key={route.id}
          className= "hover:transition-all hover:scale-x-105 border-b md:border-none"
        >
          <Link to={route.path}>{route.description}</Link>
        </li>
      ))}
    </>
  );
};

export default Routes;
