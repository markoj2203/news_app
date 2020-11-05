import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function News() {
  const newsData = useSelector((state) => state.newsDetails.news);

  return (
    <div className="item_center" style={{ textAlign: "-webkit-center" }}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{newsData.title}</h5>
        </div>
        <img className="card-img-top" src={newsData.urlToImage} />
        <div className="card-body">{newsData.content}</div>
        <Link to="/" exact="true" style={{ float: "left" }}>
          {"<"}Back To List
        </Link>
      </div>
    </div>
  );
}

export default News;
