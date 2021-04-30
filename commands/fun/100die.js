// Roll the D100!
module.exports = {
  name: "d100",
  description: "Roll 1-100!",
  execute(client, message) { 
    const sides = 100;
    const roll = Math.floor(Math.random() * sides) + 1;

    if (roll == 100) {
      message.channel.send(`You rolled a ${roll}!. You probably cheated.`)
    } else if (roll == 1) {
      message.channel.send(`Not very lucky are you?. You just rolled a ${roll}`)
    } else if (roll== 69){
      message.channel.send(`${roll} Nice.`)
    } else if (roll==42){
      message.channel.send(`You just rolled a ${roll}. The meaning of life is at your grasp.`)
    } else {
      message.channel.send(`You rolled a ${roll}`)
    }
  }
}