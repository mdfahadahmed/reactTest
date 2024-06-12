import PropTypes from 'prop-types';
import { useState } from "react";

const SearchCategory = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="templatecontainer">
      <div className="searchInput-container py-10 text-right pr-10">
        <input className="input border-2 border-black rounded w-[20%] px-5 py-5" id="searchInput" type="text" placeholder="Search here...." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
      </div>
      <div className='grid grid-cols-4 gap-5 p-10'>
        {products
          .filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return product;
            }
            return null;
          })
          .map((product) => {
            return (
              <div className="mb-5 py-8 flex flex-col border rounded hover:bg-[#f5f5f5] hover:border-[#000000]" key={product.id}>
                <img className="w-[100%] h-[400px]" src={product.thumbnail} alt="" />

                <div className='py-5 px-5 flex justify-between hover:bg-black hover:text-white'>
                    <h2 className='text-2xl font-bold'>Category: {product.title}</h2>
                    {/* <h2>Price: ${product.price}</h2> */}
                </div>
                <hr/>

                <div className='py-5 px-5 flex justify-between hover:bg-black hover:text-white'>
                    <h2>Category: {product.category}</h2>
                    <h2>Price: ${product.price}</h2>
                </div>
                <hr/>

                <div className='py-5 px-5 flex justify-between hover:bg-black hover:text-white'>
                    <h2>ID: {product.id}</h2>
                    <h2>Rating: {product.rating}</h2>
                </div>
                <hr/>

                <div className='py-5 px-5 flex justify-between hover:bg-black hover:text-white'>
                    <h2>Stock: {product.stock}</h2>
                    <h2>Brand: {product.brand}</h2>
                </div>
                <hr/>

                <div className='py-5 px-5 flex justify-between hover:bg-black hover:text-white'>
                    <h2>Sku: {product.sku}</h2>
                    <h2>Price: ${product.price}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

SearchCategory.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchCategory;
