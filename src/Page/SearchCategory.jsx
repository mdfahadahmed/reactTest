import PropTypes from 'prop-types';
import { useState } from "react";

const SearchCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="templatecontainer">
      <div className="searchInput-container py-10 text-right pr-10">
        <input className="input border-2 border-black rounded w-[20%] px-5 py-5" id="searchInput" type="text" placeholder="Search here...." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
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
