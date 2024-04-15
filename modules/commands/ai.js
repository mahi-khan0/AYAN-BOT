module.exports.config = {
 name: "ai",
 version: "1.0.1", 
 hasPermssion: 0,
 credits: "AYAN",
 description: "user",
 commandCategory: "ask",
	usePrefix: true,
 cooldowns: 1,
 dependencies: 
 {
	"request":"",
	"fs-extra":"",
	"axios":""
 }
};

  start: async function({ nayan, events, args, Users }) {

    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const uid = events.senderID;
  var nn = await Users.getNameUser(uid);
  let np = args.join(" ");
  const { gpt } = require("nayan-server");

gpt({
    messages: [
        {
            role: "assistant",
            content: "It's nice to meet you.\n\nHow are you today?"
        },
        {
            role: "user",
            content: `Hello, my name is ${nn}.`
        },
        {
            role: "assitant",
            content: `${nn}\n\nIt's nice to meet you.\n\nHow are you today?`
        }
    ],
    prompt: `${np}`,
    model: "GPT-4",
    markdown: false
}, (err, data) => {
    console.log(data)
  const answer = data.gpt
    var msg = [];
    {
        msg += `${nn}\n\n${answer}`
    }
    return nayan.reply({
        body: msg

    }, events.threadID, events.messageID);
  });

  }
};
