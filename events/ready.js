module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Connected as ${client.user.tag}`);
    // set its activity.
    client.user.setActivity("Little Helper, try ?help");
  
    // Drop a list of the channels in console.
    /* client.guilds.cache.forEach((guild) => {
      console.log(guild.name, guild.id);
      guild.channels.cache.forEach((channel) => {
        console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
      });
    }); */
  },
};