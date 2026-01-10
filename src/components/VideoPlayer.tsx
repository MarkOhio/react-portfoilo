import React from "react";

function VideoPlayer() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <video
        width="233px"
        height="auto"
        controls
        poster="flat.jpg" // optional
        id="demoVid"
      >
        <source src="demovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;