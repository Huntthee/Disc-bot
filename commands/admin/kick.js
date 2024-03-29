module.exports = {
  name: "kick",
  description: "Remove an offending user from the server.",
  guildOnly: true,
  execute(client, message, args) {
    const channel = message.channel;
    const permissions = channel.permissionsFor(message.client.user);
    const taggedUser = message.mentions.users.first();
    const reason = args.join(" ").slice(22);

    // User must be admin to kick
    if (!permissions.has('ADMINISTRATOR')) {
      return message.reply('You do not have permission to kick!');
    };

    // command will require a target user
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    };

    // A reason for kicking would soothe the masses
    if (!reason) {
      return message.reply(`Please provide a reason for kicking ${taggedUser}`);
    };
    
    // Kick the mentioned user from the server.
    message.guild.member(taggedUser).kick(reason).catch(err => {
      console.log(err);
      return message.channel.send('There was an error removing the user.');
    });
    return message.channel.send(`${taggedUser} has been removed from the server for ${reason}.`);
  }
};