/*jshint esversion: 6*/

// Library 
class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
}

// Playlist
class Playlist extends Library {
  constructor(name){
    super();
    this.playListName = "";
    this.tracks = [];
  }

  get playListNameA(){

    return this.playListName;
  }

  set playListNameA(name){
    if(name){
      this.playListName = name;
/*calling library*/this.playlists.push(this.playListName);
    } else {
      console.log("please, enter play list name");
    }
  }
}

// Track
class Track extends Playlist {
  constructor(title, rating, length){
    super();
    this.title = title;
    this.rating = rating;
    this.length = length;
  }

  set Title(name){
    if(name){
    this.title = name;
    }else {
      console.log("please, enter a Title");
    }
  }
  get Title(){
    return this.title;
  }

  set rating(integer){
   if(typeof integer === 'number'){
    this.rating = integer;
   }else {
     console.log("please, enter a Title");
    }
  }
  get rating(){
    return this.rating;
  }
  set length(length){
    if(typeof length === 'number' && length > 0){
    this.length = length;
    } else {
      console.log("please, enter a Title");
    }
  }
  get length(){
    return this.length;
  }

  _addToPlaylist(title, rating, length){
    let track = {
      title: this.title,
      rating: this.rating,
      length: this.length
    };
    this.tracks.push(track);
  }

}

const newPlayList1 = new Playlist('playOne');
newPlayList1.playListNameA = 'playOne';
console.log (newPlayList1);

const track1 = new Track('teste1', '4', '2.3');

















