import React, { useState } from 'react';
import './videoSider.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

function VideoSider({likes,shares,messages}) {
  const [liked,setliked]= useState(false);
  return (
    <div className="videoSider">
      <div className="videoSider__button">
      {liked?(
        <FavoriteIcon fontSize="large" onDoubleClick={(e)=>setliked(false)}/>
      ):(
        <FavoriteBorderIcon fontSize="large" onClick={(e)=>setliked(true)}/>
      )}
        <p>{liked?likes+1:likes}</p>
      </div>
      <div className="videoSider__button">
        <MessageIcon fontSize="large"/>
        <p>{messages}</p>
      </div>
      <div className="videoSider__button">
        <ShareIcon fontSize="large"/>
        <p>{shares}</p>
      </div>
      
    </div>
  )
}

export default VideoSider;
