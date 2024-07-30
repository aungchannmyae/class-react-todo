import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductsProvider";

const ProductLists = ({  }) => {
  const {products} = useContext(ProductContext)
  return (
    <div className=" h-[430px]">
      {products.map(({ id, name, price, stock }) => (
        <div
          key={id}
          className=" flex justify-between items-center border py-3 mb-3 rounded"
        >
          <p>
            {name} <span>({stock})</span>
          </p>
          <p>{price}</p>
        </div>
      ))}
    </div>
    
  );
};

export default ProductLists;
