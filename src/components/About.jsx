import React from "react";
import "./layout.css";
import Kido from "../assets/Kido.png";
import MeRocks from "../assets/me-rocks2.png";
import Typewriter from "typewriter-effect";
import Subtitle from './Subtitle.jsx';


function About() {
  return (
    <section id="about">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" src={MeRocks} alt="Me on rocks" />
          </div>
          <div class=" about-card">
            <div class="col">

              <Subtitle subtitleColor = "#054a7f">About Me</Subtitle>

              <p>
                It was a bright cold day in April, and the clocks were striking
                thirteen. Winston Smith, his chin nuzzled into his breast in an
                effort to escape the vile wind, slipped quickly through the
                glass doors of Victory Mansions, though not quickly enough to
                prevent a swirl of gritty dust from entering along with him.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
