import React from "react";
import { Outlet } from "react-router-dom";
import {Footer} from '../components';

function Blog() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Blog page</h1>
        <Outlet />
      </div>
      <div class="fixed-bottom">
      <Footer/>
      </div>
    </div>
  );
}

export default Blog;
