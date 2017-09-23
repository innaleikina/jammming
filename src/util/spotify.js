const clientId ='8600eb0edbe24e308e256610d52b170c';
const redirectURI = 'http://berserk-cabbage.surge.sh';


let accessToken;

const Spotify = {
getAccessToken() {
if(accessToken) {
  return accessToken;
}
// get Access Token from URL
const accessTokenMatch= window.location.href.match(/access_token=([^&]*)/);
//get Expires In from URL
const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
if(accessTokenMatch && expiresInMatch) {
  // access Token Value
 accessToken = accessTokenMatch[1];
  //expires in Value
  const expiresIn = Number(expiresInMatch[1]);
  window.setTimeout(() => accessToken = '', expiresIn * 1000);
  window.history.pushState('Access Token', null, '/');
  return accessToken;
} else {
 console.log('Redirecting due to undefined Access Token');
 window.location = (`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
}
},

search(searchWord) {
  accessToken = Spotify.getAccessToken();
return  fetch(`https://api.spotify.com/v1/search?type=track&q=${searchWord}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
}).then (response => response.json()).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return [];
    } else {
      return jsonResponse.tracks.items.map(
        track => ({
          id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    }});
  },

savePlaylist(playlistName, trackUris) {
  if(!playlistName || !trackUris.length) {
    return;
  }

  accessToken = Spotify.getAccessToken();
  const headers = {
    Authorization:`Bearer ${accessToken}`
  };
  let userId;

  return fetch("https://api.spotify.com/v1/me", {
    headers: headers
  }).then(response => response.json()).then(jsonResponse => {
    userId = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({name: playlistName})
    }).then(response => response.json()).then(jsonResponse => {
    const playlistId = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      headers: headers,
      method:'POST',
      body: JSON.stringify({uris:trackUris})
    });
  });
});
}

};


export default Spotify;
