import React, {useState} from "react";
import "./artwork.css";
import Subtitle from "../Subtitle.jsx";
import { Footer } from "../";

import Gallery from "react-photo-gallery";
import Bs1 from "../../assets/artwork/ballet_study_1.jpg";
import Bs2 from "../../assets/artwork/ballet_study_2.jpg";
import Bs3 from "../../assets/artwork/ballet_study_3.jpg";
import Hp from "../../assets/artwork/homes-poster.png";
import Ido from "../../assets/artwork/identity_danny_O'Connor.PNG";
import Ip1 from "../../assets/artwork/identity_phase_1.jpg";
import Ip2 from "../../assets/artwork/identity_phase_2.jpg";
import Is1 from "../../assets/artwork/identity_study_1.5.jpg";
import Is2 from "../../assets/artwork/identity_study_2.jpg";
import Fg from "../../assets/artwork/portrait_study_Fabiola_Govare.PNG";
import Ss from "../../assets/artwork/portrait_study_sundsbo.jpg";





function Artwork(){
  return(
    <div id = "gallery">
    
      <div className="text-center mt-5">
      <Subtitle subtitleColor = "#2b2b2b">artwork</Subtitle>
      </div>
      <div class = "container">
        <div class = "row">


          <div class = "col-md-5 ">
          <img src = {Hp} alt = ""/>
          <img src = {Ido} alt = ""/>
          </div>
          <div class = "col-md col-6">
          <img src = {Ip2} alt = ""/>
          <img src = {Is1} alt = ""/>
          <img src = {Is2} alt = ""/>
          </div>
          <div class = "col-md col-6">
          <img src = {Bs1} alt = "ballet_study_1"/>
          <img src = {Bs2} alt = ""/>
          <img src = {Bs3} alt = ""/>
          </div>
        </div>
        <div class = "row">
          <div class = "col-md-7">
            <img src = {Ip1} alt = ""/>
          </div>
          <div class = "col-md">
            <img src = {Fg} alt = ""/>
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

      <Footer />
    </div>
  );
}
export default Artwork;
