import React from "react";

import { ShoppingCard } from "../components/ShoppingCard";

interface IrenderMainCard {
  item: { name: string; price: string };
}

export function renderMainCard({ item }: IrenderMainCard) {
  return <ShoppingCard name={item.name} price={item.price} />;
}
