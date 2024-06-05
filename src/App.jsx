import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";



function App() {
  const [itemslist, setItemslist] = useState([]);

  useEffect(() => {
      const productItem = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        // console.log(data)
        setItemslist(data);
      };
      productItem();
  }, []);

  return (
    <div>
      <Header />
      <div className="s py-24 px-3">
        <h3 className="text-black text-4xl capitalize font-bold text-center">
          Product List
        </h3>
        
        {itemslist ? (
          <ProductList itemslist={itemslist}/>
        ): (
          <h4>Item is Loadding....</h4>
        )}
        
        <div>
        </div>
        <div className="flex justify-center pt-10 items-center gap-8">

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
