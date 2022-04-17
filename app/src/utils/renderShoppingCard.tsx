import React from "react";

import { ShoppingCard } from "../components/ShoppingCard";

interface IrenderMainCard {
  item: {
    id: number;
    name: string;
    price: string;
    stock: number;
    quantity: number;
  };
}

export function renderShoppingCard({ item }: IrenderMainCard) {
  return (
    <ShoppingCard
      id={item.id}
      name={item.name}
      price={item.price}
      stock={item.stock}
      quantity={item.quantity}
    />
  );
}
