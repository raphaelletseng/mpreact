import React from "react";
import "./layout.css";
import Land from "../assets/land-graphic.png";
import { About, Projects, Footer, Form, Projects2 } from "../components";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div id="home">


      <div class="container">
        <div class="row">

          <div class="col-md">
            <div class="holder">
              <h2 class="rw-sentence">
                I'm Raphaëlle - I like to code.
                <Typewriter
                  class="type"
                  options={{
                    strings: [
                      "Developer",
                      "Climbing enthusiast",
                      "Tech Optimist",
                      "Kitty Cuddler",
                    ],
                    cursor: "<",
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                  }}
                />
                <div class="rw-words rw-words-1">
                  <span>Hello 👋</span>
                  <span>你好! </span>
                  <span>Salut :) </span>
                </div>
              </h2>
            </div>
          </div>

          <div class="col-md order-first order-md-last">
            <div className = "particles-div">
            <ParticlesBg type="cobweb" bg={true} />
            </div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              <img class="landing-img" src={Land} alt="landing" />
            </motion.div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220">
        <path
          fill="#054a7f"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class="teal-back">
        <About />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 158 1440 120">
          <path
            fill="#054a7f"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,229.3C672,213,768,203,864,192C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

      {/*  <Projects /> */}
        <Projects2 />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220"><path fill="#ed8f65" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div class = "orange-back">
      <Form/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 1440 140"><path fill="#edbe6e" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,165.3C672,160,768,192,864,202.7C960,213,1056,203,1152,197.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
