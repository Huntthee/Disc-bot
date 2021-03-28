const Discord = require('discord.js')
const client = new Discord.Client()

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
  // generalChannel.send("I'm in here now.")
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
    receivedMessage.channel.send("The commands you can use so far are `!mult, !add, !size, !roll (to roll a D20) and !joke`")

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

// The adding command!
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

// Roll the Die!
function rollCommand(arguments, receivedMessage) { 
  const sides = 20;
  const roll = Math.floor(Math.random() * sides) + 1;

  if (roll == 20) {
    receivedMessage.channel.send(`WHOA! Nice Crits, You rolled a ${roll}`)
  } else if (roll == 1) {
    receivedMessage.channel.send(`OOF, That's gotta hurt. You rolled a ${roll}`)
  } else {
    receivedMessage.channel.send(`You rolled a ${roll}`)
  }
}



client.login("")