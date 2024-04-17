const { get } = require('axios');
const { writeFileSync, createReadStream, unlinkSync } = require('fs-extra');
const { shorten } = require('tinyurl');

module.exports.config = {
  name: "4k",
  version: "1.6.9",
  credits: "𝑴𝑹. 𝑨𝒀𝑨𝑵",
  hasPermission: 0,
  usePrefix: true,
  commandCategory: "image",
  cooldowns: 4,
  description: "Image enhancer",
  usage: "<p> 4k [reply to an image]",
  };

  module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;

    const photoUrl = event.messageReply?.attachments[0]?.url || args.join(' ');
    
    if (!photoUrl) {
      api.sendMessage("📝 | Please reply to a photo to proceed enhancing images...", threadID, messageID);
      return;
    }
    const finalUrl = await shorten(photoUrl);

      api.sendMessage("⏳ | Enhancing please wait...", threadID, async () => {
   try {

   const { data } = await get(`https://noobs-api.onrender.com/ayan/4k?img=${encodeURIComponent(finalUrl)}&key=ayan008`);

   const result = data.ayan;
   const author = data.author;
   const ShortUrl = await shorten(result);
     
   const path = __dirname + `/cache/fuck.jpg`;

   const img = (await get(result, { responseType: "arraybuffer" })).data;


   writeFileSync(path, Buffer.from(img, "binary"));
   api.setMessageReaction("✅", messageID, (err) => {}, true);

    api.sendMessage({
      body: `
      ✅ | Successfully Enhanced Your Image...
      🔰 | Author: 𝑴𝑹.𝑨𝒀𝑨𝑵 👑🪽 
      ☂ | Download Link: ${ShortUrl}`,
      attachment: createReadStream(path)
    }, threadID, () => unlinkSync(path), messageID);
  } catch (error) {
    api.sendMessage("❎ | " + error, threadID, messageID)
  }
 });
};
