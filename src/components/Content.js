import React from "react";
import { Switch, Route } from "react-router-dom";
import TopNews from "./TopNews";
import Categories from "./Categories";
import Category from "./Category";
import News from "./News";

function Content() {
  return (
    <div className="row content bg-white p-3 justify-content-center">
      <div style={{ width: "100%" }}>
        <Switch>
          <Route path="/" exact>
            <TopNews />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/search">
            <TopNews />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Content;
