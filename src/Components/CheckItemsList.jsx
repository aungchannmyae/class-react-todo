import React, { useContext } from "react";
import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import Lists from "./Lists";
import { GeneralContext } from "../Context/GeneralProvider";
import { ItemContext } from "../Context/ItemsProvider";

const CheckItemsList = ({}) => {
  const { items } = useContext(ItemContext);
  const totalCost = items.reduce((pv, cv) => pv + parseFloat(cv.cost), 0);
  return (
    <div className="overflow-x-auto border border-gray rounded-xl shadow-md">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className=" text-end">Price</Table.HeadCell>
          <Table.HeadCell className=" text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className=" text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <Lists item={item} key={item.id}></Lists>
          ))}

          {items.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white"
              >
                There Is NO Record.
              </TableCell>
            </TableRow>
          )}

          <TableRow>
            <TableCell colSpan={3} className=" text-end">
              Total
            </TableCell>
            <TableCell className=" text-end">
              $ {totalCost.toFixed(2)}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CheckItemsList;
