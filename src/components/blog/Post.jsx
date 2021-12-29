import React, {useEffect} from "react";
import {useParams} from "react-router";
import Valh1 from "./blog-assets/valh1.jpeg";
import Valh2 from "./blog-assets/valh2.jpeg";
import Valv1 from "./blog-assets/valv1.jpeg";
import Valv2 from "./blog-assets/valv2.jpeg";


function Post(){
  let {postSlug} = useParams();

  useEffect(() => {

  }, [postSlug]);

  return (
    <div className = "home">
      <div class = "container">
        <h1> Valentin BABY </h1>
      

        <p> Pictures of Val </p>

        <div class = "row">
        <div class = "col">
          <img class = "img-fluid rounded mb-4 " src = {Valh1} alt = "valh1"/>
          <img class = "img-fluid rounded mb-4 " src = {Valv1} alt = "valv1"/>
        </div>
        <div class = "col">
          <img class = "img-fluid rounded mb-4 " src = {Valv2} alt = "valv2"/>
          <img class = "img-fluid rounded mb-4 " src = {Valh2} alt = "valh2"/>
        </div>

        </div>
      </div>
    </div>
  )
}
export default Post;
