(function (_0x4fe929, _0x2b44cc) {
  const _0x2a58cc = _0x4fe929();
  while (true) {
    try {
      const _0x58daff = -parseInt(_0x5633(118, -0x1c6)) / 1 * (parseInt(_0x5633(298, -0x1ee)) / 2) + -parseInt(_0x5633(778, 0x687)) / 3 * (-parseInt(_0x5633(504, 0x3b2)) / 4) + parseInt(_0x5633(1270, 0x3af)) / 5 * (-parseInt(_0x5633(233, -0x109)) / 6) + -parseInt(_0x5633(352, -0x33)) / 7 * (-parseInt(_0x5633(252, 0x1)) / 8) + parseInt(_0x5633(271, 0x3d1)) / 9 + parseInt(_0x5633(431, 0x306)) / 10 + -parseInt(_0x5633(1210, 0x6c9)) / 11 * (parseInt(_0x5633(1147, 0x5c4)) / 12);
      if (_0x58daff === _0x2b44cc) {
        break;
      } else {
        _0x2a58cc.push(_0x2a58cc.shift());
      }
    } catch (_0x36fbdc) {
      _0x2a58cc.push(_0x2a58cc.shift());
    }
  }
})(_0x38e2, 155296);
const _0x37c6dd = function () {
  let _0x3da212 = true;
  return function (_0x3c0302, _0x45ce67) {
    const _0x5da2ee = _0x3da212 ? function () {
      if (_0x45ce67) {
        const _0xa9e560 = _0x45ce67.apply(_0x3c0302, arguments);
        _0x45ce67 = null;
        return _0xa9e560;
      }
    } : function () {};
    _0x3da212 = false;
    return _0x5da2ee;
  };
}();
const _0x33f943 = _0x37c6dd(this, function () {
  return _0x33f943.toString().search("(((.+)+)+)+$").toString().constructor(_0x33f943).search("(((.+)+)+)+$");
});
_0x33f943();
const _0x4d0793 = function () {
  let _0x37ea17 = true;
  return function (_0x465946, _0x3a777b) {
    const _0x3ec907 = _0x37ea17 ? function () {
      if (_0x3a777b) {
        const _0x3f554c = _0x3a777b.apply(_0x465946, arguments);
        _0x3a777b = null;
        return _0x3f554c;
      }
    } : function () {};
    _0x37ea17 = false;
    return _0x3ec907;
  };
}();
function _0x5633(_0x33f943, _0x37c6dd) {
  const _0x38e291 = _0x38e2();
  _0x5633 = function (_0x56337d, _0x4660ee) {
    _0x56337d = _0x56337d - 118;
    let _0x55e44a = _0x38e291[_0x56337d];
    return _0x55e44a;
  };
  return _0x5633(_0x33f943, _0x37c6dd);
}
(function () {
  _0x4d0793(this, function () {
    const _0x3a5a8d = new RegExp("function *\\( *\\)");
    const _0x3016d3 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0xf0751e = _0x5a0987("init");
    if (!_0x3a5a8d.test(_0xf0751e + "chain") || !_0x3016d3.test(_0xf0751e + "input")) {
      _0xf0751e('0');
    } else {
      _0x5a0987();
    }
  })();
})();
const path = require("path");
const configPath = path.join(__dirname, "../config.cjs");
let config = require(configPath);
const fs = require('fs');
const {
  cmd,
  commands
} = require("../command");
const os = require('os');
const {
  runtime,
  fetchJson
} = require("../lib/functions");
const _0x539082 = {
  pattern: "menu",
  desc: "To get the menu.",
  react: '😚',
  category: "main",
  filename: __filename
};
cmd(_0x539082, async (_0x5ba78e, _0x35040f, _0x32dc6f, {
  from: _0x3fb4de,
  users: _0x4bdf21,
  quoted: _0x3446d7,
  body: _0x58cae2,
  isCmd: _0x5ba35f,
  command: _0x5c4d64,
  args: _0xd1d043,
  q: _0x53e470,
  isGroup: _0x1f30aa,
  sender: _0x430c19,
  senderNumber: _0xcd8748,
  botNumber2: _0x2e9752,
  botNumber: _0x5673c4,
  pushname: _0x4ad005,
  isMe: _0x1a3c4f,
  isOwner: _0x1f8853,
  groupMetadata: _0xc111b9,
  groupName: _0x1931d4,
  participants: _0x50cb5d,
  groupAdmins: _0x442277,
  isBotAdmins: _0x2f7d15,
  isAdmins: _0x4bd38e,
  reply: _0x30616a
}) => {
  try {
    const _0xc32ffb = () => {
      return Array.from(_0x4bdf21);
    };
    let _0x26a820 = _0xc32ffb.length;
    const _0x149e36 = {
      main: '',
      download: '',
      group: '',
      owner: '',
      convert: '',
      search: '',
      ai: '',
      fun: '',
      other: '',
      nsfw: '',
      settings: ''
    };
    for (let _0x53518c = 0; _0x53518c < commands.length; _0x53518c++) {
      if (commands[_0x53518c].pattern && !commands[_0x53518c].dontAddCommandList) {
        _0x149e36[commands[_0x53518c].category] += "┃  " + config.PREFIX + commands[_0x53518c].pattern + "\n";
      }
    }
    let _0x5b7766 = await fetchJson("https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/logo.json");
    let _0x16ac7f = "\n🧚‍♂️⃟🩵 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🧚‍♂️⃟🩵\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. \nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n┃✘◍ 1.𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦\n┃✘◍ 2.𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗢𝗣𝗧𝗜𝗢𝗡𝗦\n┃✘◍ 3.𝗔𝗜 𝗙𝗨𝗡\n┃✘◍ 4.𝗦𝗘𝗔𝗥𝗖𝗛 𝗣𝗢𝗪𝗘𝗥\n┃✘◍ 5.𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗭𝗢𝗡𝗘\n┃✘◍ 6.𝗙𝗨𝗡 &𝗚𝗔𝗠𝗘𝗦\n┃✘◍ 7.𝗠𝗔𝗜𝗡 𝗛𝗨𝗕\n┃✘◍ 8.𝗚𝗥𝗢𝗨𝗣 𝗚𝗔𝗠𝗘𝗦\n┃✘◍ 9.𝗨𝗦𝗘𝗙𝗨𝗟 𝗧𝗢𝗢𝗟𝗘𝗦\n┃✘◍ 10.𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 \n┃✘◍ 11.𝗡𝗦𝗙𝗪 𝗭𝗢𝗡𝗘\n┃\n┗━━━━━━━━━━━━━━━━\n📝 ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ᴄᴏʀʀᴇꜱᴘᴏɴᴅɪɴɢ ɴᴜᴍʙᴇʀ ᴛᴏ ᴇᴍʙᴀʀᴋ ᴏɴ ʏᴏᴜʀ ᴊᴏᴜʀɴᴇʏ !!!\n\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x28e024 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗠𝗗 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x4ffea8 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗠𝗗 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x2e8fa1 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗠𝗗 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x47ed69 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗠𝗗 𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x2507af = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x8cd0e6 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x5f1c4c = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x2bc219 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x1ffc8b = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x5678c3 = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    let _0x11fbcc = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0x4ad005 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🔖𝚄𝚜𝚎𝚛𝚜 : " + _0x26a820 + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n" + '' + "\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    const _0x29f89f = {
      url: _0x5b7766.allmenu
    };
    const _0x8a1a8 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x8a1a8.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x8a1a8.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x8a1a8.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x8a1a8.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x8a1a8.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x8a1a8.externalAdReply.mediaType = 0x1;
    _0x8a1a8.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x8a1a8.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x8a1a8.externalAdReply.renderLargerThumbnail = true;
    _0x8a1a8.externalAdReply.showAdAttribution = true;
    const _0x1067ef = {
      image: _0x29f89f,
      caption: _0x16ac7f,
      contextInfo: _0x8a1a8
    };
    const _0x2aa63a = await _0x5ba78e.sendMessage(_0x3fb4de, _0x1067ef);
    const _0x56fb63 = _0x2aa63a.key.id;
    _0x5ba78e.ev.on("messages.upsert", async _0x4df865 => {
      const _0x3f529a = _0x4df865.messages[0];
      if (!_0x3f529a.message) {
        return;
      }
      const _0xb485fd = _0x3f529a.message.conversation || _0x3f529a.message.extendedTextMessage?.["text"];
      const _0x493e49 = _0x3f529a.key.remoteJid;
      const _0x2c3904 = _0x3f529a.message.extendedTextMessage && _0x3f529a.message.extendedTextMessage.contextInfo.stanzaId === _0x56fb63;
      if (_0x2c3904) {
        const _0x486cb4 = {
          text: '🎃',
          key: _0x3f529a.key
        };
        const _0x1a25eb = {
          react: _0x486cb4
        };
        await _0x5ba78e.sendMessage(_0x493e49, _0x1a25eb);
        if (_0xb485fd === '1') {
          const _0x5abff0 = {
            url: _0x5b7766.ownermenu
          };
          const _0x3c2ae5 = {
            mentionedJid: ["94717775628@s.whatsapp.net"],
            groupMentions: [],
            forwardingScore: 0x3e7,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {},
            externalAdReply: {}
          };
          _0x3c2ae5.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x3c2ae5.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x3c2ae5.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x3c2ae5.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x3c2ae5.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x3c2ae5.externalAdReply.mediaType = 0x1;
          _0x3c2ae5.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x3c2ae5.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x3c2ae5.externalAdReply.renderLargerThumbnail = true;
          _0x3c2ae5.externalAdReply.showAdAttribution = true;
          const _0x1a5e9b = {
            image: _0x5abff0,
            caption: _0x28e024,
            contextInfo: _0x3c2ae5
          };
          await _0x5ba78e.sendMessage(_0x493e49, _0x1a5e9b);
        } else {
          if (_0xb485fd === '2') {
            const _0xa3fbaf = {
              url: _0x5b7766.convertmenu
            };
            const _0x340e02 = {
              mentionedJid: ["94717775628@s.whatsapp.net"],
              groupMentions: [],
              forwardingScore: 0x3e7,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {},
              externalAdReply: {}
            };
            _0x340e02.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x340e02.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x340e02.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x340e02.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x340e02.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x340e02.externalAdReply.mediaType = 0x1;
            _0x340e02.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x340e02.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x340e02.externalAdReply.renderLargerThumbnail = true;
            _0x340e02.externalAdReply.showAdAttribution = true;
            const _0x50cff9 = {
              image: _0xa3fbaf,
              caption: _0x4ffea8,
              contextInfo: _0x340e02
            };
            await _0x5ba78e.sendMessage(_0x493e49, _0x50cff9);
          } else {
            if (_0xb485fd === '3') {
              const _0x58b92d = {
                url: _0x5b7766.aimenu
              };
              const _0x13a2dc = {
                mentionedJid: ["94717775628@s.whatsapp.net"],
                groupMentions: [],
                forwardingScore: 0x3e7,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {},
                externalAdReply: {}
              };
              _0x13a2dc.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
              _0x13a2dc.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x13a2dc.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x13a2dc.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x13a2dc.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x13a2dc.externalAdReply.mediaType = 0x1;
              _0x13a2dc.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
              _0x13a2dc.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
              _0x13a2dc.externalAdReply.renderLargerThumbnail = true;
              _0x13a2dc.externalAdReply.showAdAttribution = true;
              const _0x14a0fa = {
                image: _0x58b92d,
                caption: _0x5f1c4c,
                contextInfo: _0x13a2dc
              };
              await _0x5ba78e.sendMessage(_0x493e49, _0x14a0fa);
            } else {
              if (_0xb485fd === '4') {
                const _0x2772b9 = {
                  url: _0x5b7766.searchmenu
                };
                const _0x58a8e6 = {
                  mentionedJid: ["94717775628@s.whatsapp.net"],
                  groupMentions: [],
                  forwardingScore: 0x3e7,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {},
                  externalAdReply: {}
                };
                _0x58a8e6.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                _0x58a8e6.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x58a8e6.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0x58a8e6.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x58a8e6.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x58a8e6.externalAdReply.mediaType = 0x1;
                _0x58a8e6.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                _0x58a8e6.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                _0x58a8e6.externalAdReply.renderLargerThumbnail = true;
                _0x58a8e6.externalAdReply.showAdAttribution = true;
                const _0x49af32 = {
                  image: _0x2772b9,
                  caption: _0x2bc219,
                  contextInfo: _0x58a8e6
                };
                await _0x5ba78e.sendMessage(_0x493e49, _0x49af32);
              } else {
                if (_0xb485fd === '5') {
                  const _0x16aeee = {
                    url: _0x5b7766.dlmenu
                  };
                  const _0x23574d = {
                    mentionedJid: ["94717775628@s.whatsapp.net"],
                    groupMentions: [],
                    forwardingScore: 0x3e7,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {},
                    externalAdReply: {}
                  };
                  _0x23574d.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                  _0x23574d.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x23574d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                  _0x23574d.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x23574d.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                  _0x23574d.externalAdReply.mediaType = 0x1;
                  _0x23574d.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                  _0x23574d.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                  _0x23574d.externalAdReply.renderLargerThumbnail = true;
                  _0x23574d.externalAdReply.showAdAttribution = true;
                  const _0x45f0df = {
                    image: _0x16aeee,
                    caption: _0x2e8fa1,
                    contextInfo: _0x23574d
                  };
                  await _0x5ba78e.sendMessage(_0x493e49, _0x45f0df);
                } else {
                  if (_0xb485fd === '6') {
                    const _0xabeee3 = {
                      url: _0x5b7766.funmenu
                    };
                    const _0x11952a = {
                      mentionedJid: ["94717775628@s.whatsapp.net"],
                      groupMentions: [],
                      forwardingScore: 0x3e7,
                      isForwarded: true,
                      forwardedNewsletterMessageInfo: {},
                      externalAdReply: {}
                    };
                    _0x11952a.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                    _0x11952a.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x11952a.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                    _0x11952a.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x11952a.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                    _0x11952a.externalAdReply.mediaType = 0x1;
                    _0x11952a.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                    _0x11952a.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                    _0x11952a.externalAdReply.renderLargerThumbnail = true;
                    _0x11952a.externalAdReply.showAdAttribution = true;
                    const _0x33c1ab = {
                      image: _0xabeee3,
                      caption: _0x2507af,
                      contextInfo: _0x11952a
                    };
                    await _0x5ba78e.sendMessage(_0x493e49, _0x33c1ab);
                  } else {
                    if (_0xb485fd === '7') {
                      const _0x404aa3 = {
                        url: _0x5b7766.mainmenu
                      };
                      const _0x2adc47 = {
                        mentionedJid: ["94717775628@s.whatsapp.net"],
                        groupMentions: [],
                        forwardingScore: 0x3e7,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {},
                        externalAdReply: {}
                      };
                      _0x2adc47.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                      _0x2adc47.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x2adc47.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                      _0x2adc47.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x2adc47.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                      _0x2adc47.externalAdReply.mediaType = 0x1;
                      _0x2adc47.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                      _0x2adc47.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                      _0x2adc47.externalAdReply.renderLargerThumbnail = true;
                      _0x2adc47.externalAdReply.showAdAttribution = true;
                      const _0xe0776c = {
                        image: _0x404aa3,
                        caption: _0x47ed69,
                        contextInfo: _0x2adc47
                      };
                      await _0x5ba78e.sendMessage(_0x493e49, _0xe0776c);
                    } else {
                      if (_0xb485fd === '8') {
                        const _0x194293 = {
                          url: _0x5b7766.groupmenu
                        };
                        const _0x820f4 = {
                          mentionedJid: ["94717775628@s.whatsapp.net"],
                          groupMentions: [],
                          forwardingScore: 0x3e7,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {},
                          externalAdReply: {}
                        };
                        _0x820f4.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                        _0x820f4.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0x820f4.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                        _0x820f4.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0x820f4.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                        _0x820f4.externalAdReply.mediaType = 0x1;
                        _0x820f4.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                        _0x820f4.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                        _0x820f4.externalAdReply.renderLargerThumbnail = true;
                        _0x820f4.externalAdReply.showAdAttribution = true;
                        const _0x2d07df = {
                          image: _0x194293,
                          caption: _0x8cd0e6,
                          contextInfo: _0x820f4
                        };
                        await _0x5ba78e.sendMessage(_0x493e49, _0x2d07df);
                      } else {
                        if (_0xb485fd === '9') {
                          const _0x35adc3 = {
                            url: _0x5b7766.usefulmenu
                          };
                          const _0x18b49c = {
                            mentionedJid: ["94717775628@s.whatsapp.net"],
                            groupMentions: [],
                            forwardingScore: 0x3e7,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {},
                            externalAdReply: {}
                          };
                          _0x18b49c.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                          _0x18b49c.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                          _0x18b49c.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                          _0x18b49c.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                          _0x18b49c.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                          _0x18b49c.externalAdReply.mediaType = 0x1;
                          _0x18b49c.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                          _0x18b49c.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                          _0x18b49c.externalAdReply.renderLargerThumbnail = true;
                          _0x18b49c.externalAdReply.showAdAttribution = true;
                          const _0x5dd902 = {
                            image: _0x35adc3,
                            caption: _0x1ffc8b,
                            contextInfo: _0x18b49c
                          };
                          await _0x5ba78e.sendMessage(_0x493e49, _0x5dd902);
                        } else {
                          if (_0xb485fd === '11') {
                            const _0x2030d7 = {
                              url: _0x5b7766.nsfwmenu
                            };
                            const _0x48412a = {
                              mentionedJid: ["94717775628@s.whatsapp.net"],
                              groupMentions: [],
                              forwardingScore: 0x3e7,
                              isForwarded: true,
                              forwardedNewsletterMessageInfo: {},
                              externalAdReply: {}
                            };
                            _0x48412a.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                            _0x48412a.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                            _0x48412a.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                            _0x48412a.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                            _0x48412a.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                            _0x48412a.externalAdReply.mediaType = 0x1;
                            _0x48412a.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                            _0x48412a.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                            _0x48412a.externalAdReply.renderLargerThumbnail = true;
                            _0x48412a.externalAdReply.showAdAttribution = true;
                            const _0x10979f = {
                              image: _0x2030d7,
                              caption: _0x11fbcc,
                              contextInfo: _0x48412a
                            };
                            await _0x5ba78e.sendMessage(_0x493e49, _0x10979f);
                          } else {
                            if (_0xb485fd === '10') {
                              const _0x2ec0cc = {
                                url: _0x5b7766.settingmenu
                              };
                              const _0xc53f09 = {
                                mentionedJid: ["94717775628@s.whatsapp.net"],
                                groupMentions: [],
                                forwardingScore: 0x3e7,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {},
                                externalAdReply: {}
                              };
                              _0xc53f09.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                              _0xc53f09.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                              _0xc53f09.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                              _0xc53f09.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                              _0xc53f09.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                              _0xc53f09.externalAdReply.mediaType = 0x1;
                              _0xc53f09.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                              _0xc53f09.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                              _0xc53f09.externalAdReply.renderLargerThumbnail = true;
                              _0xc53f09.externalAdReply.showAdAttribution = true;
                              const _0x39caf9 = {
                                image: _0x2ec0cc,
                                caption: _0x5678c3,
                                contextInfo: _0xc53f09
                              };
                              await _0x5ba78e.sendMessage(_0x493e49, _0x39caf9);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x6d0def) {
    console.log(_0x6d0def);
    _0x30616a('' + _0x6d0def);
  }
});
function _0x38e2() {
  const _0x175334 = ['DcGPj', 'ons', "MODE ", 'ArxWg', 'IdkNr', 'eegdW', 'parti', "𝗢𝗨𝗣 𝗚", 'total', "t to ", "𝗠𝗗 𝗗𝗢", 'ᴛᴇʟᴇꜱ', "T SET", 'essag', "❯━━\n┃", 'dAttr', "to re", '**Cur', "𝗦𝗙𝗪 𝗭", " ANJU", 'iQIby', 'CwMtX', "e) {}", 'GGvjI', 'ageId', 'fKLfT', 'rFwCw', 'AzAnD', 'vmffO', 'JSNxf', 'QbYcd', "ᴀʏ 📆❯", "𝚛𝚖 : ", "𝚎𝚛𝚜 :", 'GnaFu', 'cGKpB', 'VOICE', 'Kecks', " MD V", 'NJUBn', 'GjTYx', 'DYijY', 'nTugd', "....\n", "AUTO ", "ps'.", "rn th", 'FfPyh', 'sourc', 'comma', 'NG:**', 'YvtIj', 'Xzpwj', 'GzhWN', '88931', 'HDiOt', 'filen', '.com/', 'ᴏᴍᴍᴀɴ', "act  ", " 15.2", "┃ 7.1", 'XWnxX', 'QYJFm', "\n🧚‍♂️⃟🩵 𝗤", "** ", 'tterM', 'jfuUf', 'sed', 'GcZfv', 'MtkQl', "de to", 'fun', 'YMPtQ', "ᴍɪᴋᴀ ", 'qlClL', 'jtYav', "6.2 D", '8.1', 'cSwAv', 'conve', " sett", 'REACT', 'fZxwM', " REPL", "4.1 E", "CCO B", " 📆 ᴛᴏ", " ʏᴏᴜʀ", "┃ 5.2", 'ature', '❯━━━━', '𝚙𝚝𝚒𝚖𝚎', "ꜱ ꜰᴏʀ", 'etter', '1.jpg', ".2 Di", '𝗚𝗥𝗢𝗨𝗣', "come ", '𝚕𝚞𝚐𝚒𝚗', 'rende', "k  \n┃", 'warde', "nd  \n", "g has", 'jcrEV', "6.1 E", 'YIAIZ', " 9.2 ", 'QCTrv', "ᴇᴛᴇ ʏ", 'nstru', "ate T", "to vo", 'niya/', 'vypDt', "read ", '15.1', "iew  ", "𝗡𝗦\n┃✘", "r has", '557@n', "ᴋ ᴏɴ ", " \n┃ \n", "PING ", "ANTI ", " 6.2 ", 'heads', "ine m", '**PRE', 'yZvJv', " priv", 'aACBK', 'XLRZF', "\n┃\n┃ ", 'UYPus', 'RpWfq', "e Tod", 'BAD', 'ddCom', 'ᴠᴇɴᴛᴜ', 'rrash', 'heapU', 'apply', 'GnzVX', 'YCZfq', 'NEWS', 'ZdZCp', 'tting', "ᴛᴏ ᴅᴀ", '32999', 'path', 'cipan', "𝐀𝐍𝐉𝐔 ", 'PWzjq', "en en", "ᴀᴛᴇ ʙ", " Enab", 'MpVif', " ᴜꜱɪɴ", "S SET", 'JaiaU', 'exten', 'vHXIJ', " 𝐌𝐃", "┃ 3.2", 'TYPIN', "MB / ", "ome  ", " opti", 'TKKpU', 'GkSaK', 'INGS*', '8@s.w', '𝗧𝗜𝗡𝗚𝗦', "ʀ ᴀᴅᴠ", '4.𝗦𝗘𝗔', 'fJKAL', 'DATA/', "ate  ", "*\n┃ 5", 'OfdRG', 'BKmmH', '4.1', "to st", '1.4', "◍ ꜱᴇʟ", "❮📝 ᴅᴇ", 'snlkW', 'HGCbs', 'zTMIM', 'sdwmw', 'whJHV', 'rMess', 'hubus', 'ika/Q', 'RwBtQ', '53748LoklWv', '𝚕𝚊𝚏𝚘𝚛', 'uYbBF', 'uthgz', "TO ST", "ᴛ.\n\n┏", 'searc', 'com/M', ". \nᴛʜ", 'teStr', 'hostn', "𝚗 : ", ".\nᴛʜᴀ", 'ibuti', 'fdYQO', "view ", "━\n┃🗣️ ", "\n┃ 1.", 'QdssN', '𝗧𝗢𝗢𝗟𝗦', "𝐔𝐄𝐄𝐍 ", "Y:** ", '_ANJU', " 11.𝗡", "CK SE", 'ZXyOv', "Now :", 'ᴜꜱɪɴɢ', 'wtVBG', '$]*)', 'vfgGo', '11.1', '/main', 'ist', "┃  ", 'wZikR', 'oMDKi', '9.2', 'EhoLt', 'rocco', 'setti', "ᴜʀᴛ.\n", 'ezWfi', "ʏᴏᴜʀ ", " \n┃ *", 'dUhpJ', 'mainm', " : ", "𝚄𝚜𝚎𝚛 ", 'funme', 'bled.', 'qkTLZ', 'LjXHT', 'PLCNc', 'dontA', 'Hbevv', " \n┃✘◍", " : gi", 'tter', 'fIVTc', 'Enabl', 'YcxEa', 'MSrac', '275NJYZJS', 'OzqGP', "ACT S", "er ha", "ɴɢ ʙᴏ", "🧚‍♂️⃟🩵\n\n✘", 'thvcQ', "ic'.", 'gBbFY', 'meStr', 'Pwbas', "━━\n┃\n", 'eInfo', '/LOGO', "'grou", 'brBum', 'sage', "ᴜᴇᴇɴ ", '0.𝗦𝗘𝗧', " repl", "MB\n┗━", 'tent.', 'DVvuh', '8.2', " ᴀɴᴊᴜ", 'pHaoP', "s has", " ᴅᴀʏ ", " 14.2", 'hmenu', "orts ", "o rec", "n dis", ".𝗙𝗨𝗡 ", " STAT", 'hgbDq', "━\n> Q", 'ECjUW', 'OkBoc', 'omman', "et mo", "e  \n┃", 'QgEHy', 'QlcXe', 'text', "is\")(", "━━━\n📝", "\n┃🤴𝙾𝚠", "ᴅꜱ 📜 ", "𝗥 𝗖𝗢𝗠", 'gsljF', 'Setti', '𝐐𝐔𝐄𝐄𝐍', 'test', "co bl", '21815', 'pREKu', 'ᴇꜱᴘᴏɴ', 'ANTI_', 'tXDkv', '395reGFRY', "T:** ", 'PREFI', '.𝗨𝗦𝗘𝗙', '13.2', 'plpag', '📆❯━━━', '𝗢𝗣𝗧𝗜𝗢', 'DHbJb', 'Qᴜᴇᴇɴ', "𝗢𝗪𝗘𝗥\n", 'aimen', ".\n> ɢ", '5.2', "rn of", 'group', 'AcmDg', 'ᴇʟᴇᴛᴇ', " 📆❯━━", 'UJCGQ', "ɪᴋᴀ .", "\n┃ 📅 ", 'zGwNH', "\n┃📝 𝙿", " ʙʏ ᴍ", 'CO_BL', 'tIfAL', 'STATU', 'ᴀᴅᴠᴇɴ', '.𝗗𝗢𝗪𝗡', 'WELCO', '𝗡𝗩𝗘𝗥𝗧', "ᴇʏ !!", "𝚘𝚝 : ", "U_MD\n", 'funct', 'ngmen', 'LjKal', '6.2', "𝗥𝗖𝗛 𝗣", '*READ', 'nLKCw', 'XXtdR', 'actio', "𝚘𝚜𝚝 :", "er  \n", 'zTpdF', 'ND-Ja', 'ordin', 'Petnm', 'xglCk', 'bDefY', 'xJRbl', 'isFor', 'oagnM', 'Ousna', 'LINK', "𝗭𝗢𝗡𝗘\n", 'CHfPX', "𝗢𝗟𝗘𝗦\n", 'dHlVc', 'ithub', 'JmWNT', " 📝❯━━", 'FileS', 'dWAlR', "ead c", 'ALWAY', 'XJkcE', 'voice', '━━━━❮', "TI BA", 'gtAWN', 'AKsuV', 'state', " **RE", 'BDlqo', 'YJZPg', " anti", 'gJsNS', "ble r", 'b/fun', "\n┏━━━", 'menti', "ʙ ʀᴇᴘ", ".1 En", "━━━❮ ", "\n--- ", 'dZqoa', "✘◍ ꜱᴇ", "ᴇᴇɴ ᴀ", 'lengt', 'qeKlx', 'ngs:*', " has ", 'orocc', '1.2', 'ctor(', 'ing', 'ercon', 'OCK', "𝗗 𝗠𝗘𝗡", 'fvJOM', "able ", 'stick', 'owner', 'ɴᴜᴍʙᴇ', 'url', "nd ha", "━━❮ 📆", 'edGIc', "DING ", "o sta", " Disa", 'BHbQz', "ᴅ ᴄᴛᴇ", 'ewsle', '148567hipJRs', '*WELC', "ord f", 'Menti', 'RgUIB', 'teApd', "ᴇ ʏᴏᴜ", 'NemVt', 'other', 'Bphql', 'UEEN_', "een d", 'yhpna', "𝐒𝐓 🧚‍♂️⃟🩵", "i bot", 'log', 'hmNzZ', 'lmenu', "1 Set", 'zYpCn', "D WOR", 'FELfk', 'count', 'YJvHD', 'terva', "2 Dis", 'xLwGp', '11.2', 'Tfnjx', "ᴀɴᴋꜱ ", "en se", "9.1 E", 'yvHZF', 'kScQP', 'XfHWa', "2\n┃📜 ", 'messa', 'RINpP', '/QUEE', 'QUEEN', 'glDJj', "ʟᴇᴛᴇ ", 'LkxqJ', "ys on", "𝚗𝚎𝚛 :", "ᴅᴀʏ 📆", 'YDTqQ', 'BOT', "'priv", "𝚖 : ", 'orm', "\n┃🔊 𝙼", 'DwWnl', "To ge", "ᴅɪɴɢ ", 'BYivx', "as be", 'ngs', 'grpYl', 'QrFSB', 'hub.c', '16.1', "\n┃🤖 𝙱", 'key', "1.2 D", "g  \n┃", '2.2', "ʀᴇᴘᴏ ", "┃✘◍ 1", 'xlAeH', 'Moroc', "e wel", 'wQHgA', '../pa', 'TTING', '9.1', "ʙʏ ᴍʀ", 'nwPBT', 'DBeWf', "ʀ ʀᴀꜱ", 'FIX:*', "\n┃📟 𝙷", 'KYfcq', "n() ", 'pxems', 'ᴊᴏᴜʀɴ', '12.2', 'ipIxb', 'AkXDn', "1.2 S", "O NEW", "AD CO", 'nQtFO', "'inbo", 'zHoOl', "\n    ", 'newsl', 'YnXJw', " BAD:", 'haHCK', " ʀᴇᴘʟ", 'oJjPh', 'AmwsA', "S**\n┃", 'ktdQR', 'psert', "x'.", 'ANlJA', "𝗠𝗗 𝗠𝗔", '0-9a-', 'YJelB', "s  \n┃", 'rashm', 'gzHJZ', "𝗠𝗗 𝗢𝗪", '11022WvALCI', 'OoMpk', 'toLoc', 'wjqvu', '10.1', 'isabl', "ɴᴋꜱ ꜰ", 'yoQHT', "❮ 📜 ᴄ", " \n┃ 2", 'rJJyb', 'ges', 'ᴛʜᴀɴᴋ', 'gger', "een e", 'ETTIN', "𝗨𝗘𝗘𝗡 ", "┃\n┃ 📅", 'iko-A', '8OOxPdn', 'hmika', 'QsdBN', '2.𝗖𝗢𝗡', 'mbnai', 'ʜᴀɴᴋꜱ', 'statu', 'REPLY', 'ction', 'xtInf', 'svSzc', '━━━━━', "\n┃✨𝙼𝚎", 'ync', " inbo", 'cWKrM', "𝚜 : ", "ply  ", "t the", '261432eYueKz', " REAC", "\\+\\+ ", "ock h", '6.1', 'QHtwq', "e ant", '.....', 'IDnHB', 'zA-Z_', '*(?:[', 'JmWoN', "◍ 3.𝗔", 'downl', "ME SE", "n (fu", 'const', 'platf', "Y SET", 'ges.u', 'zatEq', "LINE ", 'https', 'mfOvG', "ate'.", '┏━━━❮', 'Today', '2ZfHVRI', 'YmHra', '𝗦𝗘𝗧𝗧𝗜', 'FVKTO', 'IqoOH', "ᴜʀ ᴀᴅ", 'IWXTM', 'NGS**', 'categ', "y : ", 'sxhKw', "𝗘𝗡𝗨 🧚‍♂️⃟", 'LhLck', 'S/log', 'o.jso', "ble M", "\"retu", '13.1', 'versi', 'ZovlE', 'ɴᴛᴜʀᴛ', 'sendM', "s onl", 'tlTVI', "🩵\n\n✘◍", "\n✦» *", " 13.1", 'WjTer', "oday ", "𝗜𝗡 𝗛𝗨", "𝚘𝚍𝚎 :", 'yaBDD', 'eUrl', 'DxTRx', 'ᴇɴᴛᴜʀ', 'SETTI', 'QkWWM', '3.1', 'publi', " \n┃ 8", 'NxDGg', " 13.2", "ᴛᴇ ʏᴏ", 'GeXsb', "YS ON", 'dNJxy', 'zPATd', "\n┃ 16", " auto", "┃ \n┃ ", 'Z_$][', 'BYmJq', 'Gqfrs', "\n┃ 7.", '1664551kpPsem', 'TagXb', "en di", '𝗪𝗡𝗟𝗢𝗔', 'RRVrE', "i lin", 'strin', '┏━━━━', 'rsati', "\n┃ \n┃", 'US:**', " ᴛᴏ ᴅ", " VOIC", '𝚕𝚊𝚝𝚏𝚘', 'CyirJ', 'eNLRq', "D SET", "TI BO", "𝚡 : ", 'ᴛᴜʀᴛ.', "ᴀɴᴊᴜ ", " 📅 Da", 'YzNjW', 'RMDxP', '(((.+', "𝗔𝗜 𝗠𝗘", 'setIn', 'yUsag', "ɴᴊᴜ ᴍ", '77562', "Anti ", " bloc", 'serve', '*MORO', ".2 Tu", " ᴀᴅᴠᴇ", " **AU", 'aoYGt', 'soFXB', "ᴏᴛ.\n\n", "word ", 'RDING', 'RWqLb', "ay : ", 'JkxVz', 'exter', 'GhvSv', " alwa", "Auto ", 'debu', 'TINGS', 'UOehs', 'NXZKL', 'nctio', 'jDQcW', 'JmEIa', " STIC", "𝗢𝗡𝗘\n┃", "auto ", 'refs/', 'gify', 'LFrRV', 'nfig.', " ꜱᴇʟᴇ", "𝗜 𝗙𝗨𝗡", 'usefu', 'tuVbM', "📆 ᴛᴏ ", 'cjs', 'thumb', 'Disab', 'ujBWX', 'e.exp', 'Cxpkr', 'LOCK:', 'ImclN', 'Mrras', "\n✘◍ ꜱ", "d  \n┃", '2721600ZQzyiF', 'WNheG', "𝗔𝗡𝗝𝗨 ", 'aleDa', "\n┃✘◍ ", 'wGYOX', "ʀᴛ.\nᴛ", "ᴏʀ ᴜꜱ", '../co', '14.1', 'pp.ne', 'NbQlm', 'rding', '7.1', 'cjEEk', 'oad', 'OVkCR', "1.4 S", 'dxzqb', 'uEbIL', "\n┃ 15", "━\n┃\n┃", 'ublic', 'OROCC', 'alway', 'patte', 'led', 'Amnnc', 'OWNER', '_NAME', 'cWeXV', 'AUTO_', "uto n", 'sable', "le Mo", 'xzmFU', 'jHupL', 'WAssQ', 'Score', "\n┃ **", 'OONdL', 'RECOR', '**AUT', '.𝗢𝗪𝗡𝗘', 'thub.', "\n\n✘◍ ", "TO RE", "r  \n┃", "\n┃ ⌚ ", " READ", 'recor', "has b", " CMD:", "id se", 'kVygy', 'ZVlnx', "𝐌𝐃 𝐌𝐄", 'xTxIm', "ᴍᴅ ᴄᴛ", 'ᴇᴍʙᴀʀ', 'tCCIZ', "𝗕\n┃✘◍", "uto s", "le an", " Date", 'dlmen', 'XGbQu', "\n┗━━━", 'zOpdq', 'rkTTx', 'jRQvX', " 🧚‍♂️⃟🩵\n\n", 'desc', '4392YZLCjC', '78149', 'om/Mr', "\n┃\n┗━", 'capti', 'omKHq', "Time ", " are ", "ᴇᴀᴛᴇ ", 'a-zA-', '.json', 'vvixu', "GS**\n", "𝗨 🧚‍♂️⃟🩵\n", 'SiBYt', "𝗠𝗘𝗡𝗨 ", "𝗡𝗦𝗙𝗪 ", "𝗩𝗘𝗥𝗧 ", "ine  ", 'ʀᴀꜱʜᴍ', 'priva', 'eqaXL', 'MODE', 'ed.', 'react', '5.1', " ᴄᴏʀʀ", " 7.𝗠𝗔", 'hatsa', 'led.', 'Alhrt', " (tru", 'Type', 'PhCYq', "Read ", 'call', "ʏ ᴍʀ ", " 4.2 ", '&𝗚𝗔𝗠𝗘', " mode", 'typin', 'ory', 'image', " ʜᴜʙ ", 'JBoIk', 'PCQaJ', "> ɢɪᴛ", "!\n\n> ", "\n┃🍁 𝚄", 'VjoIM', 'mJLPR', " NEWS", 'BXSnl', " ....", 'bUhuc', " to p", "n ena", "news ", 'hQsGw', " **AN", 'bfvSe', "ꜰᴏʀ ᴜ", 'input', 'ame', 'goNbr', 'ZncBM', "E SET", 'CmMoP', 'Welco', "day :", 'rdedN', "he ow", 'SRnVR', 'inbox', "Turn ", "\n┃ 12", 'mMeiG', " RECO", ":** ", "14.1 ", 'zXUyL', 'ALLWA', 'Sfvuy', "y  \n┃", 'ATfwR', 'rLarg', 'from', 'aDtDx', " 𝐀𝐍𝐉𝐔", ": git", 'chain', "\n> ɢɪ", 'nalAd', " welc", 'allme', 'ckCkO', 'eqgUd', "ꜱ 📜 ❯", 'memor', "ɢ ʙᴏᴛ", " BOT:", 'join', 'body', "_MD\n", "Bot m", "\nᴛʜᴀɴ", 'S_ONL', 'PlSXv', 'XrFtR', "atus ", 'N_ANJ', "on au", 'VGaWg', '16.2', 'mandL', "ᴋꜱ ꜰᴏ", 'Name', 'mika/', 'cIjem', 'BFWtL', "te To", 'VXlTH', "ꜱɪɴɢ ", 'aId', "TO TY", 'RWRMh', 'oRQtO', 'MOROC', '14.2', '12036', '𝗦𝗘𝗔𝗥𝗖', '*AUTO', 'modul', "ᴏ ᴅᴀʏ", 'com/N', 'IqrNT', 'Frame', 'PMjOc', 'erThu', 'bBfSb', "ble a", '../li', 'STICK', "**\n┃ ", 'Jid', 'aaupY', "  \n┃ ", "ion *", "ʜ ᴛʜᴇ", 'Dpdty', 'onedJ', "┃✘◍ 6", 'WsEjP', 'ings.', "E:** ", 'NlkDu', 'zyJkH', 'eleCf', 'enabl', 'Reply', '1.3', 'TBLxA', "Date ", '15400', 'mika', 'INE', 'bXzae', 'ꜱᴇʟᴇᴛ', "┃ 10.", " ꜰᴏʀ ", 'filte', 'SgqCM', "𝗙𝗨𝗡 𝗠", 'vbwob', 'BDTYs', 'eBVKK', 'KgEDH', 'qXFcj', 'PPmkh', 'wgvon', 'dhQRG', 'IXFsA', 'ticke', "ʏ 📆❯━", 'MPlAf', "❮ 📆 ᴛ", 'ANJU-', 'forwa', 'BappJ', 'aQxtz', "me fe", "LINK ", "📅 Dat", 'kmhBt', "ʏ ᴡɪᴛ", '𝚎𝚛𝚜𝚒𝚘', 'ner!', 'GTEmy', "ti ba", 'YXzFj', "𝗡𝗚𝗦 𝗠", 'write', 'nailU', 'ᴛᴇᴀᴛᴇ', "━❮ 📆 ", 'FuQtT', 'nsfw', '{}.co', "𝗡𝗨 🧚‍♂️⃟🩵", 'KER:*', 'w.git', " ʀᴀꜱʜ", 'mMEtK', 'LINE', 'fZccA', "tus v", 'oYmgr', 'vIBTo', 'ᴅᴠᴇɴᴛ', '𝗠𝗔𝗡𝗗𝗦', "ʀ ᴛᴏ ", "le au", 'ANJU_', 'XCtcf', 'LYzKX', 'pDnwf', 'media', 'KmaLV', "\n┃🫧 𝙿", " 8.𝗚𝗥", 'Objec', 'iNMtk', 'zZmiA', "g\n┃\n┗", "MD\n", 'hJkFA', 'zPKaO', "d wor", "ter  ", 'hdzIT', 'toStr', 'abled', "o new", 'eJid', ')+)+)', "rent ", '://gi', 'wvoms', '*MODE', 'round', "\n> Qᴜ", 'xqXmt', 'bacKV', 'vbUzC', "line ", '15.2', '10.2', " SETT", "ice  ", 'stanz', "𝗟𝗢𝗔𝗗 ", '*ALWA', " been", "'publ", 'IzLWg', 'JIycK', "not t", 'on.', 'nable', "ᴛ.\nᴛʜ", " Toda", 'ZTjno', 'showA', 'RhKOA', '60OKPGke', " 8.1 ", '7.2', "ᴛ ʜᴜʙ", 'Pxlug', "O BLO", 'ilter', "been ", " menu", 'ZeVNe', '*ANTI', 'ZcPXI', 'BdQqQ', 'jblGO', "𝗡𝗘𝗥 𝗠", '12.1', 'VGkgW', 'frGQD', 'gzsyw', 'nsfwm', 'qBEDJ', 'disab', 'Alway', 'LINE:', 'OXXlT', "𝗕 🧚‍♂️⃟🩵\n", "\n┃🔖𝚄𝚜", " disa", '94717', 'gbKrU', "ᴏ : g", "𝗦\n┃✘◍", 'nYAPo', " bad ", 'yping', 'ᴍᴍᴀɴᴅ', "*\n┃ 3", 'cZPmQ', 'init', 'cFDPY', 'LSGpQ', 'nYqoJ', 'FSOqJ', 'mem', 'kDigW', 'jjncs', 'LTpRs', "ʙᴏᴛ.\n", "┃ **M", 'crsBi', 'yDdXX', 'READ_', "ᴏᴜʀ ᴀ", " 𝗠𝗘𝗡𝗨", "ode h", 'ICKER', 'NzVLg', " LINK", 'while', "link ", 'roups', 'aleTi', 'ycAut', "┃✘◍ 9", 'YS_ON', 'KVcum', 'Auto-', " 📜 ᴄᴏ", "uto t", 'BXEJe', " \n┃ 1", 'rtmen', "10.1 ", "d fil", 'hcOaZ', 'ʜᴍɪᴋᴀ', 'vpbtX', " enab", 'menu', "\n┃ 11", "𝐍𝐔 𝐋𝐈", 'BgeKQ', 'bWYIG', 'conte', '1.1', "US SE", "x  \n┃", "bot f", 'CMD', "e aut", "𝗛 𝗠𝗘𝗡", 'rNjIf', 'VVRoU', "\n\n┏━━", " TYPI", 'pizXU', "┃ 📅 D", "ɪᴛ ʜᴜ", " to g", 'toFix', 'sTLhc', "𝗨𝗟 𝗧𝗢", "𝗠𝗗 𝗖𝗢", 'hEGSA', "s bee", "┃✘◍ 5", '𝙿𝚛𝚎𝚏𝚒', '://ra', 'mmand', 'S/615', "ews  ", "\n🧚‍♂️⃟🩵 𝐐", "*\n✦» ", 'ructo', 'enu', 'dedTe', "3 Set", 'MnFYx', 'rbocP', "ck  \n", 'MMAND', "o blo", 'OME:*', "━━━\n┃", 'TtGuf', 'title', 'UiJgB', 'qvEIJ', "ʀ ᴜꜱɪ", 'aAcBz', 'ckage', 'xtMes', "\\( *\\", 'main', 'Inval', " filt", " ʀᴇᴘᴏ", "𝗔𝗠𝗘𝗦\n", "ɪɴɢ ʙ", 'RkXMf', '2.1', 'WZfpz', 'oRGMx', '3.2', 'ObVzA', "bad w", 'remot', " ʙᴏᴛ.", ".\n\n┏━", " ᴍᴅ ᴄ", "f aut", 'Mbeli', 'rVlvf', "━━━━\n", "anti ", " 2.1 ", "\n┃📚 𝚅", "ding ", "❌ You", "\n\n> Q", 'YzCzA', 'reply', 'kYBfR', " voic", 'CJidl', 'retur', 'DING', 'uSavb', 'uptim', 'kePzY', '4.2', 'cwFuK'];
  _0x38e2 = function () {
    return _0x175334;
  };
  return _0x38e2();
}
const _0x414ae2 = {
  pattern: "settings"
};
function _0x2e2b44(_0x548f96, _0x250376, _0x36c6d9, _0x22c4e0, _0x1d2a03) {
  return _0x5633(_0x36c6d9 - 0x2a2, _0x548f96);
}
function _0xfdcb96(_0x599b96, _0x4dc276, _0x165b01, _0x5312b7, _0x5fa862) {
  return _0x5633(_0x5fa862 - 0x3, _0x5312b7);
}
_0x414ae2.desc = "To get the settings.";
_0x414ae2.react = '⚙';
_0x414ae2.category = "main";
function _0x28fac5(_0x40ddbe, _0x353380, _0x469d64, _0x54df72, _0x6c8592) {
  return _0x5633(_0x353380 + 0x21, _0x40ddbe);
}
function _0x48b025(_0x5194ab, _0x260520, _0x51dafe, _0x896b37, _0x4622a6) {
  return _0x5633(_0x5194ab + 0x25c, _0x4622a6);
}
_0x414ae2.filename = __filename;
cmd(_0x414ae2, async (_0x547515, _0xe92e8d, _0x2df110, {
  from: _0x215dfd,
  users: _0x1d18f6,
  quoted: _0x489de0,
  body: _0x17fc36,
  isCmd: _0x186976,
  command: _0x52cf10,
  args: _0x20ca11,
  q: _0x1422fa,
  isGroup: _0x473e13,
  sender: _0x180619,
  senderNumber: _0x46742e,
  botNumber2: _0x1859cb,
  botNumber: _0x564ea2,
  pushname: _0xea5ce6,
  isMe: _0x3fd2d4,
  isOwner: _0x264ab3,
  groupMetadata: _0x37ece4,
  groupName: _0x58b56f,
  participants: _0xd28af,
  groupAdmins: _0x5b9a42,
  isBotAdmins: _0xbb256d,
  isAdmins: _0x256510,
  reply: _0x2bcb66
}) => {
  if (!_0x264ab3) {
    return _0x2bcb66("❌ You are not the owner!");
  }
  try {
    let _0x1db716 = await fetchJson("https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/logo.json");
    let _0x5ebb5e = "\n🧚‍♂️⃟🩵 𝗤𝗨𝗘𝗘𝗡 𝗔𝗡𝗝𝗨 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵\n\n✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ.\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.\n\n┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━\n┃\n┃ 📅 Date Today : " + new Date().toLocaleDateString() + "\n┃ ⌚ Time Now : " + new Date().toLocaleTimeString() + "\n┃\n┗━━━━━━━━━━━━━━━\n┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━\n┃🗣️ 𝚄𝚜𝚎𝚛 : " + _0xea5ce6 + "\n┃🤖 𝙱𝚘𝚝 : QUEEN ANJU MD V2\n┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : " + config.PREFIX + "\n┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : " + require("../package.json").version + "\n┃📝 𝙿𝚕𝚊𝚏𝚘𝚛𝚖 : " + os.platform() + "\n┃📟 𝙷𝚘𝚜𝚝 : " + os.hostname() + "\n┃🤴𝙾𝚠𝚗𝚎𝚛 : " + config.OWNER_NAME + "\n┃🔊 𝙼𝚘𝚍𝚎 : " + config.MODE + "\n┃🫧 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : " + commands.length + "\n┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : " + runtime(process.uptime()) + "\n┃✨𝙼𝚎𝚖 : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n┗━━━━━━━━━━━━━━━\n\n--- **Current Settings:**\n✦» **PREFIX:** " + config.PREFIX + "\n✦» **MODE:** " + config.MODE + "\n✦» **AUTO READ STATUS:** " + (config.AUTO_READ_STATUS ? "Enabled" : "Disabled") + "\n✦» **READ CMD:** " + (config.READ_CMD ? "Enabled" : "Disabled") + "\n✦» **AUTO VOICE:** " + (config.AUTO_VOICE ? "Enabled" : "Disabled") + "\n✦» **AUTO STICKER:** " + (config.AUTO_STICKER ? "Enabled" : "Disabled") + "\n✦» **AUTO REPLY:** " + (config.AUTO_REPLY ? "Enabled" : "Disabled") + "\n✦» **AUTO REACT:** " + (config.AUTO_REACT ? "Enabled" : "Disabled") + "\n✦» **WELCOME:** " + (config.WELCOME ? "Enabled" : "Disabled") + "\n✦» **ANTI BAD:** " + (config.ANTI_BAD ? "Enabled" : "Disabled") + "\n✦» **ANTI BOT:** " + (config.ANTI_BOT ? "Enabled" : "Disabled") + "\n✦» **ANTI LINK:** " + (config.ANTI_LINK ? "Enabled" : "Disabled") + "\n✦» **ALWAYS ONLINE:** " + (config.ALLWAYS_ONLINE ? "Enabled" : "Disabled") + "\n✦» **MOROCCO BLOCK:** " + (config.MOROCCO_BLOCK ? "Enabled" : "Disabled") + "\n✦» **AUTO NEWS:** " + (config.AUTO_NEWS ? "Enabled" : "Disabled") + "\n✦» **AUTO TYPING:** " + (config.AUTO_TYPING ? "Enabled" : "Disabled") + "\n✦» **AUTO RECORDING:** " + (config.AUTO_RECORDING ? "Enabled" : "Disabled") + "\n    \n┏━━━❮ 📜 ᴄᴏᴍᴍᴀɴᴅꜱ 📜 ❯━━\n┃\n┃ **MODE SETTINGS**\n┃ 1.1 Set mode to public  \n┃ 1.2 Set mode to private  \n┃ 1.3 Set mode to groups  \n┃ 1.4 Set mode to inbox  \n┃ \n┃ **AUTO READ STATUS SETTINGS**\n┃ 2.1 Turn on auto status view  \n┃ 2.2 Turn off auto status view  \n┃ \n┃ **READ COMMAND SETTINGS**\n┃ 3.1 Enable read command  \n┃ 3.2 Disable read command  \n┃ \n┃ **AUTO VOICE SETTINGS**\n┃ 4.1 Enable auto voice  \n┃ 4.2 Disable auto voice  \n┃ \n┃ **AUTO STICKER SETTINGS**\n┃ 5.1 Enable auto sticker  \n┃ 5.2 Disable auto sticker  \n┃ \n┃ **AUTO REPLY SETTINGS**\n┃ 6.1 Enable auto reply  \n┃ 6.2 Disable auto reply  \n┃ \n┃ **AUTO REACT SETTINGS**\n┃ 7.1 Enable auto react  \n┃ 7.2 Disable auto react  \n┃ \n┃ **WELCOME SETTINGS**\n┃ 8.1 Enable welcome  \n┃ 8.2 Disable welcome  \n┃ \n┃ **ANTI BAD WORD SETTINGS**\n┃ 9.1 Enable anti bad word filter  \n┃ 9.2 Disable anti bad word filter  \n┃ \n┃ **ANTI BOT SETTINGS**\n┃ 10.1 Enable anti bot filter  \n┃ 10.2 Disable anti bot filter  \n┃ \n┃ **ANTI LINK SETTINGS**\n┃ 11.1 Enable anti link  \n┃ 11.2 Disable anti link  \n┃ \n┃ **ALWAYS ONLINE SETTINGS**\n┃ 12.1 Enable always online  \n┃ 12.2 Disable always online  \n┃ \n┃ **MOROCCO BLOCK SETTINGS**\n┃ 13.1 Enable Morocco block  \n┃ 13.2 Disable Morocco block  \n┃ \n┃ **AUTO NEWS SETTINGS**\n┃ 14.1 Enable auto news  \n┃ 14.2 Disable auto news  \n┃ \n┃ **AUTO TYPING SETTINGS**\n┃ 15.1 Enable auto typing  \n┃ 15.2 Disable auto typing  \n┃ \n┃ **AUTO RECORDING SETTINGS**\n┃ 16.1 Enable auto recording  \n┃ 16.2 Disable auto recording\n┃\n┗━━━━━━━━━━━━━━━━\n> Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ʀᴀꜱʜᴍɪᴋᴀ .....\n> ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏ : github.com/Mrrashmika/QUEEN_ANJU_MD\n";
    const _0x8f8682 = {
      url: _0x1db716.settingmenu
    };
    const _0x2b9a8c = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x2b9a8c.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x2b9a8c.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2b9a8c.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x2b9a8c.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2b9a8c.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2b9a8c.externalAdReply.mediaType = 0x1;
    _0x2b9a8c.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x2b9a8c.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x2b9a8c.externalAdReply.renderLargerThumbnail = true;
    _0x2b9a8c.externalAdReply.showAdAttribution = true;
    const _0x2ccf0 = {
      image: _0x8f8682,
      caption: _0x5ebb5e,
      contextInfo: _0x2b9a8c
    };
    const _0x357dee = await _0x547515.sendMessage(_0x215dfd, _0x2ccf0);
    const _0x404ebd = _0x357dee.key.id;
    _0x547515.ev.on("messages.upsert", async _0x565882 => {
      const _0x2d1707 = _0x565882.messages[0];
      if (!_0x2d1707.message) {
        return;
      }
      const _0x35847f = _0x2d1707.message.conversation || _0x2d1707.message.extendedTextMessage?.["text"];
      const _0x234d78 = _0x2d1707.key.remoteJid;
      const _0x352b87 = _0x2d1707.message.extendedTextMessage && _0x2d1707.message.extendedTextMessage.contextInfo.stanzaId === _0x404ebd;
      if (_0x352b87) {
        const _0x3fb0d0 = {
          text: '🎃',
          key: _0x2d1707.key
        };
        const _0x1eb26c = {
          react: _0x3fb0d0
        };
        await _0x547515.sendMessage(_0x234d78, _0x1eb26c);
        switch (_0x35847f) {
          case "1.1":
            config.MODE = "public";
            _0x2bcb66("Bot mode has been set to 'public'.");
            break;
          case "1.2":
            config.MODE = "private";
            _0x2bcb66("Bot mode has been set to 'private'.");
            break;
          case "1.3":
            config.MODE = "groups";
            _0x2bcb66("Bot mode has been set to 'groups'.");
            break;
          case "1.4":
            config.MODE = "inbox";
            _0x2bcb66("Bot mode has been set to 'inbox'.");
            break;
          case "2.1":
            config.AUTO_READ_STATUS = true;
            _0x2bcb66("Auto-read status has been enabled.");
            break;
          case "2.2":
            config.AUTO_READ_STATUS = false;
            _0x2bcb66("Auto-read status has been disabled.");
            break;
          case "3.1":
            config.READ_CMD = true;
            _0x2bcb66("Read command has been enabled.");
            break;
          case "3.2":
            config.READ_CMD = false;
            _0x2bcb66("Read command has been disabled.");
            break;
          case "4.1":
            config.AUTO_VOICE = true;
            _0x2bcb66("Auto voice has been enabled.");
            break;
          case "4.2":
            config.AUTO_VOICE = false;
            _0x2bcb66("Auto voice has been disabled.");
            break;
          case "5.1":
            config.AUTO_STICKER = true;
            _0x2bcb66("Auto sticker has been enabled.");
            break;
          case "5.2":
            config.AUTO_STICKER = false;
            _0x2bcb66("Auto sticker has been disabled.");
            break;
          case "6.1":
            config.AUTO_REPLY = true;
            _0x2bcb66("Auto reply has been enabled.");
            break;
          case "6.2":
            config.AUTO_REPLY = false;
            _0x2bcb66("Auto reply has been disabled.");
            break;
          case "7.1":
            config.AUTO_REACT = true;
            _0x2bcb66("Auto react has been enabled.");
            break;
          case "7.2":
            config.AUTO_REACT = false;
            _0x2bcb66("Auto react has been disabled.");
            break;
          case "8.1":
            config.WELCOME = true;
            _0x2bcb66("Welcome feature has been enabled.");
            break;
          case "8.2":
            config.WELCOME = false;
            _0x2bcb66("Welcome feature has been disabled.");
            break;
          case "9.1":
            config.ANTI_BAD = true;
            _0x2bcb66("Anti bad word filter has been enabled.");
            break;
          case "9.2":
            config.ANTI_BAD = false;
            _0x2bcb66("Anti bad word filter has been disabled.");
            break;
          case "10.1":
            config.ANTI_BOT = true;
            _0x2bcb66("Anti bot filter has been enabled.");
            break;
          case "10.2":
            config.ANTI_BOT = false;
            _0x2bcb66("Anti bot filter has been disabled.");
            break;
          case "11.1":
            config.ANTI_LINK = true;
            _0x2bcb66("Anti link filter has been enabled.");
            break;
          case "11.2":
            config.ANTI_LINK = false;
            _0x2bcb66("Anti link filter has been disabled.");
            break;
          case "12.1":
            config.ALWAYS_ONLINE = true;
            _0x2bcb66("Always online mode has been enabled.");
            break;
          case "12.2":
            config.ALWAYS_ONLINE = false;
            _0x2bcb66("Always online mode has been disabled.");
            break;
          case "13.1":
            config.MOROCCO_BLOCK = true;
            _0x2bcb66("Morocco block has been enabled.");
            break;
          case "13.2":
            config.MOROCCO_BLOCK = false;
            _0x2bcb66("Morocco block has been disabled.");
            break;
          case "14.1":
            config.AUTO_NEWS = true;
            _0x2bcb66("Auto news has been enabled.");
            break;
          case "14.2":
            config.AUTO_NEWS = false;
            _0x2bcb66("Auto news has been disabled.");
            break;
          case "15.1":
            config.AUTO_TYPING = true;
            _0x2bcb66("Auto typing has been enabled.");
            break;
          case "15.2":
            config.AUTO_TYPING = false;
            _0x2bcb66("Auto typing has been disabled.");
            break;
          case "16.1":
            config.AUTO_RECORDING = true;
            _0x2bcb66("Auto recording has been enabled.");
            break;
          case "16.2":
            config.AUTO_RECORDING = false;
            _0x2bcb66("Auto recording has been disabled.");
            break;
          default:
            _0x2bcb66("Invalid setting option.");
            return;
        }
        fs.writeFileSync(configPath, "module.exports = " + JSON.stringify(config, null, 2) + ';');
      }
    });
  } catch (_0x82c8a1) {
    console.log(_0x82c8a1);
    _0x2bcb66('' + _0x82c8a1);
  }
});
function _0x5a0987(_0x1635eb) {
  function _0x3d7585(_0x531b20) {
    if (typeof _0x531b20 === "string") {
      return function (_0x226f70) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x531b20 / _0x531b20).length !== 1 || _0x531b20 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x3d7585(++_0x531b20);
  }
  try {
    if (_0x1635eb) {
      return _0x3d7585;
    } else {
      _0x3d7585(0);
    }
  } catch (_0x586f35) {}
}
function _0x530b0c(_0x538227, _0x351cb5, _0x1e803b, _0x108d92, _0x1f6c4f) {
  return _0x5633(_0x351cb5 - 0xc4, _0x108d92);
}
(function () {
  const _0x385c57 = function () {
    let _0x568c5f;
    try {
      _0x568c5f = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x408287) {
      _0x568c5f = window;
    }
    return _0x568c5f;
  };
  const _0x29bc6e = _0x385c57();
  _0x29bc6e.setInterval(_0x5a0987, 4000);
})();
