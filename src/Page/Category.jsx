import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const Category = () => {

    const [allCategory, setAllCategory] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const categoryItem = async  ()=> {
        const tenda = await fetch('https://dummyjson.com/products/categories');
        const categoryData = await tenda.json();
        setAllCategory(categoryData)
        setLoading(false)
      };
      categoryItem();
    },[]);

    console.log(allCategory)

  return ( 
    <>
    {loading ? (<Loading/>) : (
      
      <div>
        <h2 className="py-5 text-center font-bold text-black text-3xl">All category</h2>
      <div className="grid grid-cols-4 gap-5 p-10">
        
        {allCategory && allCategory.map((item, index) => (
          
          <Link key={index} to={`/all-category/${item.slug}`}>
            <div className="py-5 px-3 bg-[#f5f5f5] rounded-md w-[100%] flex align-middle justify-center" >
            <h2 className="text-center align-middle text-lg font-bold text-black hover:text-[#f68f3d]">{item.name}</h2>
          </div></Link> 

        ) ) }

      </div>
      </div>
    )}
    </>
  )
}

export default Category;