module.exports = {
  name: "sus",
  description: "randomly determine a user's 'sus' percentage",
  execute(client, message) {
    const taggedUser = message.mentions.users.first();
    const scanningTime = Math.floor(Math.random() * 2000);

     // command will require a target user
     if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to figure out how sus they are!');
    };

    // Let the user know we're scanning the target
    message.channel.send(`Scanning for sus...`);

    // Determine the sus levels
    const generateSus = () => {
      let susPercent = Math.floor(Math.random() * 100) + 1;

      // If totally sus, yeet
      if (susPercent == 100) {
        return `${taggedUser} was the imposter! They've been yeeted from the server as a result.`;
      };

      // Inform the public of the user's sus levels
      return message.channel.send(`Hmmmm... looks like they're about ${susPercent}% sus.`);
    };
    setTimeout(generateSus, scanningTime);
  } 
};
