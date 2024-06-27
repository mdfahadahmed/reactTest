import { useEffect, useState } from "react";
import LoadingGif from "../Components/LoadingGif";
import ProductList from "../Components/ProductList";


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
      
        </div>

      <div className="root1 pt-10">
        <div className="justify-center items-center">
        {itemslist ? (
          <ProductList itemslist={itemslist}/>
        ): (

          <LoadingGif/>
          
          
        )}
        </div>

       
        
      </div>
    </div>
  );
}




export default Home;
