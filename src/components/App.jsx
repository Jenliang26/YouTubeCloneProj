import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
import Key from './apikey'; 
import RelatedVideos from './RelatedVideos/RelatedVideos';
import CommentsSection from './CommentsSection/CommentsSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoSearchResults:[],
      comments: [],
    }
  }

  componentDidMount() {
    this.getYoutubeVideos()
  }

  async getYoutubeVideos(){
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=panda&key=${Key}&part=snippet`)
      // console.log(response.data)
      // console.log(response.data.items)
      
      let relatedVideos = response.data.items
      let videoArray = []
      for (let i = 0; i < relatedVideos.length; i++) {
        console.log(relatedVideos[i].id.videoId)
        videoArray.push(relatedVideos[i].id.videoId)
      }

      this.setState({videoSearchResults: videoArray})
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
        <RelatedVideos videos={this.state.videoSearchResults}/>
        <CommentsSection /> 
      </div>
     );
  }
}
 
export default App;
