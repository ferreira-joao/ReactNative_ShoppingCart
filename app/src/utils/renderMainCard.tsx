import React from "react";

import { MainCard } from "../components/MainCard";

interface IrenderMainCard {
  item: {
    id: number;
    product: {};
    name: string;
    stock: number;
    price: string;
  };
}

export function renderMainCard({ item }: IrenderMainCard) {
  return (
    <MainCard
      id={item.id}
      product={item}
      name={item.name}
      stock={item.stock}
      price={item.price}
    />
  );
}
