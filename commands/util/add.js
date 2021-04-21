// The Adding command!
module.exports = {
  name: "add",
  desription: "simple adding function",
  args: true,
  execute(message, args) {
    if (args.length < 2) {
      message.channel.send("Not enough maths! Try `!add 2 2`")
      return
    }
    let product = 0
    args.forEach((value) => {
      product = product + parseFloat(value)
    })
    message.channel.send(args + " = " + product.toString())
  }
}