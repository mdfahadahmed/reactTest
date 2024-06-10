import CardButton from "../Layout/Cardbutton";
import ProductImg from "../assets/React.webp";


const ProductBox = ({brand, price, category, Tag }) => {
  return (
    <div className="border flex-col">
      <img className="w-[400px] h-[400px]" src={ProductImg} alt="avatar" />
      <div className="flex justify-between p-2">
        <h4>Brand Name : {brand}</h4>
        <h4>Price: ${price}</h4>
      </div>
      <hr />
      <div className="flex justify-between p-2">
          <h4>Category Name: {category}</h4>
          <h4>Tag: {Tag}</h4>
      </div>
      <hr />

      <div className="mt-6 mb-5 text-center">
        <CardButton/>
      </div>
    </div>
  );
};

export default ProductBox;