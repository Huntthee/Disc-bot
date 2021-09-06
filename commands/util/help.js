const Discord = require("discord.js")


// Create a discord embed for listing the available commands and other useful information.
module.exports = {
  name: 'help',
  description: 'A helpful embed!',
  execute(client, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#ffd703')
    .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
    .setThumbnail('https://i.imgur.com/hjKUSlD.png')

    .setTitle('Some Helpful Info!')
    .setDescription('Type in any of the following commands for more information on a particular set of commands.')

    .addFields(
      {
        name: 'Music Player!',
        value: `type **?music** for more info about the music player and its commands.`
      },
      {
        name: 'Fun and Entertaining commands',
        value: `type **?fun** for more info on some silly commands such as sus% and random quotes.`
      },
      {
        name: 'Utility commands, for Admins',
        value: `type **?admin** to see what moderation tools are available to server Admins.`
      }
    )
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    
    .setFooter('Hope that helps!', 'https://i.imgur.com/RmxTBoQ.png')
    .setTimestamp();

    if (args.length == 0) {
      message.channel.send(helpEmbed)
        
    } else {
      message.channel.send('It looks like you need help with ' + args + ' but I\'m not sure what that means. Try `?help` to see what you can do.')
    }
  }
}