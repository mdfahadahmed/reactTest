import ProductImg from "../assets/React.webp";
import CardButton from "../Layout/Cardbutton";


function ProductBox() {
  return (
    <div className="border flex flex-col">
      <img className="w-[400px] h-[400px]" src={ProductImg} alt="avatar" />
      <div className="flex justify-between p-2">
        <h4>Product Name :</h4>
        <h4>Price : $65</h4>
      </div>
      <hr />
      <div className="flex justify-between p-2">
        <h4>Cat Name</h4>
        <h4>Tag</h4>
      </div>
      <hr />

      <div className="mt-6 mb-5 text-center justify-center">
        <CardButton/>
      </div>
    </div>
  )
}

export default ProductBox;
