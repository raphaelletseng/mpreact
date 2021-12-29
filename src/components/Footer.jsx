import React from "react";
import "./layout.css";

function Footer() {
  return (
    <div id = "footer">
      <footer class="py-5 bg-dark">
      <div class = "container">
        <div class="text-center center-block">
          <a href = "https://www.github.com/raphaelletseng/">
          <i class = "fa fa-github"></i></a>
          <a href = "https://www.linkedin.com/in/rapha%C3%ABlletseng/">
          <i class = "fa fa-linkedin"></i></a>
        </div>

      </div>
        <div class="container">
          <p class="m-0 text-center text-white">
          raphaelletseng@gmail.com <br/>
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
