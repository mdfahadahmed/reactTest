import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import LoadingPage from "./Layout//Loading";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
  const [itemslist, setItemslist] = useState(null);
  // const [count, setCount] = useState(0)

  useEffect(() => {
      const productItem = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
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

        <div className="justify-center items-center">
        {itemslist ? (
          <ProductList itemslist={itemslist}/>
        ): (

          <LoadingPage/>
          
        )}
        </div>
        
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
