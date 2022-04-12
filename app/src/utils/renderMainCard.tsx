import React from "react";

import { MainCard } from "../components/MainCard";

interface IrenderMainCard {
  item: {
    id: number;
    product: {};
    name: string;
    quantity: number;
    price: string;
  };
}

export function renderMainCard({ item }: IrenderMainCard) {
  return (
    <MainCard
      product={item}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
    />
  );
}
