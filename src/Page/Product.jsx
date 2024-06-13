import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoddingPage from "../Components/Loading";


const Product = () => {

    const [product, setProduct] = useState(null);

    const {id} = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

   
    if ( product === null ) {
        return (
          <LoddingPage/>
        )
      }


    return (
        <div className="py-16 text-center justify-center items-center">
            <h1 className="text-black text-4xl capitalize font-bold text-center">Single Product</h1>
            <div className="items-center justify-center">
            <div className="flex justify-between items-center w-[85%]">
                <div className="w-[40%]">
                    <img src={product.images} alt="product" />
                </div>
                <div className="w-[40%]">
                    <h4 className="text-black text-start text-4xl font-bold font-mono capitalize  py-4">{product.title}</h4>
                    <hr />
                    <div className="py-4 flex justify-between">
                        <h4 className="text-black text-start text-2xl">Price: {product.price}</h4>
                        <h4 className="text-black text-start text-2xl">Category: {product.category}</h4>
                    </div>
                    <hr />
                    <div className="py-4 flex justify-between">
                        <h4 className="text-black text-start text-2xl">Id: {product.id}</h4>
                        <h4 className="text-black text-start text-2xl">Rating: {product.rating}</h4>
                        <h4 className="text-black text-start text-2xl">Stock: {product.stock}</h4>
                    </div>
                    <hr />
                    <div className="py-4 flex justify-between">
                        <h4 className="text-black text-start text-2xl">Brand: {product.brand}</h4>
                        <h4 className="text-black text-start text-2xl">Sku: {product.sku}</h4>
                    </div>
                    <hr />
                    <div className="py-4">
                        <h4 className="text-black text-start text-2xl">{product.shippingInformation}</h4>
                        <h4 className="text-black text-start text-2xl">{product.availabilityStatus}</h4>
                        <h4 className="text-black text-start text-2xl">{product.warrantyInformation}</h4>
                    </div>
                    <hr />
                    <div className="py-4">
                        <h4 className="text-black text-start text-base font-normal">{product.description}</h4>
                        <h4 className="text-[#11397F] text-start text-base font-normal">{product.thumbnail}</h4>
                    </div>
                </div>
                <hr />
            </div>
            </div>
        </div>
    );
};

export default Product;