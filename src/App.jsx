import { useEffect, useState } from "react";


import Home from "./Components/Home";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setItems(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header/>
        <div className="s py-24 px-3">
          <h3 className="text-black text-4xl capitalize font-bold text-center">Product List</h3>
          <div>
            ..
          </div>
          <div className="flex justify-center pt-10 items-center gap-8">
            <Home/>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default App
