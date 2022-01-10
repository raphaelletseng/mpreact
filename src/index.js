import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Cats,
  Posts,
  Val,
  Kido,
  Artwork,
} from "./components";

ReactDOM.render(
  <Router base>
    <Navigation />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/artwork" element={<Artwork />} />
      <Route path="/cats" element={<Cats />} />

      <Route path="/cats/val" element={<Val />} />
      <Route path="/cats/kido" element={<Kido />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
