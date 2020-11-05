import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("/");
  const language = useSelector((state) => state.setLanguage.language);
  const path = useSelector((state) => state.setPath.path);
  const newLocal = "enableClick";
  const disableAttr =
    window.location.pathname === "/news" ? "disableClick" : newLocal;

  useEffect(() => {
    dispatch({
      type: "SELECT_LANGUAGE",
      language: "gb",
    });
  }, []);

  const handleClick = (path) => {
    dispatch({
      type: "SELECT_PATH",
      path: path,
    });

    setActive(path);
  };

  return (
    <div
      className="row header bg-light p-3 justify-content-center"
      style={{ height: "30%" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100%" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{ width: "80%" }}>
            <li
              onClick={() => handleClick("/")}
              className={active === "/" ? "nav-item activeClass" : "nav-item"}
              style={{ padding: "2%" }}
            >
              <Link
                className="nav-link"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Top News <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              onClick={() => handleClick("categories")}
              className={
                active === "categories" ? "nav-item activeClass" : "nav-item"
              }
              style={{ padding: "2%" }}
            >
              <Link
                className="nav-link"
                to="/categories"
                style={{ textDecoration: "none" }}
              >
                Categories
              </Link>
            </li>
            <li
              onClick={() => handleClick("search")}
              className={
                active === "search" ? "nav-item activeClass" : "nav-item"
              }
              style={{ padding: "2%" }}
            >
              <Link
                className="nav-link"
                to="/search"
                style={{ textDecoration: "none" }}
              >
                Search
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto" style={{ width: "20%" }}>
            <li
              className={
                language === "gb"
                  ? `nav-item activeClass ${disableAttr}`
                  : `nav-item ${disableAttr}`
              }
              style={{ padding: "2%" }}
            >
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch({
                    type: "SELECT_LANGUAGE",
                    language: "gb",
                  })
                }
              >
                <span>GB</span>
              </div>
            </li>
            <li
              className={
                language === "us"
                  ? `nav-item activeClass ${disableAttr}`
                  : `nav-item ${disableAttr}`
              }
              style={{ padding: "2%" }}
            >
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() =>
                  dispatch({
                    type: "SELECT_LANGUAGE",
                    language: "us",
                  })
                }
              >
                <span>US</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
