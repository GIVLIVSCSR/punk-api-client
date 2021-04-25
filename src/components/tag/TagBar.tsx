import React from "react";
import SelectLink from "./../SelectLink";
import { TAGS } from "../../constants";

const TagBar = () => (
  <div>
    <div className="tagbar-container">
      <SelectLink to={`/items/${TAGS.all}`}>All</SelectLink>
      <SelectLink to={`/items/${TAGS.withPizza}`}>With pizza</SelectLink>
      <SelectLink to={`/items/${TAGS.withSteak}`}>With steak</SelectLink>
    </div>
    <hr />
  </div>
);

export default TagBar;
