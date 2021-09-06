const fetch = require('node-fetch'); 

module.exports = {
  name: "joke",
  description: "Some terrible chuck norris jokes",
  async execute(client, message) {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const fact = await response.json();
    let r = fact.value;
    message.channel.send(`${r}`)
  }
}