import React from 'react';
import Track from '../track/track.js';
import './tracklist.css';

class TrackList extends React.Component{
  render() {
    return(
      <div className="TrackList">
  {this.props.tracks.map(track => {
    return <Track track={track}/>
  })
  }
  </div>
);
  }
}

export default TrackList;
