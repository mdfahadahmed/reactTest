import { Link } from "react-router-dom";
import CardButton from "../Layout/Cardbutton";

const CostomCategory = ({categoryProducts, categoryName}) => {

    const items = categoryProducts

  return (
    <>
        <div>
            <h2 className="py-5 text-center font-bold text-black text-3xl capitalize">{categoryName}</h2>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full px-6 py-10">
            {items.products.map((product, index) => (
                <div className="border flex flex-col rounded hover:bg-[#f5f5f5] hover:border-[#000000] py-6 px-6" key={index}>
                    <h3 className="text-black text-center text-3xl font-bold font-serif capitalize  py-4 hover:text-[#f68f3d]">{product.title}</h3>
                    <div className="image w-full m-auto flex justify-center">
                        <img className="rounded max-w-[40%]" src= {product.images[0]} alt="Product Image" />
                    </div>

                    <div className="gap-3">
                        <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                            <h2 className="text-start text-2xl">Brand: {product.brand}</h2>
                            <h2 className="text-start text-2xl">Price: {product.price}</h2>
                        </div>
                        <hr/>
                        <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                            <h2 className="text-start text-2xl">Warranty: {product.warrantyInformation}</h2>
                            <h2 className="text-start text-lg">Overall Rating: {product.rating}</h2>
                        </div>

                        <div className="mt-6 mb-5 text-center justify-center" key={product.id}>
                        <Link to={`/products/${product.id}`}><CardButton /></Link>
                        </div>  
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default CostomCategory;