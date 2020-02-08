import React from "react";
import VideoData from "../../../videoData";
import "./VideoList.css";

export default function VideoList() {
  return (
    <div className="VideoList">
      {VideoData.map((item, index) => (
        <div className="videoitem">
          <iframe
            width="100%"
            height="100%"
            src={item.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
