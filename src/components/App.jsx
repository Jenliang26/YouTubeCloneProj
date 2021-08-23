import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
import Key from './apikey'; 
import RelatedVideos from './RelatedVideos/RelatedVideos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }
  async getYoutubeVideos(){
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=panda&key=${Key}&part=snippet`)
      console.log(response.data)
    }
    catch(e){
      console.log(e)
    }
  }

  
  render() { 
    return ( 
      <div>
        <h1>YouTube Clone</h1>
        <VideoPlayer />
        <button onClick={() => this.getYoutubeVideos()}>click me for reasons</button>
        <SearchBar />
        <RelatedVideos />
      </div>
     );
  }
}
 
export default App;
