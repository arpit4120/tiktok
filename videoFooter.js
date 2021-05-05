import React from 'react'
import './videoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import DiscFullIcon from '@material-ui/icons/DiscFull';

function videoFooter({channel,description,song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div  className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon"/>
          
          <Ticker mode="smooth">
            {({index})=>(
              <>
              <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <div className="recordfather">
      <DiscFullIcon className="videoFooter__record" fontSize="large" />
      </div>
    </div>
  )
}

export default videoFooter;
