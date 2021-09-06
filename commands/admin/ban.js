// Essentially the exact same thing as the kick command. but ban instead!
module.exports = {
  name: "ban",
  description: "Ban an offending user from the server.",
  guildOnly: true,
  execute(client, message, args) {
    const channel = message.channel;
    const permissions = channel.permissionsFor(message.client.user);
    const taggedUser = message.mentions.users.first();
    const reason = args.join(" ").slice(22);

    // User must be admin to ban
    if (!permissions.has('ADMINISTRATOR')) {
      return message.reply('You do not have permission to wield the Ban Hammer!!');
    };

    // command will require a target user
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to hit them with the Ban Hammer!');
    };

    // A reason for banning would soothe the masses
    if (!reason) {
      return message.reply(`Please provide a reason for kicking ${taggedUser}`);
    };
    
    // Ban the mentioned user from the server.
    message.guild.member(taggedUser).ban(reason).catch(err => {
      console.log(err);
      return message.channel.send('There was an error removing the user.');
    });
    return message.channel.send(`The mighty Ban Hammer has been brought down upon ${taggedUser} for ${reason}.`);
  }
};