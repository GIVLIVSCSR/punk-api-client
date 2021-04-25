import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_PLACEHOLDER } from "../../constants";

type Props = {
  name: string;
  id: string;
  picture: string | null;
  abv: string;
};

const SmallItem = ({ name, id, picture, abv }: Props) => (
  <div>
    <div className="image-container">
      <img
        className="image"
        src={picture ? picture : IMAGE_PLACEHOLDER}
        alt={name}
      />
    </div>
    <Link to={`/item/${id}`}>
      <h2>{name}</h2>
    </Link>
    <span>Abv: {abv}</span>
  </div>
);

export default SmallItem;
