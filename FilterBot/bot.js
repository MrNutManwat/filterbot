const disc = require("discord.js");
const fs = require("fs")
const token = "NDQ5MTg4NjM3MTEyOTI2MjA4.DehEJg.CI-s3sYF0mYhUSp3B-shOxgW-_8";
var filter = JSON.parse(fs.readFileSync('filter.json',"utf8"));
var bot = new disc.Client();
var preheck = "$";
bot.on("message", function(message) {
  var msg = message.content.toUpperCase();
  if (message.author.equals(bot.user)) return;
  var args = message.content.substring(preheck.length).split(" ");
for (x = 0; x < filter.length; x++) {
  if (msg == filter[x].toUpperCase()) {
    message.delete();
    return;
  }
}
switch (args[0]) {
  case "asdlick":
  message.author.lick("pussy")
}
});
bot.login(token)
