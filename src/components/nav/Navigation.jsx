import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";


function Navigation() {
  const [isActive, setActive] = useState(false)

  function closeMenu(){
    setActive(false)
  }

  return (
    <section id="nav">


      <nav className="navbar navbar-expand-lg">
        <div className=" container">
          <a className = "navbar-brand" href= "/mpreact">
            <i class="fas fa-home"></i>Raphaëlle Tseng
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
              <div id = "menu" class = "menu-btn">
                <div class= "menu-btn__burger"></div>
              </div>

              </span>

          </button>





          <div class="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ml-auto">


              <li className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" to="/cats">
                  <i class="fa fa-paw"></i>
                  Cats
                  <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to="/artwork">
                 <i class="fas fa-paint-brush"></i>
                 Art
               </NavLink>
             </li>
            {/*  <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://raphaelletseng.github.io/art"
                >
                  <i class="fa fa-palette"></i>
                  Art
                </a>
              </li>*/}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://raphaelletseng.github.io/blogposts"
                >
                  <i class="fa fa-feather"></i>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 250">
        <path
          fill="#edbe6e"
          fill-opacity="1"
          d="M0,224L120,218.7C240,213,480,203,720,208C960,213,1200,235,1320,245.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </section>

  );
}
export default Navigation;
