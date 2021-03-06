import React from "react";
import "./layout.css";
import MeRocks from "../assets/me-rocks2.png";
import Typewriter from "typewriter-effect";
import Subtitle from './Subtitle.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

function About() {
  return (
    <section id="about">
      <div class="container text-center">
        <div class="row">
          <div class="col-md">
          <ScrollAnimation animateIn="fadeInLeft">
            <img class="img-fluid" src={MeRocks} alt="Me on rocks" />
            </ScrollAnimation>
          </div>

            <div class="col-md">
            <ScrollAnimation animateIn="fadeInRight">
            <div class=" about-card">

              <Subtitle subtitleColor = "#032B4A">About Me</Subtitle>

              <p> I'm Raph! I am currently an Associate Consultant at <a href ="https://www.slalom.com/"> Slalom</a>, Montreal, Canada,
              where I work in data and analytics. In my free time I like to code.
              I have a degree in Mathematics and Computer Science from McGill University.
              <br/>
              <br/>
              I drink gallons of tea, thrive in warm weather, and enjoy rock climbing.
              I have a soft spot for cats and occasionally foster for the <a href="https://www.spca.com/en/">SPCA</a>.
              </p>

            </div>
            </ScrollAnimation>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
