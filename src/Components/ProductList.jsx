import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorPage from "../assets/404-error.gif";

const ProductList = ({ itemslist }) => {
    if (!itemslist || !itemslist.products) {
        return (
            <div>
                <img src={ErrorPage} alt={ErrorPage} />
            </div>
        )
    }
    return (
        <div className='pb-10 flex flex-wrap justify-center items-center gap-10'>
            {itemslist.products.map((product, index) => (
                <div className="border flex flex-col rounded hover:bg-[#f5f5f5] hover:border-[#000000]" key={index}>
                <img className="w-[100%] h-[400px]" src={product.images[0]} alt={product.title} />
                <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                    <h4>Category Name: {product.category}</h4>
                    <h4>Price: ${product.price}</h4>
                </div>
                <hr />
                <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                    <h4>{product.title}</h4>
                    <h4>{product.id}</h4>
                </div>
                <hr />
                <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                    <h4>Status: {product.availabilityStatus}</h4>
                    <h4>Tag: {product.tags}</h4>
                </div>
                <hr />
                <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                    <h4>Rating: {product.rating}</h4>
                    <h4>Return Policy: {product.returnPolicy}</h4>
                </div>
                <hr />
                <div className="flex justify-between p-2 hover:bg-black hover:text-white">
                    <h4>In Stock: {product.stock}</h4>
                    <h4>Warranty: {product.warrantyInformation}</h4>
                </div>
                <div className="mt-6 mb-5 text-center justify-center" key={product.id}>
                    <Link className="text-lg font-bold text-white uppercase py-3 px-7 bg-black hover:bg-[#f68f3d]" to={`/products/${product.id}`}>View Details</Link>
                </div>
            </div>
            ))};
        </div>
    );
};

ProductList.propTypes = {
    itemslist: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired, 
                price: PropTypes.number.isRequired,
                Category: PropTypes.string,
                tag: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
};



export default ProductList;
