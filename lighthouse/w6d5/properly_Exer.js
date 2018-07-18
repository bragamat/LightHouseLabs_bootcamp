/*jshint esversion: 6*/

function Library(name, creator){
  this.name = name;
  this.creator = creator;
  

   addPlaylist = (list) =>{
    this.playlists.push(list);
   }
   seePlaylist = ()=> {
    return this.playlists;
   }

   _addTrackToPlayList = (trackName, rating, length, playlistName) =>{
    let track = {
      name: trackName,
      rating: rating,
      length: length
    };
    this.playlists.forEach(playlist =>{
      if (playlist === playlistName) {
        this.playlists.playlist = track;
      }
    });
   }


}


const firstLibrary = new Library("Pop", "Mateus");

firstLibrary.addPlaylist('PlayOne');

console.log(firstLibrary)










