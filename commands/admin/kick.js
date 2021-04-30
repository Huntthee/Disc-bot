module.exports = {
  name: "kick",
  description: "Be violent!",
  guildOnly: true,
  execute(client, message) {
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    }
    
    const taggedUser = message.mentions.users.first();
  
    message.reply(`Don\'t kick ${taggedUser.username}! I do not condone violence!`);
  }
}