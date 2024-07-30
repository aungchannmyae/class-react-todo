import React, { useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductLists from "./ProductLists";
import { GeneralContext } from "../Context/GeneralProvider";
import { ProductContext } from "../Context/ProductsProvider";

const Drawer = ({}) => {
  const { handleDrawer, isDrawerOpen } = useContext(GeneralContext);
  const { products, addProduct } = useContext(ProductContext);
  return (
    <div
      className={`w-[300px] z-50 shadow-md duration-300 fixed top-0 right-0 h-screen overflow-scroll bg-gray-200 ${
        isDrawerOpen && "translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        <header className="flex justify-between items-center mb-2">
          <h1 className=" text-xl font-bold">Product Names</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 w-7 h-7 rounded-lg border border-white flex justify-center items-center p-1"
            onClick={handleDrawer}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </header>
        <ProductLists></ProductLists>
        <AddProductForm></AddProductForm>
      </div>
    </div>
  );
};

export default Drawer;
