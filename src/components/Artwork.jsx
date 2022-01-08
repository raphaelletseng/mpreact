import React, {useState} from "react";
import "./layout.css";
import Subtitle from "./Subtitle.jsx";
import {render} from "react-dom";
import Gallery from "react-photo-gallery";
//import { art } from "./artwork/art.jsx";

function Artwork(){
  const [currImage, setCurrImage] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const art = [
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 2,
      height: 1.5
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 4
    }
  ];

  return(
    <div id = "gallery">
      <Subtitle subtitleColor = "#2b2b2b">artwork</Subtitle>
      <Gallery photos = {art}/>
    </div>
  );
}
export default Artwork;
