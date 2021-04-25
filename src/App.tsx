import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Tag from "./components/tag/Tag";
import TagBar from "./components/tag/TagBar";
import ItemDetails from "./components/items/ItemDetails";

const App = () => (
  <Provider store={store}>
    <Router>
      <TagBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/items/all" />
        </Route>
        <Route path="/item/:id">
          <ItemDetails />
        </Route>
        <Route path="/items/:tag">
          <Tag />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

render(<App />, document.getElementById("root"));
