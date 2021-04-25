import React from "react";
import SmallItem from "./SmallItem";

type Props = {
  items: any[];
};

const Items = ({ items }: Props) => (
  <div className="item-container">
    {items.map((item) => (
      <SmallItem
        key={item.id}
        name={item.name}
        id={item.id}
        picture={item.image_url}
        abv={item.abv}
      />
    ))}
  </div>
);

export default Items;
