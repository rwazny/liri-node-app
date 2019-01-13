require("dotenv").config();

// Load the NPM Package inquirer
// Require the keys.js

var keys = require("keys.js");
var spotify = new Spotify(keys.spotify);






// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
var address = process.argv.slice(3).join(" ");
