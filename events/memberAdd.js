module.exports = {
  name: 'guildMemberAdd',
  execute(client) {
// if not your server, do nothing.    
  if (member.guild.id !== "748276590089076886") return;

// Enter the channel id for whichever channel you want the greeting to appear in
  let channel = client.channels.cache.get('748276590089076889');

  channel.send(`Hey there <@!${member.id}>! Welcome to the Discord server!`);
  
  console.log(`Member ID: ${member.id}, Member: ${member}`);
  }
}