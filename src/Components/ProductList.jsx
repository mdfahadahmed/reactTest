import PropTypes from 'prop-types';
import CardButton from '../Layout/Cardbutton';
import ProductImg from "../assets/React.webp";

const ProductList = ({ itemslist }) => {
    console.log(itemslist.products);


    if (!itemslist || !itemslist.products) {
        return <div>This product is not available.</div>;
    }

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            {itemslist.products.map((product, index) => (
                <div className="border flex flex-col" key={index}>
                <img className="w-[400px] h-[400px]" src={ProductImg} alt="avatar" />
                <div className="flex justify-between p-2">
                    <h4>Product Name: {product.title}</h4>
                    <h4>Price: ${product.price}</h4>
                </div>
                <hr />
                <div className="flex justify-between p-2">
                    <h4>Category Name: {product.Category}</h4>
                    <h4>Tag: {product.tag}</h4>
                </div>
                <hr />
                <div className="mt-6 mb-5 text-center justify-center">
                    <CardButton />
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

ProductList.defaultProps = {
    itemslist: { products: [] } 
};

export default ProductList;
