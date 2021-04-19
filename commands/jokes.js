const fetch = require('node-fetch'); 
 
 // The Array of Chuck Norris Jokes xD
 // Soon to be replaced with the Chuck Norris API!
 module.exports = {
   name: "joke",
   description: "Some terrible chuck norris jokes",
   async execute(message) {
     const response = await fetch('https://api.chucknorris.io/jokes/random');
     const fact = await response.json();
     let r = fact.value;
     message.channel.send(`${r}`)
  }
}