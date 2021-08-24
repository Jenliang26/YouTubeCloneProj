import React, {Component} from 'react';
import axios from 'axios';


const CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video_id: '',
      comments: '',
      like: '',
      dislike: '',
    }
  }

  return ( 
    <h1>Comments Section</h1>
   );
}
 
export default CommentsSection;