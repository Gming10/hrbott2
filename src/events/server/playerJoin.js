
const { logJoin } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerJoin',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logJoin(user);
      console.log(`${user.username}(${user.id}) Bienvenue à vous faites comme chez vous`);
    }
    bot.message.send(`${user.username} Bienvenue à vous faites comme chez vous`)
  }
};
