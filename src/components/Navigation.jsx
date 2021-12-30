import React from "react";
import {NavLink} from "react-router-dom";
import './layout.css';


function Navigation (){
  return (
    <section id = "nav">
      <nav className = "navbar navbar-expand">
        <div className =" container">
        <div class = "navlinks">
        <ul className = "navbar-nav ml-auto">
          <li className = "nav-item">
            <NavLink className = "nav-link" to="/">
              <i class="fa fa-cat"></i>Home
            </NavLink>
          </li>
          <li className = "nav-item">
            <NavLink className = "nav-link" to="/blog">
              <i class="fa fa-feather"></i>
              Blog
            </NavLink>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href= "https://raphaelletseng.github.io/art">
              <i class="fa fa-palette"></i>
              Art
            </a>
          </li>
          <li className = "nav-item">
            <a className = "nav-link" href= "https://raphaelletseng.github.io/art">
              <i class="fa fa-paw"></i>
              Cats
            </a>
          </li>

        </ul>
      </div>
      </div>
      </nav>
    </section>
  );
}
export default Navigation;
