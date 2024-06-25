import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
    console.log("Video is rendering");
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-background">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;


