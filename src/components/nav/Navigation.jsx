import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";


function Navigation() {
  return (
    <section id="nav">
      <nav className="navbar navbar-expand-lg">
        <div className=" container">
          <a className = "navbar-brand" href= "/mpreact">
            <i class="fas fa-home"></i>Raphaëlle Tseng
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
                <i class="fas fa-bars"></i>
              </span>
          </button>



          <div class="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/mpreact/artwork">
                <i class="fa fa-paw"></i>
                Artio
              </NavLink>
            </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/mpreact/cats">
                  <i class="fa fa-paw"></i>
                  Cats
                  <span class="sr-only">(current)</span>
                </NavLink>
              </li>*/}
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
