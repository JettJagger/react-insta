import React from "react";
import "./homepage.css";
import Sidenav from "./navigation/sidenav";
import Timeline from "./timeline/timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;