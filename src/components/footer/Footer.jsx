import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div id="footer">
      <footer class="py-5">
        <div class="container">
          <div class="text-center center-block">
            <h5 class="footer-text"> Let's Connect! </h5>
            <a href="https://www.github.com/raphaelletseng/"
                aria-label="Link to see what I'm up to on GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rapha%C3%ABlletseng/"
                aria-label="Link to connect with me on LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="container">
          <p class="m-0 text-center">
            raphaelletseng@gmail.com <br />
            Copyright &copy; Raph Tseng 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
