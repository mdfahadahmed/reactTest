const Menu = () => {
    const Navigation = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Services",
        path: "/services",
      },
      {
        name: "Portfolio",
        path: "/portfolio",
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ];
  
    return (
      <ul className="flex gap-4 items-center text-black font-bold font-mono text-lg uppercase">
        {Navigation.map((items, index) => (
          <li className="mr-2" key={index}>
            <a
              className="text-black uppercase hover:text-[#f68f3d] p-2"
              href={items.path}
            >
              {items.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Menu;
