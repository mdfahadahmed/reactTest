import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../Components/Loading";
import CostomCategory from "../Page/CostomCategory";

const SingleCategory = () => {

    const {singleCategory} = useParams()

    console.log(singleCategory)

    const [category, setCategory] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect( () => {
        const getSingleCat = async () => {
            const CategoryItem = await fetch(`https://dummyjson.com/products/category/${singleCategory}`);
            const Data = await CategoryItem.json();
            setCategory(Data);
            setLoading(false)
        }

        console.log(category)

        getSingleCat()
    }, [])

  return (
    <>
      {Loading ? (<LoadingPage/>) : (
        <CostomCategory categoryProducts = {category} categoryName = {singleCategory}/>
      )}
    </>
  )
}

export default SingleCategory