import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;
