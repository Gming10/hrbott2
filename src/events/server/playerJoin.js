
const { logJoin } = require("../../assets/logs/logger");

module.exports = {
  name: 'playerJoin',
  once: false,
  async execute(bot, user) {
    if (bot.logs.join) {
      logJoin(user);
      console.log(`Bienvenue à vous ${user.username}(${user.id} faites comme chez vous`);
    }
    bot.message.send(`VIVE LES MOUSQUETAIRES !`)
  }
};
