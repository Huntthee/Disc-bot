const Discord = require("discord.js")


// Create a discord embed for listing the available commands and other useful information.
module.exports = {
  name: 'admin',
  description: 'Admin commands embed',
  execute(client, message, args) {
    const adminEmbed = new Discord.MessageEmbed()
    .setColor('#ffd703')
    .setAuthor('Rob Otto', 'https://i.imgur.com/RmxTBoQ.png', 'https://github.com/Huntthee/')
    .setThumbnail('https://i.imgur.com/hjKUSlD.png')

    .setTitle('Commands for Admins')
    .setDescription('The following commands are only available to users who have Admin permissions.')

    .addFields(
      {
        name: 'Kick a user from the server',
        value: `type **?kick @Username** to kick a user from the server.`
      },
      {
        name: 'Ban a user from the server',
        value: `type **?ban @Username** to ban a user from the server.`
      },
      {
        name: 'Delete messages from a text channel',
        value: `type **?prune 1-100** to delete a number of posts between 1 and 100. Great for cleaning up spam.`
      }
    )
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    
    .setFooter('Ban command and others to come soon.', 'https://i.imgur.com/RmxTBoQ.png')
    .setTimestamp();

    if (args.length == 0) {
      message.channel.send(adminEmbed)
        
    } else {
      message.channel.send('It looks like you need help with ' + args + ' but I\'m not sure what that means. Try `?help` to see what you can do.')
    }
  }
}