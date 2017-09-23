import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchbar/searchbar.js';
import SearchResults from '../searchresults/searchresults.js';
import PlayList from '../playlist/playlist.js';
import Spotify from '../../util/spotify.js';


class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    searchResults:[],
    playlistName:'New PlayList',
    playlistTracks:[]
  };

//Bind methods
this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
this.updatePlaylistName=this.updatePlaylistName.bind(this);
this.savePlaylist=this.savePlaylist.bind(this)
};

//add track method
addTrack(track) {
let tracks = this.state.playlistTracks;
tracks.push(track);
this.setState({
  playlistTracks: tracks
});
}

//remove track method
removeTrack(track) {
let tracks = this.state.playlistTracks;
tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
this.setState({playlistTracks: tracks});
}

updatePlaylistName(name) {
  this.setState({
    playlist: name
  });
}

savePlaylist(){
  const trackUris = this.state.playlistTracks.map(track => track.uri);
  Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
    this.setState({
      playlistName:'New Playlist',
      searchResults: []
    });
  });
}


search(searchWord){
  Spotify.search(searchWord).then(searchResults => {
    this.setSatte({searchResults: searchResults});
  });
}

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults  searchResults={this.state.searchResults}
      onAdd={this.addTrack}/>
      <PlayList playlistName={this.state.playlistName}   playlistTracks={this.state.playlistTracks}
      onRemove={this.removeTrack}
      onNameChange = {this.updatePlaylistName}
      onSave={this.savePlaylist}/>
    </div>
  </div>
</div>
    );
    }
  }

export default App;
