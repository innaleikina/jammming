import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchbar/searchbar.js';
import SearchResults from '../searchresults/searchresults.js';



class App extends React.Component {
  constructor(props){
  super(props);

   let track = {
    name:'Sage Francis',
    artist:'Grace',
    album:'Copper Gone'
  }

  this.state = {searchResults:[
      this.track,
      this.track
    ]};
  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar/>
    <div className="App-playlist">
      <SearchResults searchResults="this.state.searchResults"/>
      <playList/>
    </div>
  </div>
</div>
    )
    }
  }

export default App;
