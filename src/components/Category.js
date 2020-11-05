import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../api/API_KEY";

function Category() {
  const [data, setData] = useState([]);

  const language = useSelector((state) => state.setLanguage.language);
  const category = useSelector((state) => state.selectCategory.category);

  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await axios(
      `https://newsapi.org/v2/top-headlines?country=${language}&category=${category}&apiKey=${API_KEY}`
    );
    setData(result.data.articles);
  }, [language]);

  return (
    <div className="item_center">
      <div
        className="row"
        style={{
          justifyContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <h2>
          Top {category} news from{" "}
          {language === "gb" ? "Great Britany" : "United States"}
        </h2>
      </div>

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
  );
}

export default Category;
