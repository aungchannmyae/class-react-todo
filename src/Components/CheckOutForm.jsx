import React, { useContext, useRef } from "react";
import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { GeneralContext } from "../Context/GeneralProvider";
import { ProductContext } from "../Context/ProductsProvider";
import { ItemContext } from "../Context/ItemsProvider";

const CheckOutForm = ({  }) => {
  const {products} = useContext(ProductContext)
  const {addItem} = useContext(ItemContext)

  const selectRef = useRef();
  const quantityRef = useRef();
  const formRef = useRef()

  const handleForm = (event) => {
    event.preventDefault();

    const currentProduct = products.find(
      (product) => product.id === parseInt(selectRef.current.value)
    );

    const id = Date.now();

    const quantity = parseInt(quantityRef.current.value);

    const cost = (quantity * currentProduct.price).toFixed(2);

    const newItem = {
      id,
      product: currentProduct,
      quantity,
      cost,
    };

    addItem(newItem)

    formRef.current.reset()

    // console.log(currentProduct);
    // console.log(selectRef.current.value);
    // console.log(quantityRef.current.value);
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleForm}
        className=" w-full mb-5 shadow-md border border-gray p-2 rounded-xl "
      >
        <div className=" grid grid-cols-5 gap-3 ">
          <div className=" col-span-2">
            <Label
              htmlFor="product-name"
              className=" mb-2 text-lg"
              value="Product Name"
            />
            <Select ref={selectRef} id="product-name" required>
              {products.map(({ id, name,stock }) => (
                <option value={id} key={id} className="flex justify-end" >
                  {name} (0 / {stock})
                </option>
              ))}
            </Select>
          </div>
          <div className=" col-span-2">
            <Label className=" mb-2 text-lg" value="Quantity" />
            <TextInput
              ref={quantityRef}
              id="product-quantity"
              type="number"
              required
            />
          </div>
          

          <Button
            className=" col-span-1 flex justify-center items-center"
            type="submit"
          >
            Buy
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
