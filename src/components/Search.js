import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Search() {
  const language = useSelector((state) => state.setLanguage.language);
  const dispatch = useDispatch();

  const changeByFilter = (event) => {
    dispatch({ type: "SEARCH_NEWS", search: event.target.value });
  };

  return (
    <div className="item_center">
      <div
        className="row"
        style={{ justifyContent: "center", paddingTop: "5%" }}
      >
        <h2>
          Search top news from{" "}
          {language === "gb" ? "Great Britany" : "United States"} by term
        </h2>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", paddingTop: "5%" }}
      >
        <div
          className="inner-addon left-addon"
          style={{ alignSelf: "center", width: "50%" }}
        >
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={changeByFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
