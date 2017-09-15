import React from 'react';
import TrackList from '../tracklist/tracklist.js'

class PlayList extends React.Component{
  render(){
    return(
      <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  /*<TrackList/>*/
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>
    )
  }
}

export default PlayList;
