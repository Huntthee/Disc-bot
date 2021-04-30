// The good ol math command, just multiplies atm. no calculator or anything.
module.exports = {
  name: "mult",
  description: "multiply 2 numbers",
  execute(client, message, args) {
    if (args.length < 2) {
      message.channel.send("Not enough maths! Try `!mult 2 2`")
      return
    }
    let product = 1
    args.forEach((value) => {
      product = product * parseFloat(value)
    })
    message.channel.send("And the total of " + args + " is! " + product.toString())
  }
}