import { useEffect, useState } from "react";
import LoadingPage from "../Components/Loading";
import ProductList from "../Components/ProductList";
import SearchCategory from "../Page/SearchCategory";


function Home() {

  const [itemslist, setItemslist] = useState(null);

  useEffect(() => {
      const productItem = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setItemslist(data);
      };
      productItem();
  }, []);


  return (
    <div className="pt-10">
        <div>
          <h3 className="text-black text-4xl capitalize font-bold text-center">
            Product List
          </h3>
          <div>
            {itemslist ? <SearchCategory products={itemslist.products} /> : <LoadingPage />}
          </div>
        </div>

      <div className="root1">
        <div className="justify-center items-center">
        {itemslist ? (
          <ProductList itemslist={itemslist}/>
        ): (

          <LoadingPage/>
          
        )}
        </div>

        <div></div>
        
      </div>
    </div>
  );
}




export default Home;
