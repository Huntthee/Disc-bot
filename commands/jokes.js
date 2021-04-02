 // The Array of Chuck Norris Jokes xD
 norrisJoke = [
  {
    joke: "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants."
  },
  {
    joke: "If you spell Chuck Norris in Scrabble, you win. Forever."
  },
  {
    joke: "When God said, “Let there be light!” Chuck said, “Say Please.”"
  },
  {
    joke: "Chuck Norris can dribble a bowling ball."
  },
  {
    joke: "Chuck Norris appeared in the ‘Street Fighter II’ video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked bout this 'glitch,' Chuck Norris replied, 'That’s no glitch.'"
  },
  {
    joke: "When Chuck Norris does a pushup, he’s pushing the Earth down."
  },
  {
    joke: "Chuck Norris can divide by zero."
  },
  {
    joke: "Chuck Norris beat the sun in a staring contest."
  },
  {
    joke: "Freddy Krueger has nightmares about Chuck Norris."
  },
  {
    joke: "Chuck Norris’ cowboy boots are made from real cowboys."
  },
  {
    joke: "Superman owns a pair of Chuck Norris undies."
  }
]

// The Chuck Norris Joke maker!
function jokeCommand(arguments, receivedMessage) {
  receivedMessage.channel.send(`${norrisJoke[Math.floor(Math.random() * norrisJoke.length)].joke}`)
}

module.exports = jokeCommand