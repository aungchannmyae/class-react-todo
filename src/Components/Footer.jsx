import { Button } from "flowbite-react";
import React, { useContext } from "react";
import Container from "./Container";
import { GeneralContext } from "../Context/GeneralProvider";

const Footer = ({ children }) => {
  const{handleDrawer} = useContext(GeneralContext)
  return (
    <footer className=" mt-auto mb-2">
      <Container>
        <div className="flex justify-end items-center gap-2">
          <Button color="light" onClick={handleDrawer}>
            Manage Inventory
          </Button>
          <Button>Print</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
