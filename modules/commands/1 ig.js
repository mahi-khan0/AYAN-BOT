/** Don't change Credit...AYAN is real owner...Fb: https://www.facebook.com/profile.php?id=61558522534273**/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AYAN",
  description: "command",
  commandCategory: "prefix reply",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["__🌺༅༎প্রিয়༅༎🌺\n🍂এ’༎❈জীবনে’༎❈শত’༎\n❈উপহারের’༎❈মাঝে’༎❈পাওয়া’༎\n❈শ্রেষ্ঠ’༎❈উপহার’༎❈তুমি’༎\n❈┇┇┇┇┇🖤\n┇┇┇┇♥️\n┇┇┇💚\n┇┇💙\n┇💛\n❤️",
"𒊹__༆༄🍁🌺🦋༄༆ღ.∬\n\n●══❥𝄞⋆⃝༎︵།།ক্ষণিকের།།প্রেম།།\n\nচাইনা, །།সারা།།জীবনের།།\n\nভালোবাসা།།হতে།།চাই||-🐰🤍🖇️🌻",
"●══❥𝄞⋆⃝༎︵།།বাহিরে ভালো আছি\nবলাটা ফর্মালিটি, আর ভেতরে\nখারাপ থাকাটা রিয়ালিটি। ─༅༎•🌺🌸༅༎•─",
"🥀🍁,’𝄞⋆⃝ আমাকে খুশি করতে খুব  \nবেশি পরিশ্রমের প্রয়োজন নেই,\n\n❥︎❥︎༄༎ຶ༎ຶতোমার উপস্থিতি যথেষ্ট,✧\n🌺✧🌺꧂┊┊┊⇣❥┊┊⇣❥┊⇣❥⇣💕",
"🐰✨𝐭𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞!-💜💭🐾❥──🦋༄࿐হাওয়া তো পাগল\nহয়, তাই মাতাল এই চোখ তোর\n\nদিকে তাকিয়ে আজীবন নির্বাক হোক┇┇┇┇┇🖤\n┇┇┇┇♥️\n┇┇┇💚\n┇┇💙\n┇💛\n❤️",
"ღ۵༎🌷💜ღ۵༎\n\n_ একটি’༎ ভালোবাসার ‘༎সম্পর্ক’༎ হলো’༎\n বাতাসের ‘༎মতো যা ‘༎দেখতে ‘༎পাওয়া ‘༎যায় না’༎\n তবে ‘༎অনুভব’༎ করতে ‘༎\n \nপারা ‘༎যায়-!!-🍒🐰🌈",
"ლ🦋ლ──🐰💚🌺\n\nসঠিক༎মানুষ༎\nকখনো༎ছেড়ে༎যায়༎না༎\n\nতারা༎সব༎সময়༎একটা༎কারণ༎খুঁজে༎\nকাছে༎থাকার༎জন্য༎\n\n<<-)♥️✨🪄🎋🎈",
"─༅༎༅💙🌼🩷༅༎༅\n\n─বাগানের ༎ঝরা ফুল, ༎\nআকাশের༎ তারা! ༎\n  আমি༎ কি থাকতে ༎পারি༎\n তোমাকে༎ ছাড়া।-!!🫂",


"🍂❥»⑅⃝✺🍂প্রিয়༎ তোমার\n\nকোলে ༎মাথা রেখে༎ আকাশ ༎\n\nদেখার খুব ইচ্ছা।┇┇┇┇♥️\n┇┇┇💚\n┇┇💙\n┇💛\n❤️",
"🤲\n👀࿐\n\nএতো ঢং বাদ দিয়ে\n-Ego-বাদ দিয়ে ogo বলে ডাকো😁\n-আমি Kigo বলে সাড়া দিবো❞࿐😼࿐" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/1tCD3NHR/received-1532455747318813.jpg",
"https://i.postimg.cc/rF8PRhQL/received-1506499159899708.jpg",
"https://i.postimg.cc/mZdQV8T4/received-800686498144546.jpg",
"https://i.postimg.cc/9MQD7HR7/received-1229387115102337.jpg",
"https://i.postimg.cc/sft5t1GH/received-7143358379106394.jpg",
"https://i.postimg.cc/bvJGGj22/received-654761663457016.jpg",
"https://i.postimg.cc/BZxvnvwV/received-1393821892010148.jpg",
"https://i.postimg.cc/B62JbhNK/received-1565814980924378.jpg",
"https://i.postimg.cc/HsXsFWKp/received-709700554482897.jpg",
"https://i.postimg.cc/m2stLF7c/received-893976172476330.jpg",
"https://i.postimg.cc/DypkC9f2/received-318608824583631.jpg",
"https://i.postimg.cc/fTyTTjJR/received-366538589716917.jpg"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
