import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Home, Cats, Posts, Val, Artwork } from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/mpreact" element={<Home />} />
      <Route path="/mpreact/artwork" element={<Artwork />} />
      <Route path="/mpreact/cats" element={<Cats />} />

      <Route path="/mpreact/cats/val" element={<Val />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
