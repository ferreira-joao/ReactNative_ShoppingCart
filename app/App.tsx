import React from "react";

import { Home } from "./src/screens/Home";

import { ShoppingCartContextProvider } from "./src/contexts/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Home />
    </ShoppingCartContextProvider>
  );
}

export default App;
