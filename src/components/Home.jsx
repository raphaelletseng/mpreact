import React from "react";
import "./layout.css";
import Land from "../assets/land-graphic.png";
import { About, Projects, Footer, Form } from "../components";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div id="home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 60">
        <path
          fill="#edbf65"
          fill-opacity="1"
          d="M0,224L120,218.7C240,213,480,203,720,208C960,213,1200,235,1320,245.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div class="container">
        <div class="row">
          <div class="col">
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
                  <span>Hello!</span>
                  <span>你好</span>
                  <span>Salut :) </span>
                </div>
              </h2>
            </div>
          </div>

          <div class="col">
            <ParticlesBg type="cobweb" bg={true} />
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

        <Projects />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 110">
          <path
            fill="#ed8f65"
            fill-opacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,32C840,32,960,64,1080,85.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>


      </div>
      <Form/>

      <Footer />
    </div>
  );
}

export default Home;
