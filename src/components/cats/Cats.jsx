import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../";
import Kido from "./cat-assets/kido/Kido.jpg";
import Val from "./cat-assets/val/valh1.jpg";
import Reglisse from "./cat-assets/reglisse/regh1.jpg";
import "./cats.css";
import Subtitle from "../Subtitle";


function Cats() {
  return (
    <section id="cats">


      <div class="container">
        <div className="text-center mt-5">
        <Subtitle subtitleColor = "#2b2b2b">
          Cats I've Fostered!
        </Subtitle>
        </div>

        <div id="cats">

            <Link to="/cats/val">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <img
                    class="img-fluid rounded mb-4 mb-lg-0 shadow mb-5 bg-white "
                    src={Val}
                    alt="Val"
                  />
                </div>

                <div class="col-md-4 ">
                  <div className = "cat-text">
                  <Subtitle subtitleColor = "#2b2b2b">Valentin</Subtitle>
                  <p> Valentin orange soft baby </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/cats/kido">
              <div class="row align-items-center">


                <div class="col-md-4">
                  <div className = "cat-text">
                  <Subtitle subtitleColor = "#2b2b2b">Kido</Subtitle>
                  <p> Kido regal gremlin panther </p>
                  </div>
                </div>
                <div class="col-md-8 order-first order-md-last">
                  <img
                    class="img-fluid rounded mb-4 mb-lg-0 shadow mb-5 bg-white "
                    src={Kido}
                    alt="Kido"
                  />
                </div>
              </div>
            </Link>

            <Link to="/cats/reglisse">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <img
                    class="img-fluid rounded mb-4 mb-lg-0 shadow mb-5 bg-white "
                    src={Reglisse}
                    alt="Reglisse"
                  />
                </div>

                <div class="col-md-4">
                  <div className = "cat-text">
                  <Subtitle subtitleColor = "#2b2b2b">Réglisse</Subtitle>
                  <p> Réglisse wild flower bed snoozer </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

      </div>



      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 130">
        <path
          fill="#edbe6e"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,138.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <Footer />
    </section>
  );
}

export default Cats;
