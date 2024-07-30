import React from "react";
import Container from "./Container";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Heading = () => {
  return (
    <div className=" mb-5">
      <Container>
        <MainHeading>React Project 2</MainHeading>
        <SubHeading>Invoice App</SubHeading>
      </Container>
    </div>
  );
};

export default Heading;
