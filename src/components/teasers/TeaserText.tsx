import React from "react";
import Teaser from "./Teaser";

type Props = {
  content: string;
  className?: string;
  bound: number;
};

const TeaserText = ({ bound, content, className = undefined }: Props) => {
  const text =
    content.length > bound ? (
      <Teaser>
        {(teaser) => (
          <p className={className}>
            {teaser ? `${content.substring(0, bound)}...` : content}
          </p>
        )}
      </Teaser>
    ) : (
      <p className={className}>{content}</p>
    );

  return <React.Fragment>{text}</React.Fragment>;
};

export default TeaserText;
