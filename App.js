import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios';
import videoFooter from './videoFooter';


function App() {
  const [videos,setVideos]=useState([]);

  useEffect(()=>{

    async function fetchPost(){
      const response= await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPost();
  },[]);

  console.log(videos);


  return (
    <div className="app">
     
      <div className="app__video">

      {videos.map(({url,likes,shares,messages,channel,description,song})=>(
        <Video 
        channel={channel}
       description={description}
        song={song}
        url={url}
        likes={likes}
        messages={messages}
        shares={shares}
        />
      ))}
      
      </div>
      
      
    </div>
  );
}

export default App;
