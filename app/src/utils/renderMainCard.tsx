import React from "react";

import { MainCard } from "../components/MainCard";

interface IrenderMainCard {
  item: { id: number; product: {}; name: string; price: string };
}

export function renderMainCard({ item }: IrenderMainCard) {
  return <MainCard product={item} name={item.name} price={item.price} />;
}
