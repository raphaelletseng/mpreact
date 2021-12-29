import React from "react";
import {Link} from "react-router-dom";
import {Footer} from "../";
import Kido from '../../assets/Kido.png';
import Val from './blog-assets/valh1.jpeg';
import "../layout.css";

function Posts(){
  return (
    <div id = "posts">
      <div class = "container">
        <Link to="/blog/kido-baby">
          <div class = "row align-items-center">
            <div class = "col">
            <img
              class = "img-fluid rounded mb-4 mb-lg-0 shadow p-3 mb-5 bg-white "
              src = {Val}
              alt = "Val"
            />
            </div>

            <div class = "col-mb-5">
              <h1>Valentin </h1>
              <p> Valentin orange soft baby </p>
            </div>
          </div>
        </Link>

      </div>

    </div>
  )
}
export default Posts;
