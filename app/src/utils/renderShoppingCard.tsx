import React from "react";

import { ShoppingCard } from "../components/ShoppingCard";

interface IrenderMainCard {
  item: { id: number; name: string; price: string; quantity: number };
}

export function renderShoppingCard({ item }: IrenderMainCard) {
  return (
    <ShoppingCard
      name={item.name}
      price={item.price}
      quantity={item.quantity}
    />
  );
}
