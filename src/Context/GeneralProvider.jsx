import React, { createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralProvider = ({ children }) => {

  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    // console.log(isDrawerOpen);
  };

  return (
    <GeneralContext.Provider
      value={{ handleDrawer, isDrawerOpen }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
