import React, { useEffect } from "react";
import { Footer } from "../";
import Subtitle from "../Subtitle";

import { useParams } from "react-router";
import Valh1 from "./cat-assets/valh1.jpeg";
import Valh2 from "./cat-assets/valh2.jpeg";
import Valv1 from "./cat-assets/valv1.jpeg";
import Valv2 from "./cat-assets/valv2.jpeg";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {}, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <Subtitle subtitleColor="#2b2b2b">Valentin Baby </Subtitle>

        <p> Pictures of Val </p>

        <div class="row">
          <div class="col">
            <img class="img-fluid rounded mb-4 " src={Valh1} alt="valh1" />
            <img class="img-fluid rounded mb-4 " src={Valv1} alt="valv1" />
          </div>
          <div class="col">
            <img class="img-fluid rounded mb-4 " src={Valv2} alt="valv2" />
            <img class="img-fluid rounded mb-4 " src={Valh2} alt="valh2" />
          </div>
        </div>
      </div>
        <Footer/>
    </div>

  );
}
export default Post;
