import React from "react";

import { MainCard } from "../components/MainCard";

interface IrenderMainCard {
  item: { id: number; name: string; price: string };
}

export function renderMainCard({ item }: IrenderMainCard) {
  return <MainCard name={item.name} price={item.price} />;
}
