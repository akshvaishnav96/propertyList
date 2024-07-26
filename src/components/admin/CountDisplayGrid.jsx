import React from "react";
import { v4 as uuidV4 } from "uuid";

import CountDisplayGridItem from "./CountDisplayGridItems";
export default function CountDisplayGrid() {
  const data = [
    { src: "/svg/Visitors.svg", text: "visitore", count: 1232 },
    { src: "/svg/Order.svg", text: "orders", count: 555 },
    { src: "/svg/Sales.svg", text: "sales", count: 120 },
    { src: "/svg/Balance.svg", text: "balalnce", count: 1890 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      {data.map((item) => (
        <CountDisplayGridItem
          key={uuidV4()}
          src={item.src}
          text={item.text}
          count={item.count}
        />
      ))}
    </div>
  );
}
