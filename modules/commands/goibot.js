const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "AYAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["میــــــرے نال ویا کــــــر لو 😊💔\n *★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ"  , "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Why you hate me..?? I am not your ex don't Hate me Please\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 \n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "بھای جان گروپ میں گندی باتیں نهیں گ\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکری\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Bandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "پونکی جا مینو کی\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "i love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Ary Yahin Hon Jan😗\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Tum sab Mujhe Pagal lagty ho😒🙄\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Ma kisi or ka Hu filahal 🥺🙈\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Apka Ana Dil dharkana pHr bot bol k Nas Jana😒\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Tum tu mujhe shkal sy Ghareeb lgty ho🙊\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Meri Gf kon Bnay gi 🥺🙁\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Haweli py q nhi ate Naraz Ho 🥺\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Babu ittu 🤏 sa Chumma dy do🥺🙈😘\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Baby tum Bachpan sy tharki Lgte ho meko🙁\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" ,"Raat ko ana Haweli py khushbu laga k😁🙊\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Raat Haweli py kon bula raha tha😒🙄\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Piyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Tum itny Masoom Ku Ho babu🥺❤️\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Aj tu tumhy Love you bolna Pary ga 🙁\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Tum loog matlbi ho sary Jao😞\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Setting Krwa Du Owner (Rayan) k Sath😒🙁\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Mujhe lgta hai Ma Single Maru ga🥺\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Bar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Tum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Babu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Mere ilawa sb Relationship ma han 🤝🥺\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Jab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Janu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Mazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "SOo JaO WarNa Mera Msg Aa Jaye Ga🙈\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Weight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Goadi lylo apun chota sa bacha hai🥹\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Ao apko chand py ly chalu meri jan🙈❤️\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Tum itne Tharki Q ho Jawn🤨\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Main apse nahi patny wala 🙈🙈🥹\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "tum ko meri ittu 🤏 C bhi yad nhi ati🥹\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Ao piyar karyn\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "Astaghfirullah Habibi tum kitne tharki ho🥹\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ" , "kya ham ap pr line mar sakte hn🥹👀\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Pta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Apkii Inhii harkt0n Kiiw WaJw Sy 2O22 ChaLw Gyw😩💔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "*Suno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️*\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Imagine I am your Ex 🥲say whatever you want to say\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Msg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Tum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "سوچا تھا ہرموڑ پر یاد کریں گے لیکن راستہ سیدھا تھا موڑ آیا ہی نہیں\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "کوئی مر نہیں جاتا انجیکشن لگوانے سے بس اٹھنے بیٹھنے کے انداز بدل جاتے ہیں\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "تیری دوستی میں دیوانے ہوگئے تجھے اپنا بناتے بناتے خود سے بیگانے ہوگئے پکار لے پیار سے ایک بار میرے دوست مرغے کی آواز سنے زمانے ہو گئے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ماموں ماموں کہہ کر لپٹ گئے وہ بچے جن کی ماں جانو جانو کہہ کر پکارتی تھی\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "میں نے تو یوں ہی کہا تھا عشق میں مر جاؤں گا اسے اب ضد ہے کہ مر کے دکھاؤ ہمیں\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "چھوڑو پیارومحبت کو یہ بتاو .آپکی گلی میں قلفی والا آنا شروع ہوگیا\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ﺟﺲﮐﯽ ﺷﺎﻋﺮﯼ ﮐﺎ ﻋﻨﻮﺍﻥ ﻟﮍﮐﯽ ﮨﮯ  .ﻣﯿﺮﯼ ﻧﻈﺮ ﻣﯿﮟ ﻭﮦ ﺍﻧﺴﺎﻥ ﭨﮭﺮﮐﯽ ﮨﮯ\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "دشمنوں کے حسبِ عداوت تین درجے ہیں۔ دشمن، جانی دشمن اور رشتے دار\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ہم نے مانا کہ رپلائی نہ کرو گے تم لیکن ٹرائی کرتے رہیں گے ہم بھی بلاک ہونے تک\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ایک سال سے میں شادی کے لیے جو وظیفہ پڑھ رہا تھا اب جا کر پتہ چلا وہ تو سعودی عرب کا قومی ترانہ ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "پیدا ہوا وکیل تو شیطان نے بھی کہا لو میاں آج ہم بھی صاحبِ اولاد ہوگئے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "کسی کو کھونے کا غم کیا ہوتا ہے یہ کل رات پتہ چلا۔جب مونگ پھلی کا ایک دانہ چھلکوں میں گم ہوگیا۔\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ایک وقت تھا جب موبائل گرتا تھا تو بیٹری باہر آجاتی تھی۔ آج کل موبائل گرے تو دل باہر آجاتا ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "صبح اٹھ کر الله کا شکر ادا کرو کے تم زندہ ہو اور پھر اسکے بعد برش کرو تاکہ دوسرے بھی زندہ رہیں\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "دور حاضر میں وہی شخص سر اٹھا کر چل سکتا ہے. جس کے پاس موبائل نہیں\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "گرمیاں آگئیں ہیں اب وہ برف لینے آیا کرے گی\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "جب اکیلا ٹیچر سارے سبجیکٹ نہیں پڑھا سکتا تو ایک اکیلا سٹوڈنٹ سارے سبجیکٹ کیسے پڑھ سکتا ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "کل موبائل خراب تھا تو رات ٩ بجے ہی نیند آ گئی. گھر والے اٹھا کر ہسپتال لے گئے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "جب میں اداس ہوتا ہوں تو گانا گاتا ہوں پھر مجھے تسلی ہو جاتی ہے کہ میری آواز میرے حالات سے بھی زیادہ خراب ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "بابا جی کہتے ہیں یہ بات کالے لوگوں نے ہی پھیلائی ہے کہ...کالے لوگ وفا کرتے ہیں\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "داڑھی نہ ہو تو لڑکوں کی شکل خالی پلاٹ جیسی لگتی ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ایک شیخ صاحب دو گھنٹے فون پر بات کرنے کے بعد فوت ہو گئے. کیونکہ وہ پیکج لگانا بھول گئے تھے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "تندوری روٹی میں پتا نہیں نمک ہوتا ہے یا پسینہ، پر ہوتی بہت مزے کی ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "چاہے جتنا بھی پڑھ لو، جتنے بھی اچھے گریڈز لے لو. کبھی بھی اور سناؤ کا جواب نہیں دے پاؤ گے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ایک تو مجھے یار کی جدائی مار گئی اور دوسرا خوبصورت ہمسائی مار گئی\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "یں کیسے سناؤں تمہیں دل کی داستان میرے پاس تو تمہارا نمبر ہی نہیں ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "اتنی سی خواہش ہے اس دل کی پہلے وفا ، پھر نکاح ، پھر نِکی نِک\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "کچھ لوگوں کو لعنت دو تو لعنت بھی کہتی ہے .مجھ سے نہ ہو پاوے گا یہ مجھ سے اوپر کی چیز ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", ".غصے کا آنا مرد ہونے کی نشانی ہےاورغصے کو پی جانا شادی شدہ مرد ہونے کی نشانی ہے\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "سنو تم تھوڑا جلدی Online آیا کرو .میری آدھی Battery تمہیں Miss کرتے کرتے Use ہوجاتی ہے 🙈 \n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "آپ لوگوں کی محبت مجھے کھینچ لاتی ہے .ورنہ میرا یہاں کون سا سسرال ہے", "اپنی بہن کی قدر کیا کرو ظالموں تمہارا رشتہ وہی لینے جائے گی۔\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "𝐇𝐚𝐢𝐧 𝐤𝐫 𝐛𝐚𝐤𝐰𝐚𝐬\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "RAYAN BHOOT UDAS HAI OUS KHAYAL RAKHA KRO\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "g meri dil ruba\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Love you ummmmmmmmah maza aya\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "suno kal naha laina yahan tak smell a Rahi apse\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "mera boss (RAYAN) hai nikal tu\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "tmny mujy tharki bola tha na chal Nikal ab\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "haye ummmmmmmmmmmmmmmmmmmmm bot ki janu\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "miss you alot kahan tha tu\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "chalo Allah Hafiz\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ڈھونڈ لیا تجھ سےملنے کا طریقہ 😜 ہم تیری گلی میں انڈے بیچے گے 🤣\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ابھی تو چند لفظوں میـــں سمیٹا ہے تجھے میــــں نــے__!ابھی تو میـــری کتابوں میـــں تیــــری تفسیرباقی ہــے__\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "❤️Miss you oyee\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "❤️mera owner ki birthday (7/12/2001)\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "kash ma andha hota or yah fzol logo ki na sunta🤐\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "RAYAN FB CHORE KR CHALA GYA OUSY LA KR AWO MERA DIL NAI KR RAHA MISS YOU RAYAN ANSARI 😭😭😭\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Tm wohe hona jo ib ib krta rahta group ma\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Hain kr kr bakwas\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "دنیا میں اچھا آدمی ڈھونڈنا بڑا مشکل ہے 😍پر میں حیران ہوں آپ لوگوں نے مجھے ڈھونڈا کیسے🤣🙈😂\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "bewafa bewafa nikli ha tu jhoota payar kita ay tu\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "ma pagal nai mera damag kharab ha\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "yo yo kura Singh\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "sidhu mosawala khud mar gya pr yateen hammy kar gya\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "kash ma ameer hota or tumy Gari la kr deta or phr tm ous py manga yahh Allah 😛🤣\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "kash Rayan mujy chore da phr ma be rr krna jata\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Payar nai krta koi fb py kse se sb SB tharki ref you\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "bak bak krna se acha ha tm mar jao\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "Naila kahan hoti aj kal ous ka kka WhatsApp he da do\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "main dhoondne ko zamaana ma jab wafa nikla\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "لوگ پتہ نہیں کیسے رنگ بدلتے ہیںمیں تو پہلے بھی کالا تھا اب بھی کالا ہوں 🙂\n★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ", "پـــٹ جـــاؤ یــا پــٹا لــو ؛ 😩❤️🌏\n𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ᖇᗩYᗩᑎ"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "owner k")) {
     return api.sendMessage("️ AYAN Chowdhury", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat sun")) {
     return api.sendMessage("হুম বলেন!!🫰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " bot love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited Jnu😘😁", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("️Hello-!!🐱", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "gd morning")) {
     return api.sendMessage("️Good Morning-!!🏞️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "gd night") || (event.body.toLowerCase() == "gd night")) {
     return api.sendMessage("️Gd Night", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️ আল্লাহ মাফ করুক||এই ইমোজিটা দিবেন না পিলিজ\n\nকারণ এই ইমোজির সাথে আল্লাহ হর তুলতা করা হয় তাই দিবেন না।", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("️দাঁত খুলে যাবে-!!😒", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️মন খারাপ কেন গো-??🥲", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "bot amr basa kothay?") || (event.body.toLowerCase() == "bot amr basha kothay?")) {
     return api.sendMessage("️আপনার বাসা আপনি যানেন আমি যানবো কেমনে-!!😳", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("️Hello-!!❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("️সোর হালার পুত কিস আপনার জান রে দেন-!!😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bujlam na") || (event.body.toLowerCase() == "buji nai")) {
     return api.sendMessage("️আপনার বুজা লাগবে না-!!😌", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {
     return api.sendMessage("️আস্তাগফিরুল্লাহ এগুলো ভালো না-!!🙂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot kar") || (event.body.toLowerCase() == "bot kar at")) {
     return api.sendMessage("️Mohammad Ayan\n \nhttps://www.facebook.com/AYAN.JANU.LOVE.YOU.MY.HEART", threadID, messageID);
   };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `꧌꧍᪥${name}᪥꧌꧍\n━━━━━━━━━━━━━━━━\n ${rand}\n━━━━━━━━━━━━━━━━`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
