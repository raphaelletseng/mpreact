import React from "react";
import "./layout.css";
import Val from "../assets/val.png";
import {About, Footer} from "../components";
import {motion} from 'framer-motion';
import ParticlesBg from 'particles-bg';

function Home() {
  return (
    <div id="home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 65 1440 150"><path fill="#2b2b2b" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,133.3C672,96,768,64,864,69.3C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <ParticlesBg type = "cobweb" bg={true}/>
      <div class = "container">
      <div class = "row">
        <div class="col align-self-center">
         <h1> KITTY APPRECIATION </h1>
        </div>

        <div class = "col">
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
          <img class = "img-fluid rounded mb-4 shadow-lg p-0"
            src = {Val}
            alt="landing"/>
          </motion.div>
        </div>
      </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220"><path fill="#2b2b2b" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      <About/>
    <Footer/>
    </div>

  );
}

export default Home;
