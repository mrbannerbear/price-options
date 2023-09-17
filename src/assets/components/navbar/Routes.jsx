const Routes = () => {
  const routes = [
    { id: 1, path: "/", description: "Home" },
    { id: 2, path: "/about", description: "About" },
    { id: 3, path: "/products", description: "Products" },
    { id: 4, path: "/contact", description: "Contact" },
    { id: 5, path: "/profile/:username", description: "Profile" },
  ];
  return (
    <>
      {routes.map((route) => (
        <li key={route.id}><a href={route.path}>{route.description}</a></li>
      ))}
    </>
  );
};

export default Routes;
