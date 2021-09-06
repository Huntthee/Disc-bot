module.exports = {
  name: "pokeball",
  description: "take a chance at capturing a user in a pokeball!",
  execute(client, message) {
    let chance = Math.floor(Math.random() * 100) + 1;
    const taggedUser = message.mentions.users.first();

    // command will require a target user
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to catch them in a PokeBall!');
    };
    
    switch(chance) {
      case 100:
        return message.channel.send(`You've caught ${taggedUser}`);
      default: 
        return message.channel.send(`${taggedUser} broke out of the PokeBall!`);
    }
  }
};