// Roll the Die! Refactored from my Twitch D20 bot.
module.exports = {
  name: "d20",
  description: "Roll a 20 sided die",
  execute(client, message) { 
    const sides = 20;
    const roll = Math.floor(Math.random() * sides) + 1;

    if (roll == 20) {
      message.channel.send(`DAMN SON!, You rolled a ${roll}!`)
    } else if (roll == 1) {
      message.channel.send(`HA!, Sucker. You just rolled a ${roll}`)
    } else if (roll== 5){
      message.channel.send(`You just rolled a ${roll}. Doc disliked that....`)
    }else {
      message.channel.send(`You rolled a ${roll}`)
    }
  }
}