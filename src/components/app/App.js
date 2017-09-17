import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchbar/searchbar.js';
import SearchResults from '../searchresults/searchresults.js';
import PlayList from '../playlist/playlist.js'





class App extends React.Component {
  constructor(props){
  super(props);

  let song = {
  name:'Sage Francis',
  artist:'Grace',
  album:'Copper Gone'
}

  this.state = {
      searchResults:[
        this.song,
        this.song
     ],
    playlistName:'PlayList',
    playlistTracks:[
    this.song,
    this.song
    ]
  };
};

//add track method

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar/>
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}/>
      <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
    </div>
  </div>
</div>
    )
    }
  }

export default App;
