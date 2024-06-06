import { Link } from "react-router-dom";

const Menu = () => {
  const Routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Category",
      path: "/category",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact", 
    },
  ];

  return (
    <ul className="flex gap-4 items-center text-black font-bold font-mono text-lg uppercase">
      {Routes.map((Route, index) => (
        <li className="mr-2" key={index}>
          <Link
            className="text-black uppercase hover:text-[#f68f3d] p-2"
            to={Route.path}
          >
            {Route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
