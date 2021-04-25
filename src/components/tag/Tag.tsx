import React, { useEffect } from "react";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { chooseTag } from "../../actionCreators/getData";
import Items from "../items/Items";
import Filter from "../filter/Filter";
import FilterBar from "../filter/FilterBar";
import { useTypedSelector, useTypedDispatch } from "../../typedHooks";
import AsyncRender from "../AsyncRender";

const Tag = () => {
  const { products, isLoading, error } = useTypedSelector(
    (state) => state.fetchedItems
  );

  const dispatch = useTypedDispatch();
  const { tag } = useParams<{ tag: string }>();
  const { path, url } = useRouteMatch<{ path: string; url: string }>();

  useEffect(() => {
    dispatch(chooseTag(tag));
  }, [tag]);

  return (
    <div>
      <FilterBar url={url} />
      <AsyncRender isLoading={isLoading} error={error} data={products}>
        <Switch>
          <Route exact path={path}>
            <Items items={products} />
          </Route>
          <Route path={`${path}/:filter`}>
            <Filter items={products} />
          </Route>
        </Switch>
      </AsyncRender>
    </div>
  );
};

export default Tag;
