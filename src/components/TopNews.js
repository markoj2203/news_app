import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import { API_KEY } from "../api/API_KEY";

function TopNews() {
  const [data, setData] = useState([]);
  const path = useSelector((state) => state.setPath.path);
  const searchTerm = useSelector((state) => state.searchNews.search);
  let language = useSelector((state) => state.setLanguage.language);
  if (language === "" || language === undefined) {
    language = "gb";
  }
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=${language}&apiKey=${API_KEY}`
  );

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch({
      type: "NEWS_DETAILS",
      news: item,
    });

    dispatch({
      type: "SELECT_PATH",
      path: "news",
    });
  };

  useEffect(async () => {
    if (searchTerm === " " || searchTerm === "") {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=${language}&apiKey=${API_KEY}`
      );
    } else {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=${language}&q=${searchTerm}&apiKey=${API_KEY}`
      );
    }
    const result = await axios(url);

    setData(result.data.articles);
  }, [searchTerm]);

  useEffect(async () => {
    if (path !== "search") {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=${language}&apiKey=${API_KEY}`
      );
      setData(result.data.articles);
    }
  }, [language]);

  return (
    <div>
      {path === "search" ? (
        <Search />
      ) : (
        <div
          className="row"
          style={{ justifyContent: "center", paddingTop: "5%" }}
        >
          <h2>
            Top news from{" "}
            {language === "gb" ? "Great Britany" : "United States"}
          </h2>
        </div>
      )}

      <div
        className="row"
        style={{ justifyContent: "center", paddingTop: "5%" }}
      >
        {data.map((item, i) => (
          <div key={i} style={{ padding: "2%" }}>
            <div className="card" style={{ width: "16rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <img className="card-img-top" src={item.urlToImage} />
              <div className="card-body">
                <Link
                  onClick={() => handleClick(item)}
                  to="/news"
                  style={{ float: "right" }}
                >
                  More {">"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopNews;
