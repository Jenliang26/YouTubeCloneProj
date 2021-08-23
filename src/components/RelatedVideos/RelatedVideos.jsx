import React from 'react'

const RelatedVideos = (props) => {
  // const [relatedVideos, setRelatedVideos] = useState([])

  return ( 
    <div>
      <h1>Related Videos</h1>
      <button onClick={() => console.log(props.videos)}>give me the fuckin data!
    </button>
      {/* props.videos.map(video) => {} */}
      
      

        
    </div>
  );
}




export default RelatedVideos;