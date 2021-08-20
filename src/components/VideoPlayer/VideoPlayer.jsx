import React from 'react';
import './VideoPlayer.css'
import Iframe from 'react-iframe';

const VideoPlayer = () => {
  let thing = "J3Fgfq_6lbA"
  return (
    <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${thing}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
        <h1>testing</h1>
    </div>
  );
}

export default VideoPlayer;