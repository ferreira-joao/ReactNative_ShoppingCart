import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext([]) as any;

interface IShoppingCartContext {
  children: any;
}

export const ShoppingCartContextProvider = ({
  children,
}: IShoppingCartContext) => {
  const [cart, setCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
