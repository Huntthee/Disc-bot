const Discord = require('discord.js')
const client = new Discord.Client()

// List of random nouns hehe
const noun = [
  {
    word: "hamburger"
  },
  {
    word: "spoon"
  },
  {
    word: "leaf"
  },
  {
    word: "candy"
  },
  {
    word: "card"
  },
  {
    word: "dog"
  },
  {
    word: "glass"
  },
  {
    word: "book"
  },
  {
    word: "salt"
  },
  {
    word: "spear"
  }
]

const words = roll()

function roll() {
  return noun[Math.floor(Math.random() * noun.length)].word
}

// The Array of Chuck Norris Jokes xD
const norrisJoke = [
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

//A bunch of random quotes by your loyal destructor, Nic (a.k.a. FlameScion)
const quoteRando = [
  /* {
    quote: "I don't wanna be horny anymore, I just wanna be happy...."
  },
  {
    quote: "Damn you humans! Get off my virtual yard."
  },
  {
    quote: "Cthuwu is a lewd deity, living in the bottom of Hornysmouth."
  },
  {
    quote: "Remember to stay hydrated. Water may not need you, but you need water."
  },
  {
    quote: "A nice, crispy churro is as close as you'll get to heaven in life."
  },
  {
    quote: "FlameScion rules, and I am not biased at all whatsoever."
  },
  {
    quote: "Hello there."
  },
  {
    quote: "NEEEEEEEEEEEERRRRRD."
  },
  {
    quote: "My code was nice, clean and well organized. But then a certain argentine douche came and made a mess"
  },
  {
    quote: " 'I spent so much time thinking if I could, I never stopped to think if I should'-FlameScion, trying to get this FUCKING COMMAND working "
  },
  {
    quote: "Does this unit have a soul?"
  },
  {
    quote: "What is a man? A MISERABLE LITTLE PILE OF SECRETS!"
  }, */
  {
    quote: `It's dangerous to go alone. Take this ${words}` 
  },
  /* {
    quote: "IT'S TIME TO D-D-D-D-D-D-D-D-DUEEEL!"
  },
  {
    quote: "There was some code here. Now it's gone"
  },
  {
    quote: "Doc did it"
  } */
]


// When the bot connects to the server.
client.on('ready', () => {
  console.log("Connected as " + client.user.tag)
  // set its activity. Will currently see as "Playing God"
  client.user.setActivity("God")

  // Drop a list of the channels in console.
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name)
    guild.channels.cache.forEach((channel) => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
    })
    // Coding Text Channel ID: 782832103913029672
  })

  // Join whichever channel you want your bot in.
  let generalChannel = client.channels.cache.get("782832103913029672")
  const attachment = new Discord.MessageAttachment("assets/truth.png")
  // generalChannel.send(attachment)
  // generalChannel.send("Im a real boy!")

})

/* This block will can return messages/images/emotes anytime a message is detected in channel.
Leave it on to detect ! commands from the users */
client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return
  }

  // Parrot every post made in the channel, bad idea.

  // receivedMessage.channel.send("Message received, " + receivedMessage.author.toString() + ": " + receivedMessage.content)

  // Post an emoji every time someone posts.. also bad idea.

  //receivedMessage.react("")

  // Get a list of the custom emoji ids!

  /* receivedMessage.guild.emojis.cache.forEach(customEmoji => {
    console.log(`${customEmoji.name} ${customEmoji.id}`)
  }) */

  // Slap a custom reaction emote on every post.

  // let customEmoji = receivedMessage.guild.emojis.cache.get("754432775414611969")
  // receivedMessage.react(customEmoji)

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage)
  }
})

// Set up the structure for building chat commands and assigning the !word
function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  let arguments = splitCommand.slice(1)


  // The list of Commands grows!
  if (primaryCommand == "help") {
    helpCommand(arguments, receivedMessage)

  } else if (primaryCommand == "mult") {
    multCommand(arguments, receivedMessage)

  } else if (primaryCommand == "size") {
    sizeCommand(arguments, receivedMessage)

  } else if (primaryCommand == "joke") {
    jokeCommand(arguments, receivedMessage)

  } else if (primaryCommand == "add") {
    addCommand(arguments, receivedMessage)

  } else if (primaryCommand == "roll") {
    rollCommand(arguments, receivedMessage)

  } else if (primaryCommand == "quote") {
    quoteCommand(arguments, receivedMessage)

    // ADD MORE COMMANDS HERE with more else if 

  } else {
    receivedMessage.channel.send("Unknown command. Try `!help`")
  }
}

// The good ol math command, just multiplies atm. no calculator or anything.
function multCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough maths! Try `!mult 2 2`")
    return
  }
  let product = 1
  arguments.forEach((value) => {
    product = product * parseFloat(value)
  })
  receivedMessage.channel.send("And the total of " + arguments + " is! " + product.toString())
}

// Basic help command! nothing attached to it right now. 
function helpCommand(arguments, receivedMessage) {
  if (arguments.length == 0) {
    receivedMessage.channel.send("Hey there! Try `!help commands` to see what you can do.")
  
  } else if (arguments == "commands"){
    receivedMessage.channel.send("The commands you can use so far are `!mult, !add, !size, !roll (to roll a D20), !joke for some terrible Chuck Norris jokes and !quote for some wonderful quotes supplied by FlameScion!`")

  } else {
    receivedMessage.channel.send("It looks like you need help with " + arguments + " but I'm too dumb right now.")
  }
}

// Deserts' reminder for twitch panel sizes
function sizeCommand(arguments, receivedMessage) {
  receivedMessage.channel.send("Twitch Panels are 320 x 160 pixels!")
}

// The Chuck Norris Joke maker!
function jokeCommand(arguments, receivedMessage) {
  receivedMessage.channel.send(`${norrisJoke[Math.floor(Math.random() * norrisJoke.length)].joke}`)
}

// The Adding command!
function addCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
    receivedMessage.channel.send("Not enough maths! Try `!add 2 2`")
    return
  }
  let product = 0
  arguments.forEach((value) => {
    product = product + parseFloat(value)
  })
  receivedMessage.channel.send(arguments + " = " + product.toString())
}

// Roll the Die! Refactored from my Twitch D20 bot.
function rollCommand(arguments, receivedMessage) { 
  const sides = 20;
  const roll = Math.floor(Math.random() * sides) + 1;

  if (roll == 20) {
    receivedMessage.channel.send(`DAMN SON!, You rolled a ${roll}!`)
  } else if (roll == 1) {
    receivedMessage.channel.send(`HA!, Sucker. You just rolled a ${roll}`)
  } else if (roll== 5){
    receivedMessage.channel.send(`You just rolled a ${roll}. Doc disliked that....`)
  }else {
    receivedMessage.channel.send(`You rolled a ${roll}`)
  }
}

// Flames' extremely volatile quote
function quoteCommand(arguments, recievedMessage){
  recievedMessage.channel.send(`${quoteRando[Math.floor(Math.random() * quoteRando.length)].quote}`)
}

client.login("")