import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Blog,
  Posts,
  Post,
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation/>
    <Routes>
    <Route path="/mpreact" element = {<Home />}/>
    <Route path="/mpreact/cats" element ={<Blog/>}>
      <Route path = "" element = {<Posts />}/>
      <Route path = ":postSlug" element={<Post/>}/>
    </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
