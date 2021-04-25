import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  children: string;
};

const SelectLink = ({ to, children }: Props) => (
  <NavLink className="tag-link" activeClassName="tag-link--active" to={to}>
    {children}
  </NavLink>
);

export default SelectLink;
