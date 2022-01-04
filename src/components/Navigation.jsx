import React from "react";
import { NavLink } from "react-router-dom";
import "./layout.css";

function Navigation() {
  return (
    <section id="nav">
      <nav className="navbar navbar-expand">
        <div className=" container">
          <div class="navlinks">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/mpreact">
                  <i class="fas fa-home"></i>Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mpreact/cats">
                  <i class="fa fa-paw"></i>
                  Cats
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://raphaelletseng.github.io/art"
                >
                  <i class="fa fa-palette"></i>
                  Art
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://raphaelletseng.github.io/blog"
                >
                  <i class="fa fa-feather"></i>
                  Blog
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
