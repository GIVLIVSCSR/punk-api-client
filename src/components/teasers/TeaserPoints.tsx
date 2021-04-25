import React from "react";
import Teaser from "./Teaser";

type Props = {
  content: string[];
  className?: string;
  bound: number;
};

const TeaserPoints = ({ bound, content, className = undefined }: Props) => {
  const items = content.map((item, id) => <li key={id}>{item}</li>);
  const collapse = (items: JSX.Element[]) => items.slice(0, bound);
  const makeList = (items: JSX.Element[]) => (
    <ul className={className}>{items}</ul>
  );

  const itemList =
    items.length > bound ? (
      <Teaser>
        {(teaser) => (teaser ? makeList(collapse(items)) : makeList(items))}
      </Teaser>
    ) : (
      items
    );

  return <React.Fragment>{itemList}</React.Fragment>;
};

export default TeaserPoints;
