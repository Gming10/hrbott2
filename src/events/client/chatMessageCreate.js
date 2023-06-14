const { commandHandler } = require("../../handlers/handlePrefix");
const { logMessages } = require("../../assets/logs/logger");

module.exports = {
  name: "chatMessageCreate",
  once: false,
  async execute(bot, user, message) {
    const prefix = bot.config.prefix;
    if (bot.logs.messages) {
      console.log(`[${user.username}]: ${message}`);
      logMessages(user, message);
    }
    if (message.startsWith(prefix)) {
      commandHandler(bot, user, message.slice(prefix.length));
    } else {
      return;
    } 
  }
  module.exports = {
  name: "chatMessageCreate",
  once: false,
  async def on_chat(self, user: User, message: str) -> None:
    try:
        if message.startswith('!'):
            roomUsers = (await self.highrise.get_room_users()).content
            emote_name = None
            if "kiss" in message:
                emote_name = "emote-kiss"
            elif "Haha" in message:
                emote_name = "emote-laughing"
            if emote_name is not None:
                for roomUser, _ in roomUsers:
                    await self.highrise.send_emote(emote_name, roomUser.id)
            else {
                return;
              }
};
