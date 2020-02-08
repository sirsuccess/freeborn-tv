import React from "react";
import Video from "../components/common/Video/Video";
import Carousal from "../components/common/Carousal/Carousal";
import VideoList from "../components/common/VideoList/VideoList";
import BlackLine from "../components/common/BlackLine/BlackLine";
// import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Carousal />
      <BlackLine text="Popular Videos" />
      <VideoList />
    </div>
  );
}
