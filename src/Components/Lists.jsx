import React, { useContext } from "react";
import { Button, Table } from "flowbite-react";
import { GeneralContext } from "../Context/GeneralProvider";
import { ItemContext } from "../Context/ItemsProvider";

const Lists = ({ item }) => {
  const { removeItem, updateQuantity } = useContext(ItemContext);
  const handleDelBtn = () => {
    if (confirm("Are You Sure To Delete?")) {
      removeItem(item.id);
    }
  };

  const addItemQuantity = () => {
    if (item.product.stock > item.quantity) {
      updateQuantity(item.id, 1);
    } else {
      alert("Full Of Stock.");
    }
  };

  const subItemQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, -1);
    } else {
      confirm("Are You Going to Remove this from List?") && removeItem(item.id);
    }
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.product.name}
      </Table.Cell>
      <Table.Cell className=" text-end">{item.product.price}</Table.Cell>
      <Table.Cell className=" justify-end items-center flex gap-2">
        <Button onClick={subItemQuantity} color="gray" size="xs">
          -
        </Button>
        {item.quantity}
        <Button onClick={addItemQuantity} color="gray" size="xs">
          +
        </Button>
      </Table.Cell>
      <Table.Cell className=" text-end">${item.cost}</Table.Cell>
      <Table.Cell>
        <a
          onClick={handleDelBtn}
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
  );
};

export default Lists;
