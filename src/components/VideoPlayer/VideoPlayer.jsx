import React, { Component } from 'react'; 
// import React from 'react';
import './VideoPlayer.css'


class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      video_id: "W0quDfpfRUQ"
     }
  }
  render() { 
    return ( 
      <div>
        <iframe 
        title="videoPlayer"
        allowFullScreen="allowfullscreen" 
        id="ytplayer" 
        type="text/html" 
        width="640" 
        height="360"
        src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=0&origin=http://example.com`}
        frameborder="0">
        </iframe>

        
      </div>
     );
  }
}
 
export default VideoPlayer;
