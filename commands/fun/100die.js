// Roll the D100!
module.exports = {
  name: "d100",
  description: "Roll 1-100!",
  execute(client, message) { 
    const sides = 100;
    const roll = Math.floor(Math.random() * sides) + 1;

    if (roll == 100) {
      return message.channel.send(`You rolled a ${roll}!. You probably cheated.`)
    } else if (roll == 1) {
      return message.channel.send(`Not very lucky are you?. You just rolled a ${roll}`)
    } else if (roll== 69){
      return message.channel.send(`${roll} Nice.`)
    } else if (roll==42){
      return message.channel.send(`You just rolled a ${roll}. The meaning of life is at your grasp.`)
    } else {
      return message.channel.send(`You rolled a ${roll}`)
    }
  }
}