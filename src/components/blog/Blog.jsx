import React from "react";
import { Outlet } from "react-router-dom";
import {Footer} from '../';

function Blog() {
  return (
    <div id="blog">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 55 1440 190"><path fill="#edbe6e" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,144C672,107,768,85,864,74.7C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      <div class="container">
        <h1 className="text-center mt-5"> Cats! </h1>
        <Outlet />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 130"><path fill="#78d1cc" fill-opacity="1" d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,138.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <Footer/>

    </div>
  );
}

export default Blog;
