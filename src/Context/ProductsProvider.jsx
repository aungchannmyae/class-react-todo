import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProduct] = useState([
        {
          id: 1,
          name: "Apple",
          price: 1.2,
          stock: 100,
        },
        {
          id: 2,
          name: "Banana",
          price: 0.5,
          stock: 200,
        },
        {
          id: 3,
          name: "Cherry",
          price: 2.5,
          stock: 150,
        },
        {
          id: 4,
          name: "Mango",
          price: 3.0,
          stock: 50,
        },
      ]);
      const addProduct = (newProduct) => {
        setProduct([...products, newProduct]);
      };
  return <ProductContext.Provider value={{products, addProduct}}>{children}</ProductContext.Provider>;
};

export default ProductsProvider;
