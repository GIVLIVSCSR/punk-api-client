import React from "react";

type Props = {
  isLoading: boolean | null;
  error: string | null;
  data: any[];
  children: JSX.Element;
};

const AsyncRender = ({ isLoading, error, data, children }: Props) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AsyncRender;
