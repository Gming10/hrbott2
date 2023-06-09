
const { logJoin } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerJoin',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logJoin(user);
      console.log(`${user.username}(${user.id}) a rejoin la salle`);
    }
    bot.message.send(`${user.username} a rejoin la salle`)
  }
};
