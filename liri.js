require("dotenv").config();

// Load the NPM Package inquirer

// Require the keys.js
var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var fs = require("fs");

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
var address = process.argv.slice(2);
// movie-this 

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

if(address[0] === "movie-this")
{
  if(address.length == 1){
    request("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=40e9cece", function (error, response, body)
    {
        console.log(body);
        console.log("Movie's title is: " + JSON.parse(body).Title);
               console.log("Movie's Year is: " + JSON.parse(body).Year);
               console.log("Movie's ratings is: " + JSON.parse(body).imdbRating);
               console.log("Country where movie was produced: " + JSON.parse(body).Country);
               console.log("Language of the movies: " + JSON.parse(body).Language);
               console.log("Plot of the movies: " + JSON.parse(body).Plot);
               console.log("Actors in the movie: " + JSON.parse(body).Actors);
    });
  }
  else{
    request("http://www.omdbapi.com/?t="+address[1]+"&y=&plot=short&apikey=40e9cece", function (error, response, body)
    {
        console.log(body);
        console.log("Movie's title is: " + JSON.parse(body).Title);
               console.log("Movie's Year is: " + JSON.parse(body).Year);
               console.log("Movie's ratings is: " + JSON.parse(body).imdbRating);
               console.log("Country where movie was produced: " + JSON.parse(body).Country);
               console.log("Language of the movies: " + JSON.parse(body).Language);
               console.log("Plot of the movies: " + JSON.parse(body).Plot);
               console.log("Actors in the movie: " + JSON.parse(body).Actors);
    });
  }
}

if(address[0] === "spotify-this-song"){
  if(address.length == 1){
    var spotify = new Spotify({
        id: "34e84d93de6a4650815e5420e0361fd3",
        secret: "5162cd8b5cf940f48702dffe096c2acb"
    });

    spotify.search({type: 'track', query: "The Sign"}).then(function(response){
      console.log(response);
      console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
      console.log("The Song's name: " + response.tracks.items[0].name);
      console.log("Preview link from Spotify: " + response.tracks.items[0].preview_url);
      console.log("Album name: " + response.tracks.items[0].album.name);
    });
  }

  else{
    var song_name_arr = address.slice(1);
    var song_name = "";

    for(var i=0;i<song_name_arr.length;i++){
      song_name = song_name + " "+song_name_arr[i];
      console.log(song_name);
    }

    var spotify = new Spotify({
      id: "34e84d93de6a4650815e5420e0361fd3",
      secret: "5162cd8b5cf940f48702dffe096c2acb"
  });

  spotify.search({type: 'track', query: song_name}).then(function(response){
    console.log(response);
    console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
    console.log("The Song's name: " + response.tracks.items[0].name);
    console.log("Preview link from Spotify: " + response.tracks.items[0].preview_url);
    console.log("Album name: " + response.tracks.items[0].album.name);
  });
    
  }
}