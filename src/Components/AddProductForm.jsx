import React, { useContext, useRef } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import SubHeading from "./SubHeading";
import { ProductContext } from "../Context/ProductsProvider";

const AddProductForm = ({  }) => {
  const {addProduct} = useContext(ProductContext)
  const formRef = useRef();
  const newProductRef = useRef();
  const newProductPriceRef = useRef();
  const newProductStockRef = useRef();
  const handleAddProduct = (event) => {
    event.preventDefault();
    // const formData = new FormData(formRef.current);
    const newProduct = {
      id: Date.now(),
      name: newProductRef.current.value,
      price: parseFloat(newProductPriceRef.current.value),
      stock: parseFloat(newProductStockRef.current.value),

      // id: Date.now(),
      // name: formData.get("product-name"),
      // price: parseFloat(formData.get("product-price")),
      // stock: parseFloat(formData.get("product-stock")),
    };
    addProduct(newProduct);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="flex flex-col">
      <SubHeading>Add More Products.</SubHeading>
      <div className="grid grid-cols-3 gap-2">
        <div className=" col-span-3 ">
          {/* <Label className=" mb-1 text-md" value="Product Names" /> */}
          <TextInput
          ref={newProductRef}
            placeholder="Product Name"
            id="product-name"
            name="product-name"
            type="Text"
            required
          />
        </div>
        <div className=" col-span-2">
          {/* <Label className=" mb-1 text-md" value="Price" /> */}
          <TextInput
          ref={newProductPriceRef}
            placeholder="Price"
            id="product-price"
            name="product-price"
            type="number"
            required
          />
        </div>

        <Button
          onClick={handleAddProduct}
          className=" row-span-2 col-span-1 justify-center items-center"
          type="submit"
        >
          Submit
        </Button>
        <div className=" col-span-2">
          {/* <Label className=" mb-1 text-md" value="Quantity" /> */}
          <TextInput
          ref={newProductStockRef}
            placeholder="Quantity"
            id="product-stock"
            name="product-stock"
            type="number"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
