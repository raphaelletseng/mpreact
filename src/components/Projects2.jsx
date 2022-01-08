import React from "react";
import Datallite from "../assets/projects/datallite.jpeg";
import Kyc from "../assets/projects/knowyourcompany.png";
import McgillAi from "../assets/projects/mcgillai.jpeg";
import McgillAiLearn from "../assets/projects/mcgillailearn.png";
import Typewriter from "typewriter-effect";
import Subtitle from './Subtitle.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import './projects2.css';
import Datallite2 from "../assets/datallite.png";
import Datallite3 from "../assets/projects/datallite.jpeg";
import Pytorch from "../assets/technologies/pytorch.png";

import Kyc2 from "../assets/projects/knowyourcompany.png";
import McGillAI from "../assets/projects/mcgillai.jpeg";
import McGillLearn from "../assets/projects/mcgillailearn.png";




function Projects2() {
  return (
    <section id="projects2">
      <div class="sec-title">

      <Subtitle subtitleColor = "#fff">Projects</Subtitle>

      </div>
      <div class="row">
        <div class="col">
          <ScrollAnimation animateIn="flipInY">
          <div className = "project-card">
            <h1> datallite </h1>
            <img src = {Datallite2} />
            <div className = "project-description">
              <p>
              Datallite is a CNN and map-based dashboard that utilises existing
              research done by the Stanford Sustainable Development and AI Lab to try
              and address the issues of data sparsity in developing regions.
              It uses publically available worldbank data, GRID3 Nigeria datasets, google maps satellite imagery,
              night time lights data, to predict development indicators like education expenditure
              that can better inform policies that impact social inequality.

              This project was built written in Python in Jupyter Notebooks, with PyTorch, and a demo website was built with React.

              It won the Concertation Montreal AI4Good Accelerator Award at the 2021 AI4Good Demo Day.
              </p>
            </div>
            <div className = "footer-container">
              <div class = "row">
              <div class = "link-col">
              <button><a href = "https://github.com/RayanAlim/Datallite">
                <i class="fab fa-github"></i>
              </a></button>
              <button><a href = "www.github.com/raphaelletseng">
                <i class="fab fa-github"></i>
              </a></button>
              </div>
              <div class = "tech-col">
                <img src = {Pytorch} className = "tech"/>
              </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>


        <div class="col">
          <ScrollAnimation animateIn="flipInY">
          <div className = "project-card">

            <img src = {Datallite3} className = "graphic"/>
            <div className = "links">
              <button><a href = "https://github.com/RayanAlim/Datallite">
                <i class="fab fa-github"></i>
              </a></button>
              <button><a href = "https://raphaelletseng.github.io/datallite-site/#home">
                <i class="fas fa-external-link-square-alt"></i>
              </a></button>
            </div>
            <div className = "project-description">
              <p>
              Datallite is a CNN and map-based dashboard that utilises existing
              research done by the Stanford Sustainable Development and AI Lab to try
              and address the issues of data sparsity in developing regions.
              It uses publically available worldbank data, GRID3 Nigeria datasets, google maps satellite imagery,
              night time lights data, to predict development indicators like education expenditure
              that can better inform policies that impact social inequality.

              This project was built written in Python in Jupyter Notebooks, with PyTorch, and a demo website was built with React.

              It won the Concertation Montreal AI4Good Accelerator Award at the 2021 AI4Good Demo Day.
              </p>
            </div>

            <div className = "technologies">
              <ul className = "tech-list">
                <li>Pytorch</li>
                <li>Python</li>
                <li>React</li>
              </ul>
            </div>

          </div>
          </ScrollAnimation>
        </div>

        <div class="col">
        <ScrollAnimation animateIn="flipInY">
          <div className = "project-card">
            <h1> DATALLITE </h1>
            <img src = {Datallite2}/>
            <div className = "links">
              <button><a href = "https://github.com/RayanAlim/Datallite">
                <i class="fab fa-github"></i>
              </a></button>
              <button><a href = "https://raphaelletseng.github.io/datallite-site/#home">
                <i class="fas fa-external-link-square-alt"></i>
              </a></button>
            </div>
            <div className = "project-description">
              <p>
              Datallite is a CNN and map-based dashboard that utilises existing
              research done by the Stanford Sustainable Development and AI Lab to try
              and address the issues of data sparsity in developing regions.
              It uses publically available worldbank data, GRID3 Nigeria datasets, google maps satellite imagery,
              night time lights data, to predict development indicators like education expenditure
              that can better inform policies that impact social inequality.

              This project was built written in Python in Jupyter Notebooks, with PyTorch, and a demo website was built with React.

              It won the Concertation Montreal AI4Good Accelerator Award at the 2021 AI4Good Demo Day.
              </p>
            </div>

            <div className = "technologies">
              <ul className = "tech-list">
                <li>Pytorch</li>
                <li>Python</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        </div>

      </div>
{/* ---------------------*/}
<div class="row">
  <div class="col">
    <ScrollAnimation animateIn="flipInY">
    <div className = "project-card">

      <img src = {Kyc2} />
      <div className = "project-description">
        <p>
        Datallite is a CNN and map-based dashboard that utilises existing
        research done by the Stanford Sustainable Development and AI Lab to try
        and address the issues of data sparsity in developing regions.
        It uses publically available worldbank data, GRID3 Nigeria datasets, google maps satellite imagery,
        night time lights data, to predict development indicators like education expenditure
        that can better inform policies that impact social inequality.

        This project was built written in Python in Jupyter Notebooks, with PyTorch, and a demo website was built with React.

        It won the Concertation Montreal AI4Good Accelerator Award at the 2021 AI4Good Demo Day.
        </p>
      </div>
      <div className = "footer-container">
        <div class = "row">
        <div class = "link-col">
        <button><a href = "https://github.com/RayanAlim/Datallite">
          <i class="fab fa-github"></i>
        </a></button>
        <button><a href = "www.github.com/raphaelletseng">
          <i class="fab fa-github"></i>
        </a></button>
        </div>
        <div class = "tech-col">
          <img src = {Pytorch} className = "tech"/>
        </div>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  </div>


  <div class="col">
    <ScrollAnimation animateIn="flipInY">
    <div className = "project-card">

      <img src = {McGillAI} className = "graphic"/>
      <div className = "links">
        <button><a href = "https://github.com/RayanAlim/Datallite">
          <i class="fab fa-github"></i>
        </a></button>
        <button><a href = "https://raphaelletseng.github.io/datallite-site/#home">
          <i class="fas fa-external-link-square-alt"></i>
        </a></button>
      </div>
      <div className = "project-description">
        <p>
        Datallite is a CNN and map-based dashboard that utilises existing
        research done by the Stanford Sustainable Development and AI Lab to try
        and address the issues of data sparsity in developing regions.
        It uses publically available worldbank data, GRID3 Nigeria datasets, google maps satellite imagery,
        night time lights data, to predict development indicators like education expenditure
        that can better inform policies that impact social inequality.

        This project was built written in Python in Jupyter Notebooks, with PyTorch, and a demo website was built with React.

        It won the Concertation Montreal AI4Good Accelerator Award at the 2021 AI4Good Demo Day.
        </p>
      </div>

      <div className = "technologies">
        <ul className = "tech-list">
          <li>Pytorch</li>
          <li>Python</li>
          <li>React</li>
        </ul>
      </div>

    </div>
    </ScrollAnimation>
  </div>

  <div class="col">
  <ScrollAnimation animateIn="flipInY">
    <div className = "project-card">

      <img src = {McGillLearn}/>
      <div className = "links">
        <button><a href = "https://github.com/RayanAlim/Datallite">
          <i class="fab fa-github"></i>
        </a></button>
        <button><a href = "https://raphaelletseng.github.io/datallite-site/#home">
          <i class="fas fa-external-link-square-alt"></i>
        </a></button>
      </div>
      <div className = "project-description">
        <p>
        Built a React web page for the 2021 McGill AI Learnathon,
        an undergraduate conference including 3 tracks of research talks by
        acclaimed AI researchers, hands-on workshops, and career fair sponsor
        presentations and panel discussions
        </p>
      </div>

      <div className = "technologies">
        <ul className = "tech-list">
          <li>Pytorch</li>
          <li>Python</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  </ScrollAnimation>
  </div>

</div>


    </section>
  );
}
export default Projects2;
