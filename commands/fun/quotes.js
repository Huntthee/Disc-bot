const fetch = require('node-fetch')

// Flames' extremely volatile quote
module.exports = {
  name: "quote",
  description: "A list of random quotes!",
  async execute(message){
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    message.channel.send(`${data[Math.floor(Math.random() * data.length)].text}`)
  });
  }
}