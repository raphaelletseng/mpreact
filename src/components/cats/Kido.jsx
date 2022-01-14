import React, { useEffect } from "react";
import { Footer } from "../";
import Subtitle from "../Subtitle";

import { useParams } from "react-router";
import Kido1 from "./cat-assets/kido/kido1.jpg";
import Kido2 from "./cat-assets/kido/kido2.jpg";
import Kido3 from "./cat-assets/kido/kido3.jpg";
import Kido4 from "./cat-assets/kido/kido4.jpg";

function Kido() {

  return (
    <div className="home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 105">
      <path
        fill="#edbf65"
        fill-opacity="1"
        d="M0,224L120,218.7C240,213,480,203,720,208C960,213,1200,235,1320,245.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
      <div class="container">
        <Subtitle subtitleColor="#2b2b2b">Kido panther</Subtitle>

        <p> Pictures of Kido </p>

        <div class="row">
          <div class="col">
            <img class="img-fluid rounded mb-4 " src={Kido3} alt="valh1" />
            <img class="img-fluid rounded mb-4 " src={Kido2} alt="valv1" />
          </div>
          <div class="col">
            <img class="img-fluid rounded mb-4 " src={Kido1} alt="valv2" />
            <img class="img-fluid rounded mb-4 " src={Kido4} alt="valh2" />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 130">
        <path
          fill="#edbe6e"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,240C640,224,800,160,960,138.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
        <Footer/>
    </div>

  );
}
export default Kido;
