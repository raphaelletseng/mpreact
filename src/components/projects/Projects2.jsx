import React from "react";
import Datallite from "../../assets/projects/datallite.jpeg";
import Kyc from "../../assets/projects/knowyourcompany.png";
import McgillAi from "../../assets/projects/mcgillai.jpeg";
import McgillAiLearn from "../../assets/projects/mcgillailearn.png";
import Typewriter from "typewriter-effect";
import Subtitle from '../Subtitle.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import './projects2.css';
import Datallite2 from "../../assets/datallite.png";
import Datallite3 from "../../assets/projects/datallite.jpeg";
import Pytorch from "../../assets/technologies/pytorch.png";

import Kyc2 from "../../assets/projects/kyc.png";
import McGillAI from "../../assets/projects/mcgillai.jpeg";
import McGillLearn from "../../assets/projects/mcgillailearn.png";
import FairPrivate from "../../assets/projects/fairlearn-privacy.png";



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

            <img src = {Datallite3} className = "graphic"/>
            <div className = "links">
              <button><a href = "https://github.com/RayanAlim/Datallite" target = "_blank" rel="noreferrer noopener">
                {/*}<i class="fab fa-github"></i>*/}
                code

              </a></button>
              <button><a href = "https://raphaelletseng.github.io/datallite-site/#home" target = "_blank" rel="noreferrer noopener">
                site
              </a></button>
            </div>
            <div className = "project-description">
              <p className = "sub-p">
              Datallite | Summer 2021 | <a href = "https://www.ai4goodlab.com/post/2021-ai-prototypes"
              title = "AI4GoodLab prototypes" target = "_blank" rel="noreferrer noopener">
              Winner of the AI4Good Lab Montreal Accelerator Award (CMTL) </a>
              </p>
              <p>

              A machine learning project that builds on existing
              research done by the <a href = "http://sustain.stanford.edu/predicting-poverty"
               target = "_blank" rel="noreferrer noopener">Stanford Sustainable Development and AI Lab</a>. We try to
              address the issues of data sparsity in developing regions and better inform
              policies that impact social inequality by using a CNN to predict development indicators like
              education expenditure.

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

            <img src = {FairPrivate}/>
            <div className = "links">
              <button><a href = "https://github.com/raphaelletseng/fairlearn-pytorch" target = "_blank" rel="noreferrer noopener">
                code
              </a></button>
              <button><a href = "https://raphaelletseng.github.io/2021/09/29/Investigating-privacy-and-fairness-in-ml.html" target = "_blank" rel="noreferrer noopener">
                report
              </a></button>
            </div>
            <div className = "project-description">
            <p className = "sub-p">
            Privacy & Fairness in Machine Learning | Winter 2021 | <a href = "https://www.cs.mcgill.ca/~jguo/lab.html"
             target = "_blank" rel="noreferrer noopener">
            McGill Knowledge and Software Technology Lab (KAST) </a>
          </p>
              <p>
              An investigation into the impact of unfairness mitigation
              techniques on privacy preserving machine learning by applying
              bias mitigation algorithms to differentially private data. The
              trained models were then evaluated against a variety of fairness metrics.
              This project made use of
              <a href = "https://fairlearn.org/" target = "_blank" rel="noreferrer noopener"> Microsoft's Fairlearn.</a>

              </p>
            </div>

            <div className = "technologies">
              <ul className = "tech-list">
                <li>Pytorch</li>
                <li>Python</li>
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

    <img src = {McGillAI} className = "graphic"/>
    <div className = "links">
      <button><a href = "https://github.com/McGillAISociety/mcgillaiwebsite" target = "_blank" rel="noreferrer noopener">
        code
      </a></button>
      <button><a href = "https://www.mcgillai.com/" target = "_blank" rel="noreferrer noopener">
        site
      </a></button>
    </div>
    <div className = "project-description">
      <p className = "sub-p">
      McGillAI Website | Summer 2020 - Summer 2021
      </p>
      <p>
      A website for the McGill AI Society. Built to consolidate club information, event links, and FAQs,
       provide additional Montreal AI resources, introduce members to the club executive, and encourage
       students to sign up for the McGillAI 'Introduction to Machine Learning' Bootcamp.

      </p>
    </div>

    <div className = "technologies">
      <ul className = "tech-list">

        <li>React</li>

      </ul>
    </div>

  </div>
  </ScrollAnimation>
</div>

<div class="col">
<ScrollAnimation animateIn="flipInY">
  <div className = "project-card">
    <img src = {Kyc2}/>
    <div className = "links">
      <button><a href = "https://github.com/cclin130/know_your_company" target="_blank" rel="noreferrer noopener">
        code
      </a></button>
    </div>
    <div className = "project-description">
      <p className = "sub-p">
      Know Your Company | Winter 2019 | Winner of Gender Inclusion Hack & Spark! Inclusion in Tech
      </p>
      <p>
      This is a Chrome extension built for people searching to work with
      companies that value diversity.
      It displays employee diversity data - currently race and gender - for
      30 top tech companies.
      It also uses the Bing News API to
      show recent news article related to the workplace environment.
      </p>
    </div>

    <div className = "technologies">
      <ul className = "tech-list">
        <li>JS</li>
        <li>HTML</li>
        <li>CSS</li>
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
        <button><a href = "https://github.com/McGillAISociety/learnathon2020" target = "_blank" rel="noreferrer noopener">
          code
        </a></button>
        <button><a href = "https://mcgillailearn.com/" target = "_blank" rel="noreferrer noopener">
          site
        </a></button>
      </div>
      <div className = "project-description">
        <p className = "sub-p">
        Winter 2021
        </p>
        <p>
        A website built for the 2021 McGill AI Learnathon,
        an undergraduate conference including 3 tracks of research talks by
        acclaimed AI researchers, hands-on workshops, and career fair sponsor
        presentations and panel discussions
        </p>
      </div>

      <div className = "technologies">
        <ul className = "tech-list">

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
