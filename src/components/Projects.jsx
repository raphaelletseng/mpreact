import React from "react";
import "./layout.css";
import Datallite from "../assets/projects/datallite.jpeg";
import Kyc from "../assets/projects/knowyourcompany.png";
import McgillAi from "../assets/projects/mcgillai.jpeg";
import McgillAiLearn from "../assets/projects/mcgillailearn.png";
import Typewriter from "typewriter-effect";
import Subtitle from './Subtitle.jsx';

function Projects() {
  return (
    <section id="projects">
      <div class="sec-title">
      <Subtitle subtitleColor = "#2b2b2b">Projects</Subtitle>
      </div>
      <div class="row">
        <div class="col">
          <div class="graphic-container">
            <a href="https://raphaelletseng.github.io/datallite-site/#home">
              <img src={Datallite} alt="Datallite" class="image" />
            </a>
            <div class="overlay">
              <div class="text"> Datallite Site</div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="graphic-container">
            <a href="https://mcgillai.com">
              <img src={McgillAi} alt="mcgillai" class="image" />
            </a>
            <div class="overlay">
              <div class="text"> McGill AI Site </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="graphic-container">
            <a href="https://github.com/cclin130/know_your_company">
              <img src={Kyc} alt="Know Your Company" class="image" />
            </a>
            <div class="overlay">
              <div class="text"> Know Your Company </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="graphic-container">
            <a href="https://mcgillailearn.com">
              <img src={McgillAiLearn} alt="McGill AI Learn" class="image" />
            </a>
            <div class="overlay">
              <div class="text"> McGill AI Learnathon </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
