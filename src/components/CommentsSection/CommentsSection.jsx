import React, {Component} from 'react';
import axios from 'axios';
class CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      video_id: '',
      comments: '',
      like: '',
      dislike: '', 
    }
  }
  render() { 
    return ( 
      <div>
        <h1>hello from CommentsSection</h1>
        <input type="text"></input><button>submit</button>
      </div>
     );
  }
}
 
export default CommentsSection;