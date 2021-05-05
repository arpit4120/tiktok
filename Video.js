import React, { useRef, useState } from 'react';
import './video.css';
import VideoFooter from './videoFooter';
import VideoSider from './VideoSider';

function Video({url,likes,shares,messages,channel,description,song}) {

  const videoRef=useRef(null);
  const [playing, setPlaying]=useState(false);
  const handleVideoPress=()=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    } else{
      videoRef.current.play();
      setPlaying(true);
    }
    //if video is playing then stop it

    //else play it
  }
  return (
    <div className="video">
      <video 
      onClick={handleVideoPress}
      className="video__player"
      loop
      ref={videoRef}
      src={url}></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSider likes={likes} shares={shares} messages={messages} />
      
    </div>
    
  )
}

export default Video;
