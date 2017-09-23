import React from 'react';
import TrackList from '../tracklist/tracklist.js'
import './playlist.css'

class PlayList extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
}
    handleNameChange(e){
      this.props.onNameChange(e.target.value);
    }

  render(){
    return(
      <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
   <TrackList tracks={this.props.playlistTracks}
    onRemove={this.props.onRemove}
    isRemoval={true} />
  <a class="Playlist-save"
     onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
    );
  }
}

export default PlayList;
