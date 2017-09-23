import React from 'react';
import Track from '../track/track.js';
import './tracklist.css';

class TrackList extends React.Component{


  render() {
    return(
      <div className="TrackList">
  {this.props.tracks.map(track =>
     <Track track={track}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}/>
  )}

  </div>
);
  }
}

export default TrackList;
