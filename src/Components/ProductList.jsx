import ProductBox from "./ProductBox";
const ProductList ({ Items }) => {
    return (
        <div>
            {Items.map((Product) => (
            <ProductBox key={Product.id} />
            ))}
        </div>
      )
}

export default ProductList;





// export default function ProductList() {
//   return (
//     <div>
//       <ProductBox key={product.id} />
//     </div>
//   )
// }
