import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import collapseDownImg from "../img/collapse_down.svg";
import { API_KEY } from "../api/API_KEY";

function Categories() {
  const language = useSelector((state) => state.setLanguage.language);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("entertainment");

  const dataCtegory = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const dispatch = useDispatch();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getDataByCategory = async (lang, category) => {
    const result = await axios(
      `https://newsapi.org/v2/top-headlines?country=${lang}&category=${category}&apiKey=${API_KEY}`
    );
    setData(result.data.articles.slice(0, 5));
    setCategory(category);
  };

  useEffect(async () => {
    getDataByCategory(language, category);
  }, [language, category]);

  return (
    <div>
      <div
        className="row"
        style={{
          justifyContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <h2>
          Top 5 News By Category From{" "}
          {language === "gb" ? "Great Britany" : "United States"}
        </h2>
      </div>
      <div className="accordion" id="accordionExample">
        {dataCtegory.map((cat, i) => (
          <div key={i} className="card">
            <div className="card-header" id={"heading" + i}>
              <h2 className="mb-0">
                <Link
                  onClick={() =>
                    dispatch({
                      type: "SELECT_CATEGORY",
                      category: cat,
                    })
                  }
                  to="/category"
                >
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    style={{ float: "left", width: "50%" }}
                  >
                    {capitalizeFirstLetter(cat)}
                  </button>
                </Link>
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  data-toggle="collapse"
                  data-target={"#collapse" + i}
                  aria-expanded="false"
                  aria-controls={"collapse" + i}
                  style={{ float: "left", width: "50%" }}
                  onClick={() => getDataByCategory(language, cat)}
                >
                  <img
                    src={collapseDownImg}
                    style={{ width: "20px", float: "right" }}
                  />
                </button>
              </h2>
            </div>
            <div
              id={"collapse" + i}
              className="collapse"
              aria-labelledby={"heading" + i}
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="row" style={{ overflowX: "auto" }}>
                  {data.map((item, i) => (
                    <div key={i} style={{ padding: "1%" }}>
                      <div
                        className="card"
                        style={{ width: "13rem", maxWidth: "13rem" }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                        </div>
                        <img className="card-img-top" src={item.urlToImage} />
                        <div className="card-body">
                          <Link
                            onClick={() =>
                              dispatch({
                                type: "NEWS_DETAILS",
                                news: item,
                              })
                            }
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
