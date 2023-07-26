
const { logLeave } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerLeave',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logLeave(user);
      console.log(`Au revoir ${user.username}(${user.id})`);
    }
    bot.message.send(``)
  }
};
