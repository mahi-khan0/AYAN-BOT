module.exports.config = {
	name: "spam",
	version: "1.0.0",
	hasPermission: 0,
	credits: "AYAN",//dont change credits
	usePrefix: true,
	description: "spam",
	commandCategory: "msg [amount]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 2000
	}
};

module.exports.run = function ({ api, event, Users, args }) {
  const permission = ["61557603311017"];
   if (!permission.includes(event.senderID))
   return api.sendMessage("Only Bot Admin Can Use this command", event.threadID, event.messageID);
  if (args.length !== 2) {
    api.sendMessage(`Invalid number of arguments. Usage: ${global.config.PREFIX}spam [msg] [amount]`, event.threadID);
    return;
  }
  var { threadID, messageID } = event;
  var k = function (k) { api.sendMessage(k, threadID)};

  const msg = args[0];
  const count = args[1];

  //*vonglap

for (i = 0; i < `${count}`; i++) {
 k(`${msg}`);
}

	}
