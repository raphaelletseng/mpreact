import React from "react";
import {NavLink} from "react-router-dom";
import './layout.css';


function Navigation (){
  return (
    <section id = "nav">
      <nav className = "navbar navbar-expand">
        <div className =" container">
          <NavLink className = "navbar-brand" to="/">
            <i class="fa fa-paw"></i>Home
          </NavLink>
        <div>
        <ul className = "navbar-nav ml-auto">
          <li className = "nav-item">
            <NavLink className = "nav-link" to="/blog">
              <i class="fa fa-feather"></i>
              Blog
            </NavLink>
          </li>

        </ul>
      </div>
      </div>
      </nav>
    </section>
  );
}
export default Navigation;
