
const { logLeave } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerLeave',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logLeave(user);
      console.log(`${user.username}(${user.id}) s'est barré`);
    }
    bot.message.send(`${user.username} s'est barré`)
  }
};
