import React, { useState } from "react";

type Props = {
  children: (arg0: boolean) => JSX.Element[] | JSX.Element;
  className?: string;
};

const Teaser = ({ children, className = undefined }: Props) => {
  const [teaser, setTeaser] = useState<boolean>(true);
  const showFull = () => {
    setTeaser(false);
  };

  return (
    <React.Fragment>
      {children(teaser)}
      {teaser && (
        <button
          onClick={showFull}
          className={className}
          style={{ cursor: "pointer" }}
        >
          See more
        </button>
      )}
    </React.Fragment>
  );
};

export default Teaser;
