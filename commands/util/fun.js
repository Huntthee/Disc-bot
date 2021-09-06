const Discord = require("discord.js")


// Create a discord embed for listing the available commands and other useful information.
module.exports = {
  name: 'fun',
  description: 'An embed for entertainment commands!',
  execute(client, message, args) {
    const funEmbed = new Discord.MessageEmbed()
    .setColor('#ffd703')
    .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
    .setThumbnail('https://i.imgur.com/hjKUSlD.png')

    .setTitle('Fun and Entertainment')
    .setDescription('Commands you can use to pass the time.')

    .addFields(
      {
        name: 'DnD Die Roller',
        value: `type **?d20** or **?d100** to test your fate!`
      },
      {
        name: 'Random Chuck Norris Jokes',
        value: `type **?joke** for a random, terrible chuck norris joke!`
      },
      {
        name: 'Random Quotes',
        value: `type **?quote** for a random quote!`
      },
      {
        name: 'Throw A PokeBall At Someone',
        value: 'Type **?pokeball @Username** To attempt to capture another user with a PokeBall! 1% chance of success.'
      },
      {
        name: 'Determine How Sus Someone is',
        value: 'Type **?sus @Username** to have Rob Otto scan the user\'s sus levels.'
      }
    )
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    
    .setFooter('And more to come!', 'https://i.imgur.com/RmxTBoQ.png')
    .setTimestamp();

    if (args.length == 0) {
      message.channel.send(funEmbed)
        
    } else {
      message.channel.send('It looks like you need help with ' + args + ' but I\'m not sure what that means. Try `?help` to see what you can do.')
    }
  }
}