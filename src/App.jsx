import Container from "./Components/Container";
import { Button, ButtonGroup, Label, TextInput } from "flowbite-react";
import MainHeading from "./Components/MainHeading";
import SubHeading from "./Components/SubHeading";
import Heading from "./Components/Heading";
import CheckOutForm from "./Components/CheckOutForm";
import CheckItemsList from "./Components/CheckItemsList";
import Footer from "./Components/Footer";
import Drawer from "./Components/Drawer";
import { useState } from "react";
import GeneralProvider from "./Context/GeneralProvider";
import ProductsProvider from "./Context/ProductsProvider";
import ItemsProvider from "./Context/ItemsProvider";

function App() {
  return (
    <GeneralProvider>
      <ProductsProvider>
        <ItemsProvider>
          <main className=" flex flex-col min-h-screen mx-auto">
            <Heading></Heading>
            <Container>
              <CheckOutForm></CheckOutForm>
              <CheckItemsList></CheckItemsList>
            </Container>
            <Footer></Footer>
            <Drawer></Drawer>
          </main>
        </ItemsProvider>
      </ProductsProvider>
    </GeneralProvider>
  );
}

export default App;
