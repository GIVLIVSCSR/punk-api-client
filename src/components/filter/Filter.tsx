import React from "react";
import { useParams } from "react-router-dom";
import Items from "../items/Items";
import { filterItems } from "../../utils/filters";

type Props = {
  items: any[];
};

const Filter = ({ items }: Props) => {
  const { filter } = useParams<{ filter: string }>();
  const filteredItems = filterItems(items, filter);

  return (
    <div>
      <Items items={filteredItems} />
    </div>
  );
};

export default Filter;
