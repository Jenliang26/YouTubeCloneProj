import React from 'react';
import './VideoPlayer.css'

const VideoPlayer = () => {
  // let thing = "J3Fgfq_6lbA"
  let thing = "W0quDfpfRUQ"

  
  return (
    <div>
        <iframe title="videoPlayer" id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${thing}?autoplay=0&origin=http://example.com`}
        frameborder="0"></iframe>
    </div>
  );
}

export default VideoPlayer;