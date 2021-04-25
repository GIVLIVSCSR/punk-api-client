import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemData } from "../../actionCreators/getData";
import BigItem from "./BigItem";
import AsyncRender from "../AsyncRender";
import { useTypedSelector, useTypedDispatch } from "../../typedHooks";

const ItemDetails = () => {
  const { products, isLoading, error } = useTypedSelector(
    (state) => state.fetchedItems
  );

  const dispatch = useTypedDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getItemData(id));
  }, []);

  const [item] = products;

  return (
    <AsyncRender isLoading={isLoading} error={error} data={item}>
      <BigItem item={item} />
    </AsyncRender>
  );
};

export default ItemDetails;
