import React from "react";
import SelectLink from "../SelectLink";
import { FILTERS } from "../../constants";

type Props = {
  url: string;
};

const FilterBar = ({ url }: Props) => (
  <div className="filterbar-container">
    <SelectLink to={`${url}/${FILTERS.abv.asc}`}>Abv ascending</SelectLink>
    <SelectLink to={`${url}/${FILTERS.abv.desc}`}>Abv descending</SelectLink>
    <SelectLink to={`${url}/${FILTERS.name.asc}`}>Name ascending</SelectLink>
    <SelectLink to={`${url}/${FILTERS.name.desc}`}>Name descending</SelectLink>
  </div>
);

export default FilterBar;
