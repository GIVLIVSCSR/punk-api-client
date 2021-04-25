import React from "react";
import TeaserText from "../teasers/TeaserText";
import TeaserPonts from "../teasers/TeaserPoints";
import { CONTENT_LENGTH, IMAGE_PLACEHOLDER } from "../../constants";

type Props = {
  item: {
    image_url: string | null;
    name: string;
    tagline: string;
    abv: string;
    description: string;
    food_pairing: string[];
  };
};

const BigItem = ({ item }: Props) => (
  <div className="detail-container">
    <div className="image-container">
      <img
        className="image"
        src={item.image_url ? item.image_url : IMAGE_PLACEHOLDER}
        alt={item.name}
      />
    </div>
    <h1>{item.name}</h1>
    <p>{item.tagline}</p>
    <span>Abv: {item.abv}</span>
    <TeaserText content={item.description} bound={CONTENT_LENGTH.text} />
    <h3>Food Pairing</h3>
    <TeaserPonts
      className="food-container"
      content={item.food_pairing}
      bound={CONTENT_LENGTH.listItems}
    />
  </div>
);

export default BigItem;
