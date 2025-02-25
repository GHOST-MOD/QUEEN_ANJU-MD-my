(function (_0x53bab2, _0x5ca77a) {
  const _0xb3ad2c = _0x53bab2();
  while (true) {
    try {
      const _0x26fab0 = -parseInt(_0x435c(290, -0x250)) / 1 + -parseInt(_0x435c(1860, 0x994)) / 2 * (parseInt(_0x435c(651, -0x97)) / 3) + -parseInt(_0x435c(1287, 0x619)) / 4 + parseInt(_0x435c(657, 0x509)) / 5 + parseInt(_0x435c(1845, 0x3d6)) / 6 * (-parseInt(_0x435c(564, 0xf4)) / 7) + -parseInt(_0x435c(578, -0x52)) / 8 + parseInt(_0x435c(772, 0x2a5)) / 9;
      if (_0x26fab0 === _0x5ca77a) {
        break;
      } else {
        _0xb3ad2c.push(_0xb3ad2c.shift());
      }
    } catch (_0xd2a1) {
      _0xb3ad2c.push(_0xb3ad2c.shift());
    }
  }
})(_0x9af0, 498708);
const _0x447aff = function () {
  let _0x36a7ff = true;
  return function (_0x101b74, _0x423ea7) {
    const _0x48d6fc = _0x36a7ff ? function () {
      if (_0x423ea7) {
        const _0x362a06 = _0x423ea7.apply(_0x101b74, arguments);
        _0x423ea7 = null;
        return _0x362a06;
      }
    } : function () {};
    _0x36a7ff = false;
    return _0x48d6fc;
  };
}();
const _0x45a785 = _0x447aff(this, function () {
  return _0x45a785.toString().search("(((.+)+)+)+$").toString().constructor(_0x45a785).search("(((.+)+)+)+$");
});
_0x45a785();
const _0x32209b = function () {
  let _0x46dd71 = true;
  return function (_0x399602, _0xb9974f) {
    const _0x27701d = _0x46dd71 ? function () {
      if (_0xb9974f) {
        const _0x3a7cc5 = _0xb9974f.apply(_0x399602, arguments);
        _0xb9974f = null;
        return _0x3a7cc5;
      }
    } : function () {};
    _0x46dd71 = false;
    return _0x27701d;
  };
}();
(function () {
  _0x32209b(this, function () {
    const _0x542636 = new RegExp("function *\\( *\\)");
    const _0x30894c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x3a1309 = _0x27848b("init");
    if (!_0x542636.test(_0x3a1309 + "chain") || !_0x30894c.test(_0x3a1309 + "input")) {
      _0x3a1309('0');
    } else {
      _0x27848b();
    }
  })();
})();
const {
  fetchJson
} = require("../lib/functions");
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const getFBInfo = require("@xaviabot/fb-downloader");
const cheerio = require("cheerio");
function _0x3a4dff(_0x3e1f51, _0x2c0ba7, _0x20fe80, _0x13a59a, _0x26cace) {
  return _0x435c(_0x26cace + 0x12d, _0x2c0ba7);
}
const {
  igdl
} = require("ruhend-scraper");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
function _0x4b64b6(_0x4179c2, _0x2458e5, _0x2fc074, _0x3b2cd1, _0x5a77be) {
  return _0x435c(_0x3b2cd1 - 0x123, _0x2458e5);
}
const _0x301d5e = {
  pattern: "tiktok",
  alias: ['tt'],
  react: '🎥',
  desc: "download tt videos",
  category: "download",
  filename: __filename
};
cmd(_0x301d5e, async (_0x2a9fdd, _0x151d2c, _0x4ff243, {
  from: _0x33ad74,
  quoted: _0x50b1a8,
  body: _0x4f7479,
  isCmd: _0x12411c,
  command: _0x16b147,
  args: _0x5da2ed,
  q: _0x2b6410,
  isGroup: _0x524bdd,
  sender: _0x452001,
  senderNumber: _0x40b8d1,
  botNumber2: _0x42d9b9,
  botNumber: _0x2326e6,
  pushname: _0x10d8b1,
  isMe: _0x1c4f09,
  isOwner: _0x3ee844,
  groupMetadata: _0x2f7347,
  groupName: _0x1e7fd3,
  participants: _0x24c70f,
  groupAdmins: _0x3cc508,
  isBotAdmins: _0x414bb8,
  isAdmins: _0x176949,
  reply: _0x19cd4c
}) => {
  try {
    if (!_0x2b6410 && !_0x2b6410.startsWith("https://")) {
      return _0x19cd4c("*give me tiktok url ❌*");
    }
    _0x4ff243.react('⬇️');
    let _0x56d9e1 = await downloadTiktok(_0x2b6410);
    let _0x368ee4 = "\n     🎟️ *DARK HACKER MD TIKTOK DOWNLOADER* 🎟️\n\n🔢 *Please reply with the number you want to select:*\n\nTitle * " + _0x56d9e1.result.title + "\n\n*!.* Tiktok Video\n\n   1 | 📼 SD QUALITY\n   2 | 🎟️ HD QUALITY\n\n*!.* Tiktok Audio\n\n   3 | 🎶 Audio file\n   \n*URL:* " + _0x2b6410 + "\n     \n     ";
    const _0x5dfb9c = {
      url: _0x56d9e1.result.image
    };
    const _0x219bd1 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x219bd1.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x219bd1.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x219bd1.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x219bd1.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x219bd1.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x219bd1.externalAdReply.mediaType = 0x1;
    _0x219bd1.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x219bd1.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x219bd1.externalAdReply.renderLargerThumbnail = false;
    _0x219bd1.externalAdReply.showAdAttribution = true;
    const _0x54c7bc = {
      image: _0x5dfb9c,
      caption: _0x368ee4,
      contextInfo: _0x219bd1
    };
    const _0x2b93ef = await _0x2a9fdd.sendMessage(_0x33ad74, _0x54c7bc);
    const _0x1ff613 = _0x2b93ef.key.id;
    _0x2a9fdd.ev.on("messages.upsert", async _0x223efc => {
      const _0xaf690e = _0x223efc.messages[0];
      if (!_0xaf690e.message) {
        return;
      }
      const _0x13b4c9 = _0xaf690e.message.conversation || _0xaf690e.message.extendedTextMessage?.["text"];
      const _0xd5854c = _0xaf690e.key.remoteJid;
      const _0x19345f = _0xaf690e.message.extendedTextMessage && _0xaf690e.message.extendedTextMessage.contextInfo.stanzaId === _0x1ff613;
      if (_0x19345f) {
        const _0x5b192e = {
          text: '⬇️',
          key: _0xaf690e.key
        };
        const _0x9b61ed = {
          react: _0x5b192e
        };
        await _0x2a9fdd.sendMessage(_0xd5854c, _0x9b61ed);
        let _0x548956 = _0x56d9e1.result;
        const _0x4a53df = {
          text: '⬆️',
          key: _0xaf690e.key
        };
        const _0x66256 = {
          react: _0x4a53df
        };
        await _0x2a9fdd.sendMessage(_0xd5854c, _0x66256);
        if (_0x13b4c9 === '1') {
          const _0x5f20f6 = {
            url: _0x548956.dl_link.download_mp4_1
          };
          const _0x1f4b49 = {
            video: _0x5f20f6,
            caption: "QUEEN ANJU MD WHATSAPP BOT",
            contextInfo: {}
          };
          _0x1f4b49.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
          _0x1f4b49.contextInfo.groupMentions = [];
          _0x1f4b49.contextInfo.forwardingScore = 0x3e7;
          _0x1f4b49.contextInfo.isForwarded = true;
          _0x1f4b49.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x1f4b49.contextInfo.externalAdReply = {};
          _0x1f4b49.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x1f4b49.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x1f4b49.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x1f4b49.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x1f4b49.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x1f4b49.contextInfo.externalAdReply.mediaType = 0x1;
          _0x1f4b49.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x1f4b49.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x1f4b49.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x1f4b49.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x2a9fdd.sendMessage(_0xd5854c, _0x1f4b49);
        } else {
          if (_0x13b4c9 === '2') {
            const _0x13eec5 = {
              url: _0x548956.dl_link.download_mp4_2
            };
            const _0xa00309 = {
              video: _0x13eec5,
              caption: "QUEEN ANJU MD WHATSAPP BOT",
              contextInfo: {}
            };
            _0xa00309.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
            _0xa00309.contextInfo.groupMentions = [];
            _0xa00309.contextInfo.forwardingScore = 0x3e7;
            _0xa00309.contextInfo.isForwarded = true;
            _0xa00309.contextInfo.forwardedNewsletterMessageInfo = {};
            _0xa00309.contextInfo.externalAdReply = {};
            _0xa00309.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0xa00309.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0xa00309.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0xa00309.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0xa00309.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0xa00309.contextInfo.externalAdReply.mediaType = 0x1;
            _0xa00309.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0xa00309.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0xa00309.contextInfo.externalAdReply.renderLargerThumbnail = false;
            _0xa00309.contextInfo.externalAdReply.showAdAttribution = true;
            await _0x2a9fdd.sendMessage(_0xd5854c, _0xa00309);
          } else {
            if (_0x13b4c9 === '3') {
              const _0x42d8b7 = {
                url: _0x548956.dl_link.download_mp3
              };
              const _0x6387e0 = {
                audio: _0x42d8b7,
                mimetype: "audio/mpeg"
              };
              const _0x406972 = {
                quoted: _0xaf690e
              };
              await _0x2a9fdd.sendMessage(_0xd5854c, _0x6387e0, _0x406972);
            }
          }
        }
        const _0xc1817f = {
          text: '✅',
          key: _0xaf690e.key
        };
        const _0x118834 = {
          react: _0xc1817f
        };
        await _0x2a9fdd.sendMessage(_0xd5854c, _0x118834);
        console.log("Response sent successfully");
      }
    });
  } catch (_0x2ed3db) {
    console.log(_0x2ed3db);
    _0x19cd4c('' + _0x2ed3db);
  }
});
const _0x3fa4b1 = {
  pattern: 'fb',
  alias: ["facebook"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
};
cmd(_0x3fa4b1, async (_0x277dac, _0x483fd3, _0x3f698f, {
  from: _0x4885c2,
  quoted: _0x1fd397,
  body: _0x3ee006,
  isCmd: _0x4d5131,
  command: _0x56644e,
  args: _0x34ddbb,
  q: _0x47252d,
  isGroup: _0x494ee0,
  sender: _0x37dc35,
  senderNumber: _0x52b0,
  botNumber2: _0x38be58,
  botNumber: _0x54e384,
  pushname: _0x2728c7,
  isMe: _0x3da845,
  isOwner: _0x56e785,
  groupMetadata: _0x1573fc,
  groupName: _0x44ab1c,
  participants: _0x143c0a,
  groupAdmins: _0x3adf9a,
  isBotAdmins: _0x4fd234,
  isAdmins: _0x109388,
  reply: _0x2715d1
}) => {
  try {
    if (!_0x47252d || !_0x47252d.startsWith("https://")) {
      const _0x4985af = {
        text: "❌ Please provide a valid URL."
      };
      const _0x3ce231 = {
        quoted: _0x483fd3
      };
      return _0x277dac.sendMessage(_0x4885c2, _0x4985af, _0x3ce231);
    }
    const _0x16c09f = {
      text: '⏳',
      key: _0x483fd3.key
    };
    const _0x252865 = {
      react: _0x16c09f
    };
    await _0x277dac.sendMessage(_0x4885c2, _0x252865);
    const _0x1c30fb = await getFBInfo(_0x47252d);
    const _0x1c8330 = "\n💢 DARK HACKER-MD FB DOWNLOADER 💢\n\n🎞 TITLE 🎞 " + _0x1c30fb.title + "\n\n🔢 Please reply the number you want to select\n\n[1] facebook Video\n1.1 | 🪫 SD QUALITY\n1.2 | 🔋 HD QUALITY\n\n[2] facebook Audio\n2.1 | 🎶 Audio file\n2.2 | 📂 Document file\n2.3 | 🎤 Voice cut [ptt]\n\n\nFb-Url: -=-" + _0x47252d + " \n";
    const _0x224b3c = {
      url: _0x1c30fb.thumbnail
    };
    const _0x334f06 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x334f06.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x334f06.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x334f06.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x334f06.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x334f06.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x334f06.externalAdReply.mediaType = 0x1;
    _0x334f06.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x334f06.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x334f06.externalAdReply.renderLargerThumbnail = false;
    _0x334f06.externalAdReply.showAdAttribution = true;
    const _0x3b21ab = {
      image: _0x224b3c,
      caption: _0x1c8330,
      contextInfo: _0x334f06
    };
    const _0x83f24d = await _0x277dac.sendMessage(_0x4885c2, _0x3b21ab);
    const _0x6c3e17 = _0x83f24d.key.id;
    _0x277dac.ev.on("messages.upsert", async _0x357707 => {
      const _0x44eab5 = _0x357707.messages[0];
      if (!_0x44eab5.message) {
        return;
      }
      const _0x31d0c5 = _0x44eab5.message.conversation || _0x44eab5.message.extendedTextMessage?.["text"];
      const _0x37eb68 = _0x44eab5.key.remoteJid;
      const _0x16e72e = _0x44eab5.message.extendedTextMessage && _0x44eab5.message.extendedTextMessage.contextInfo.stanzaId === _0x6c3e17;
      if (_0x16e72e) {
        const _0x552930 = {
          text: '⬇️',
          key: _0x44eab5.key
        };
        const _0x30ba14 = {
          react: _0x552930
        };
        await _0x277dac.sendMessage(_0x37eb68, _0x30ba14);
        const _0xc62f83 = {
          text: '⬆️',
          key: _0x44eab5.key
        };
        const _0xe29c63 = {
          react: _0xc62f83
        };
        await _0x277dac.sendMessage(_0x37eb68, _0xe29c63);
        if (_0x31d0c5 === "1.1") {
          const _0x5e47e0 = {
            url: _0x1c30fb.sd
          };
          const _0x46c5a4 = {
            video: _0x5e47e0,
            caption: "DARK HACKER MD WHATSAPP BOT",
            contextInfo: {}
          };
          _0x46c5a4.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
          _0x46c5a4.contextInfo.groupMentions = [];
          _0x46c5a4.contextInfo.forwardingScore = 0x3e7;
          _0x46c5a4.contextInfo.isForwarded = true;
          _0x46c5a4.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x46c5a4.contextInfo.externalAdReply = {};
          _0x46c5a4.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x46c5a4.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x46c5a4.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x46c5a4.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x46c5a4.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x46c5a4.contextInfo.externalAdReply.mediaType = 0x1;
          _0x46c5a4.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x46c5a4.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x46c5a4.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x46c5a4.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x277dac.sendMessage(_0x37eb68, _0x46c5a4);
        } else {
          if (_0x31d0c5 === "1.2") {
            const _0x1f5e1f = {
              url: _0x1c30fb.hd
            };
            const _0x3ff61b = {
              video: _0x1f5e1f,
              caption: "QUEEN ANJU MD WHATSAPP BOT",
              contextInfo: {}
            };
            _0x3ff61b.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
            _0x3ff61b.contextInfo.groupMentions = [];
            _0x3ff61b.contextInfo.forwardingScore = 0x3e7;
            _0x3ff61b.contextInfo.isForwarded = true;
            _0x3ff61b.contextInfo.forwardedNewsletterMessageInfo = {};
            _0x3ff61b.contextInfo.externalAdReply = {};
            _0x3ff61b.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x3ff61b.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0x3ff61b.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x3ff61b.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0x3ff61b.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0x3ff61b.contextInfo.externalAdReply.mediaType = 0x1;
            _0x3ff61b.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x3ff61b.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x3ff61b.contextInfo.externalAdReply.renderLargerThumbnail = false;
            _0x3ff61b.contextInfo.externalAdReply.showAdAttribution = true;
            await _0x277dac.sendMessage(_0x37eb68, _0x3ff61b);
          } else {
            if (_0x31d0c5 === "2.1") {
              const _0x4e0f30 = {
                url: _0x1c30fb.sd
              };
              const _0x40757a = {
                audio: _0x4e0f30,
                mimetype: "audio/mpeg"
              };
              const _0x274be4 = {
                quoted: _0x44eab5
              };
              await _0x277dac.sendMessage(_0x37eb68, _0x40757a, _0x274be4);
            } else {
              if (_0x31d0c5 === "2.2") {
                const _0x545939 = {
                  url: _0x1c30fb.sd
                };
                const _0x4c4300 = {
                  document: _0x545939,
                  mimetype: "audio/mpeg",
                  fileName: "ANJU-MD/FBDL.mp3",
                  caption: "*© DARK HACKER WHATSAPP BOT MD*",
                  contextInfo: {}
                };
                _0x4c4300.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                _0x4c4300.contextInfo.groupMentions = [];
                _0x4c4300.contextInfo.forwardingScore = 0x3e7;
                _0x4c4300.contextInfo.isForwarded = true;
                _0x4c4300.contextInfo.forwardedNewsletterMessageInfo = {};
                _0x4c4300.contextInfo.externalAdReply = {};
                _0x4c4300.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                _0x4c4300.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
                _0x4c4300.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0x4c4300.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
                _0x4c4300.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
                _0x4c4300.contextInfo.externalAdReply.mediaType = 0x1;
                _0x4c4300.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                _0x4c4300.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                _0x4c4300.contextInfo.externalAdReply.renderLargerThumbnail = false;
                _0x4c4300.contextInfo.externalAdReply.showAdAttribution = true;
                const _0xe8360b = {
                  quoted: _0x44eab5
                };
                await _0x277dac.sendMessage(_0x37eb68, _0x4c4300, _0xe8360b);
              } else {
                if (_0x31d0c5 === "2.3") {
                  const _0x24d5c9 = {
                    url: _0x1c30fb.sd
                  };
                  const _0x4dc2f1 = {
                    audio: _0x24d5c9,
                    mimetype: "audio/mp4",
                    ptt: true
                  };
                  const _0x197387 = {
                    quoted: _0x44eab5
                  };
                  await _0x277dac.sendMessage(_0x37eb68, _0x4dc2f1, _0x197387);
                }
              }
            }
          }
        }
        const _0x3a6ca8 = {
          text: '✅',
          key: _0x44eab5.key
        };
        const _0x371f29 = {
          react: _0x3a6ca8
        };
        await _0x277dac.sendMessage(_0x37eb68, _0x371f29);
        console.log("Response sent successfully");
      }
    });
  } catch (_0x50964d) {
    console.log(_0x50964d);
    _0x2715d1('' + _0x50964d);
  }
});
const _0x1a5915 = {
  pattern: "twitter",
  alias: ["tweet", "twdl"],
  desc: "Download Twitter videos",
  category: "download",
  filename: __filename
};
cmd(_0x1a5915, async (_0x15a80a, _0xa080, _0x2ced47, {
  from: _0x220c99,
  quoted: _0x2bdba9,
  body: _0x5500ff,
  isCmd: _0x5aaa82,
  command: _0x57208c,
  args: _0x379a3d,
  q: _0x2e9308,
  isGroup: _0x2c0c53,
  sender: _0x2214f3,
  senderNumber: _0x5876c7,
  botNumber2: _0x5b2922,
  botNumber: _0xc6f97a,
  pushname: _0x54f5dd,
  isMe: _0x4c8f75,
  isOwner: _0x4e849e,
  groupMetadata: _0x4ad797,
  groupName: _0x273c4e,
  participants: _0x3b0427,
  groupAdmins: _0x289b6d,
  isBotAdmins: _0x46bd88,
  isAdmins: _0x10c29e,
  reply: _0x45ca91
}) => {
  try {
    if (!_0x2e9308 || !_0x2e9308.startsWith("https://")) {
      const _0x1e539d = {
        text: "❌ Please provide a valid Twitter URL."
      };
      const _0x550fce = {
        quoted: _0xa080
      };
      return _0x15a80a.sendMessage(_0x220c99, _0x1e539d, _0x550fce);
    }
    const _0x4a8ee2 = {
      text: '⏳',
      key: _0xa080.key
    };
    const _0x37f7f1 = {
      react: _0x4a8ee2
    };
    await _0x15a80a.sendMessage(_0x220c99, _0x37f7f1);
    const _0x24d83c = await axios.get("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x2e9308);
    const _0x2f4f1b = _0x24d83c.data;
    if (!_0x2f4f1b || !_0x2f4f1b.status || !_0x2f4f1b.result) {
      return _0x2ced47.reply("Failed to retrieve Twitter video. Please check the link and try again.");
    }
    const {
      desc: _0x4272bf,
      thumb: _0x392d63,
      video_sd: _0x5561e9,
      video_hd: _0x3d9d5f
    } = _0x2f4f1b.result;
    const _0x2a0402 = "\n💢 DARK HACKER MD TWITTER DOWNLOADER 💢\n\n📝 Description: " + (_0x4272bf || "No description") + "\n\n🔢 Please reply with the number for your selection:\n\n[1] Twitter Video\n  1.1 | 🪫 SD QUALITY\n  1.2 | 🔋 HD QUALITY\n\n[2] Twitter Audio\n  2.1 | 🎶 Audio file\n  2.2 | 📂 Document file\n  2.3 | 🎤 Voice (ptt)\n\nTwitter URL: " + _0x2e9308 + "\n";
    const _0x3bcc29 = {
      url: _0x392d63
    };
    const _0x56c9df = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x56c9df.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x56c9df.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x56c9df.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x56c9df.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x56c9df.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
    _0x56c9df.externalAdReply.mediaType = 0x1;
    _0x56c9df.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x56c9df.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x56c9df.externalAdReply.renderLargerThumbnail = false;
    _0x56c9df.externalAdReply.showAdAttribution = true;
    const _0x465389 = {
      image: _0x3bcc29,
      caption: _0x2a0402,
      contextInfo: _0x56c9df
    };
    const _0xc31bea = await _0x15a80a.sendMessage(_0x220c99, _0x465389);
    const _0x1aa920 = _0xc31bea.key.id;
    _0x15a80a.ev.on("messages.upsert", async _0x541185 => {
      const _0x3e5575 = _0x541185.messages[0];
      if (!_0x3e5575.message) {
        return;
      }
      const _0xf9e32 = _0x3e5575.message.conversation || _0x3e5575.message.extendedTextMessage?.["text"];
      const _0xa2a036 = _0x3e5575.key.remoteJid;
      const _0x13c37a = _0x3e5575.message.extendedTextMessage && _0x3e5575.message.extendedTextMessage.contextInfo.stanzaId === _0x1aa920;
      if (_0x13c37a) {
        const _0x4ac2c7 = {
          text: '⬇️',
          key: _0x3e5575.key
        };
        const _0x273370 = {
          react: _0x4ac2c7
        };
        await _0x15a80a.sendMessage(_0xa2a036, _0x273370);
        if (_0xf9e32 === "1.1") {
          const _0x21421e = {
            url: _0x5561e9
          };
          const _0x1464ca = {
            video: _0x21421e,
            caption: "DARK HACKER MD",
            contextInfo: {}
          };
          _0x1464ca.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
          _0x1464ca.contextInfo.groupMentions = [];
          _0x1464ca.contextInfo.forwardingScore = 0x3e7;
          _0x1464ca.contextInfo.isForwarded = true;
          _0x1464ca.contextInfo.forwardedNewsletterMessageInfo = {};
          _0x1464ca.contextInfo.externalAdReply = {};
          _0x1464ca.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x1464ca.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x1464ca.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x1464ca.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x1464ca.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
          _0x1464ca.contextInfo.externalAdReply.mediaType = 0x1;
          _0x1464ca.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x1464ca.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x1464ca.contextInfo.externalAdReply.renderLargerThumbnail = false;
          _0x1464ca.contextInfo.externalAdReply.showAdAttribution = true;
          await _0x15a80a.sendMessage(_0xa2a036, _0x1464ca);
        } else {
          if (_0xf9e32 === "1.2") {
            const _0x47e31d = {
              url: _0x3d9d5f
            };
            const _0x1928e7 = {
              video: _0x47e31d,
              caption: "QUEEN ANJU MD WHATSAPP BOT",
              contextInfo: {}
            };
            _0x1928e7.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
            _0x1928e7.contextInfo.groupMentions = [];
            _0x1928e7.contextInfo.forwardingScore = 0x3e7;
            _0x1928e7.contextInfo.isForwarded = true;
            _0x1928e7.contextInfo.forwardedNewsletterMessageInfo = {};
            _0x1928e7.contextInfo.externalAdReply = {};
            _0x1928e7.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x1928e7.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0x1928e7.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x1928e7.contextInfo.externalAdReply.title = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0x1928e7.contextInfo.externalAdReply.body = "𝐃𝐀𝐑𝐊 𝐇𝐀𝐂𝐊𝐄𝐑 𝐌𝐃";
            _0x1928e7.contextInfo.externalAdReply.mediaType = 0x1;
            _0x1928e7.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x1928e7.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x1928e7.contextInfo.externalAdReply.renderLargerThumbnail = false;
            _0x1928e7.contextInfo.externalAdReply.showAdAttribution = true;
            await _0x15a80a.sendMessage(_0xa2a036, _0x1928e7);
          } else {
            if (_0xf9e32 === "2.1") {
              const _0x147d29 = {
                url: _0x5561e9
              };
              const _0x3a295c = {
                audio: _0x147d29,
                mimetype: "audio/mpeg"
              };
              const _0x3f9ca4 = {
                quoted: _0x3e5575
              };
              await _0x15a80a.sendMessage(_0xa2a036, _0x3a295c, _0x3f9ca4);
            } else {
              if (_0xf9e32 === "2.2") {
                const _0x5e2c0b = {
                  url: _0x5561e9
                };
                const _0x9c967b = {
                  document: _0x5e2c0b,
                  mimetype: "audio/mpeg",
                  fileName: "ANJU-MD/TWDL.mp3",
                  caption: "*© QUEEN ANJU WHATSAPP BOT MD*",
                  contextInfo: {}
                };
                _0x9c967b.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                _0x9c967b.contextInfo.groupMentions = [];
                _0x9c967b.contextInfo.forwardingScore = 0x3e7;
                _0x9c967b.contextInfo.isForwarded = true;
                _0x9c967b.contextInfo.forwardedNewsletterMessageInfo = {};
                _0x9c967b.contextInfo.externalAdReply = {};
                _0x9c967b.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                _0x9c967b.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x9c967b.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0x9c967b.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x9c967b.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x9c967b.contextInfo.externalAdReply.mediaType = 0x1;
                _0x9c967b.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                _0x9c967b.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                _0x9c967b.contextInfo.externalAdReply.renderLargerThumbnail = false;
                _0x9c967b.contextInfo.externalAdReply.showAdAttribution = true;
                const _0x126037 = {
                  quoted: _0x3e5575
                };
                await _0x15a80a.sendMessage(_0xa2a036, _0x9c967b, _0x126037);
              } else {
                if (_0xf9e32 === "2.3") {
                  const _0x66767 = {
                    url: _0x5561e9
                  };
                  const _0x3f2a6a = {
                    audio: _0x66767,
                    mimetype: "audio/mp4",
                    ptt: true
                  };
                  const _0x3dc057 = {
                    quoted: _0x3e5575
                  };
                  await _0x15a80a.sendMessage(_0xa2a036, _0x3f2a6a, _0x3dc057);
                }
              }
            }
          }
        }
        const _0x36b3dc = {
          text: '✅',
          key: _0x3e5575.key
        };
        const _0x1c2597 = {
          react: _0x36b3dc
        };
        await _0x15a80a.sendMessage(_0xa2a036, _0x1c2597);
        console.log("Twitter response sent successfully");
      }
    });
  } catch (_0x2831b9) {
    console.log(_0x2831b9);
    _0x45ca91("An error occurred: " + _0x2831b9);
  }
});
function _0x9af0() {
  const _0x3f52ee = ['dable', 'GyBtf', 'MEsmZ', 'gPlQv', 'sinha', 'ory', " 🎶 Au", "r* \"", 'filen', 'JkGmN', " chec", 'actio', 'ber.*', 'owere', 'iles.', 'uDkEP', 'setIn', "To do", " Deta", '://pi', 'PiMEp', " fetc", 'Menti', " repl", 'YLqBV', 'reply', 'TEjke', 'nWiYk', 'igHWp', "HLS\\(", "h mov", 'WnIOu', 'isFor', 'exGdg', "ld Li", 'yMfSS', 'fdkFX', 'zDjrm', "𝙣𝙜 𝙌𝙐", " me t", 'ZusAW', " | 🪫 ", 'BDSBu', "try a", "    ", 'deo:t', "e a v", '1.1', " Vide", '*Erro', 'ope', 'QBLAW', 'dlxnx', 'scrip', 'XAUQq', 'refs/', 'yZwrL', "e Me ", '.andr', "d epi", "* 🔞\n\n", 'b/fun', "*An e", 'carto', 'URL', 'ry=', 'ALnOF', '@xavi', 'ype', 'messa', 'efvFl', 'oRmXZ', 'html', 'nisis', 'ApskT', 'GNQoM', 'onGZU', 'gger', 'JbKuV', "*👤 Dᴇ", 'lengt', 'RwqxN', "\n\n• *", "l fol", "No Pi", 'ZlDBw', 'mrnim', 'each', 'cipan', "\n⬇️ Do", '88931', "2.3 |", '*give', "n (fu", 'sourc', 'gqjxz', 'gRsGR', '21815', 'le.el', 'onedJ', "ent s", 'rtoon', 'thub.', 'thumb', 'oMked', 'cYThY', "ke* -", "ile\n2", 'FuwNK', 'lecti', 'find', 'VIzva', 'iUXpT', 'Pᴀᴄᴋᴀ', 'MBwse', 'rMPfK', '!!*', 'e-arc', " QUAL", 'witte', 'lZCjC', 'd-scr', 'OADER', " - ", '-hold', 'JCvAY', "nxx v", 'com/M', 'p4_1', 'qhqQN', " Pixe", 'Thumb', 'hUXUR', 'lLxJb', 'YmzdT', "NJU W", 'ope.l', 'oad', 'gdICv', 'QHxCP', 'URL.', 'IfhKR', 'dnSZq', "\n\n   ", 'syyAi', 'OCdvQ', 'YGqmx', "\n   \n", 'XGzdP', 'jGmKX', "k the", 'fVREE', 'UcQlt', 'oRsZN', 'MhVtV', 'dsmod', '../li', 'RerLB', "\n📎 *ᴇ", 'vOanu', 'log', 'nrLCa', 'nfyUB', 'VQSRk', 'JeRaL', 'Locpe', 'href', 'GBhBl', 'ods.x', "ᴢᴇ :*", "\n💢 QU", 'nner-', 'links', 'qYkyV', "itle ", 'BBFPc', 'WkfgM', 'PYMdN', 'xVfiA', "| 📂 D", "Url: ", "ptt]\n", 'jNtIA', " 🔋 HD", 'publi', "e upl", 'PAfpu', 'Dsdzn', 'sults', 'ltznR', 'BoBLN', '67962kSTyBB', 'xxCJh', "UEEN ", "on. P", 'eadpo', 'nqMeF', 'ons-b', 'piiIw', '?q=', 'on.ne', 'a-zA-', 'vijAJ', '*Avai', 'k-yas', 'NNTpA', '98bBzjgh', 'url=', 'FIMsM', "rn th", 'ᴘɪꜱᴏᴅ', "eve t", "s for", 'kkNoc', 'eInfo', 'Evfks', 'fOdBJ', 'BQqhc', 'Frwxk', 'ey=mn', 'unlin', "oad a", 'desli', 'JpHDU', '/mpeg', 'BFIYe', 'start', " Desc", "PP BO", 'bLaTx', 'HWdvg', 'cenOw', 'forEa', 'PhIxS', 'osted', "id se", "No re", 'KGksx', "ꜱᴛ Uᴘ", 'UUpXl', 'LwsLF', ".xv <", 'RaYxy', 'IUiNP', " 🎟️ *Q", "d wil", 'ma/ti', 'Roexl', 'cessf', 'Atdvc', 'QNTYn', "\n\nFb-", 'izJTS', "\n1.2 ", 'yghbB', 'Sinha', 'LSpSI', 'div.p', 'i.fgm', 'dlxv', 'Type', 'aFire', '(.*?)', 'twitt', '𝐃𝐎𝐖𝐍𝐋', 'debu', 'qcJAj', "er re", 'ges.u', 'owLgr', 'init', 'vKnkX', '1.jpg', 'lNRaN', 'xvdow', 'Faile', 'CkBWE', 'aper', 'quote', " file", 'sFiLT', ":*\n\nT", 'uKuHm', '883085tCngCB', '(6)', 'a.dlm', 'IwYbo', "Name ", 'slice', 'qeRpw', 'yqHIk', 'JXVRw', 'PbVWl', 'dALfj', 'cjs', 'utltP', 'Pwpve', 'div.v', "HD QU", 'episo', 'iedl', "x lin", 'xelDr', "\n    ", 'name', 'Url16', 'FdWWd', 'bOLHD', 'qjrlf', 'VipuS', 'vJfYf', "🗃️ 」*\n", 'epmLC', "you r", " V2", 'NJAya', "he do", 'ame', "*📆 Lᴀ", '#vide', 're?ur', "2.1 |", 'QyoZV', "An er", 'leDZP', 'XpyJX', 'ZbISZ', " 𝘈𝘕𝘑𝘜", 'asub/', 'ructo', 'OXWqS', 'iLkGU', 'ZZfBg', 'lecte', "red w", ':nth-', 'jFiZF', 'tcHtu', 'tagra', 'child', 'yXphR', 'scrap', 'zA-Z_', " whil", '𝐎𝐀𝐃𝐄𝐑', 'ZwqxA', "e lin", 'FWukW', 'wiMdz', 'qkgBM', 'ideo-', 'wnloa', "Type ", 'hDlKb', " and ", 'nalAd', "NIYA ", " MD V", 'poste', 'DulSn', "r !!*", "on: ", "KTOK ", 'RPank', 'YWsbw', 'tweet', 'zkmGh', '/limi', 'Zasco', 'Name', "nse s", "ease ", 'QQSzh', "ing t", 'szRde', 'arch:', 'avCts', 'DSTKl', "is\")(", "! (e.", 'SBkPC', 'ercon', "r you", 'UQkqh', 'mFUBq', ".*?)'", "e Giv", "k for", 'TWPeU', "d Gdr", "* *🔖 ", " the ", 'input', 'iisdR', 'naBgj', 'RaNzg', 'mbnai', 'hive', 'SFTcB', 'syfYS', 'ument', " MD W", 'spons', '.net/', 'pEmEs', 'ZhcpO', 'parti', 'HmtJy', 'yz/ap', 'eStre', 'rhzJw', 'StIxU', 'vLyst', 'match', 'mtELy', 'csNGu', 'rrash', 'fmfDP', 'oHNJf', 'DL.mp', 'DiIFq', "\":\n\n", 'categ', 'UBuVe', "MD TI", 'image', 'trim', '77562', 'EhQCA', 'UDLrG', 'searc', '32999', 'jtOxJ', 'asaTl', 'kCoRx', "om th", "se pr", '12036', '𝐐𝐔𝐄𝐄𝐍', "ile f", 'catch', 'title', " | 🎶 ", 'resul', 'vSZQo', 'UrlLo', 'Inval', "RE DL", 'join', 'PGcqe', 'st__t', 'rende', 'FWLMC', '*╰───', 'RITpi', 'zVmPo', 'ook', 'BaOuN', 'erThu', 'FFakP', 'ion', 'ELbVv', 'OXKMX', 'zaixH', " this", 'url', "D V2", 'UfyMM', "* - ", 'om/ap', 'kdApw', 'MaSMR', 'tikto', "ᴅᴀᴛᴇ ", 'mBEPf', 'file', 'ripti', 'ges', 'HGwkk', 'ZwZoj', 'ction', 'occur', " | 📼 ", "r Aud", 'NLVqW', 'NwnHX', 'kMhyV', 'iya-a', " foun", 'DmzTa', 'funct', 'meta[', "\n\n☘ *", 'HzbiE', 'entor', 'Video', 'https', 'eTTEc', "ᴇʀꜱ :", 'gfBTd', 'w.bai', 'SCbKl', '../co', 'oper', 'Like*', 'newsl', "o\n  1", 'YCHkn', 'RleiP', 'fWtfL', " 🎤 Vo", '*Down', 'AdfLA', 'ata', 'nqvIB', 'ᴍᴇ:-*', "    Q", "s vid", 'Pleas', 'cript', 'gFdKU', 'YLvUa', '@mrni', 'nstru', '.lk/?', 'hPrJr', 'EEuOk', 'GZZnu', "h a v", 'og:vi', 'yzNzP', 'mkEqW', 'ode.', "TY\n  ", '/mp4', 'dMQdu', 'toStr', "id Me", "g., D", '0-9a-', 'like', 'EERXT', 'WixVY', 'valid', 'pwUHT', 'remot', 'push', 'found', "n Dow", 'IWvDQ', 'qvfQY', 'ᴀᴛᴇ:-', 'bnnJA', 'JqrPE', '*URL:', 'movie', 'Pxnuh', '203igDZEe', 'ffJrJ', "oad t", "EEN A", 'ztxUn', 'CLmcA', 'query', 'chain', "🔢 *Pl", 'hFgai', 'tion', '&apik', 'tter?', "sode ", '690528zmoepp', "w\\('(", "r vid", 'kRbmO', 'lPrUn', '.mp4', 'CFIcr', 'apps/', "'\\);", 'DOWNL', "red b", 'sage', 'VPMyc', 'KMCah', 'bwOvI', 'SAOVD', 'rpIVv', 'KlHTg', 'PLOah', 'IPZqN', 'bqEmv', 'aMHNw', "e fil", 'retur', "SD QU", 'ZXCkZ', 'VTGCj', "ly wi", 'niya/', "ts fo", 'MgwIS', 'scope', '.xnxx', 'ratio', 'ebook', 'MgPcf', '.zip', 'YEODn', 'qVrmS', 'appli', " epis", 'bbKNl', 'troYk', 'Ufupf', "d ins", 'ils:', 'zkisI', "s:*\n", 'yyhZL', " 💢\n\n📝", 'zBgbz', 'Audio', 'xtMes', 'kwXRZ', 'UGBdM', 'bMtdG', 'yer-b', 'Ujcyz', 'VjULg', 'ptt', 'ucces', 'AGTdg', "oad T", 'UxLZT', 'statu', "𝙧 𝙐𝙨𝙞", 'cSKCt', 'yATrm', 'e/Epi', "e scr", 'RNAJR', 'QlAHV', 'pKfJw', '1317gNmUAz', 'Desli', "t vid", 'LOqrw', 'biJOW', 'docum', '2932225fACtrj', 'dyZHC', "oad x", "LITY\n", 'vkoOu', 'w.dar', 'ipKoo', 'QpQfl', 'tptIF', '*(?:[', 't=1', 'RUqYM', 'RFHyJ', "> QUE", 'dAttr', "|  Po", '-time', " \n   ", 'ewsle', "📦 APK", 'deo:h', 'vdhFJ', "a vai", 'nPMaT', "ion. ", 'vPCOr', 'ulcuo', '.app/', " Movi", 'Lwnuu', " 𝐌𝐃", 'zGCRZ', "pper ", 'UiRHo', 'kSync', "ʙᴏᴛ -", 'AZHbJ', "age\"]", '2.3', 'InVjt', " ZIP ", 'TwWAD', 'ackag', 'pop', " Medi", " 𝙏𝙝𝙖𝙣", 'LfQrC', 'vmkFM', "g., A", 'rdedN', 'ovide', 'BIfRE', 'path_', 'bCnom', "📽️ *Se", '/main', 'durat', " vali", 'GvOuW', 'NpnYl', '──◦•◦', 'eRTui', 'zSXIU', 'NBaGJ', 'iktok', "for t", "he da", "y the", "❌ Ple", " want", 'lasub', 'kNUSL', 'NhFxR', "n\"]", "ound ", 'QUALI', 'MzDDp', 'while', 'rame', 'attr', 'low.', 'ownlo', "\n*╭──", 'YJkkC', 'EVcYH', 'WPeTL', 'WHzBz', 'MCTaL', 'Respo', 'YIVFs', " duri", 'pxWAF', 'i/fil', 'DZwar', 'PKsFC', 'Error', 'capti', "d By ", 'pQZDY', 'CELDi', 'yYANK', 'ETRXr', 'eUrl', 'div.i', 'test', 'bdYic', '?url=', 'use', '-butt', ":* ", ".2 | ", "𝙠𝙨 𝙁𝙤", 'DIAFI', "> *© ", "No de", '11807505OOJuip', "nt fi", "T MD*", 'qdjuL', 'xvdl', 'rDqBh', 'UlrZi', 'group', 'loadi', "[2] T", '{}.co', "ideo\n", 'SVhXL', 'xeldr', 'OosNj', 'bOJIF', "t to ", 'cbedI', 'JVZYh', 'yiplp', "l img", 'HfxLu', 'nYbxn', 'IwMdo', 'isode', "ook A", 'apply', 'ideos', 'ffRzO', 'QUEEN', "e cho", "\\+\\+ ", "oad p", "*\n\n> ", 'mXYJW', "ype\"]", 'numbe', 'WZuuy', 'Width', 'znnMG', 'ywoPw', 'TMcbk', 'GzJnC', 'body', 'CtNVV', 'NUkGl', 'audio', 'count', 'XeDkw', 'OiZTA', 'PpGhc', 'rl=', 'SVnAY', "eo. P", 'Twitt', "9\\('(", 'kxskX', 'gMlve', 'tterM', "\n   2", 'nk.', 'CjRdC', 'warde', 'IBLNk', 'EkoPU', 'wHhNH', "MR JA", 'ted.*', 'yTazL', 'BKIjm', 'forwa', 'ement', "\n⏳ *ᴅ", 'HWAmG', 'twdl', "IDEO ", "ANJU ", "\"retu", 'UIgvg', 'fKqDx', 'zcYMf', "a val", 'ubqHc', 'gDBrv', "ies o", 'rovid', 'WtagI', " 💢\n\n🎞", 'mQRPW', 'dTime', 'wzVET', 'QOhPh', 'zlWAo', 'IWkXJ', "\n   1", 'KLOsW', "u wan", 'bwyfV', 'NkGwC', "ub an", "📺 Sea", "n:\n\n[", "d num", 'hubus', '//ws7', 'size', 'acebo', 'BvyvF', "\nQual", "> a", " url ", 'own', " Link", 'prope', 'oide.', 'datal', 'itle*', " By M", 'lkoRx', 'dpIGN', 'JsqZI', 'rvLHn', "*📦 Sɪ", 'rLarg', "\n   3", 'fcUug', "| 🎤 V", "er yo", 'alias', 'oppqB', 'oaded', 'XmlHH', 'cvvcv', 'ANJU-', 'og:du', "e lis", 'QdSaU', 'cheer', "d for", 'QNbMY', 'jTNJD', 'split', 'tsQuI', 'sbZDW', 'zEpgv', ".1 | ", 'sfull', 'iAfEt', '78149', 'og:im', "y wit", "er fo", 'yOUNC', 'rnPnT', 'lrwiQ', 'ruhen', "\nPowe", 'IuMeh', 'ZRjuh', 'tXWXM', 'wlKog', 'PCgzM', 'selec', "\n\n*!.", 'kFhuR', 'wPQpO', 'gTlEw', "r occ", "re li", 'ist', '*Inva', 'nail', 'i/dow', 'deo:w', 'QfuDS', 'kwBDd', 'JpImC', 'aping', 'src', '15400', 'xzbbC', "*© QU", 'VDQDu', "re th", 'Sotnf', 'imgUr', 'PacJJ', 'img', 'dptnZ', 'sendM', "ptt)\n", "hing ", "* *🏷️ ", 'ibuti', "d lin", " 2.2 ", 'fWaYa', 'deAzx', 'yKxyc', 'state', 'te/do', "io\n  ", '://ww', 'QUCjt', 'dDNTo', "ed wh", 'terva', "\n[2] ", 'etter', 'TkQlR', 'oadUr', 'YTJvS', 'S/615', 'HnDQx', "'(.*?", 'mfvtq', 'WdZRn', 'rvetL', 'der', 'deo?u', 'pk.', 'fIbue', 'RoalV', "NJU M", "| 🔋 H", "File ", 'psert', 'link', 'OUQah', 'api/s', 'ArVDB', "t suc", '-=-', 'EIAyA', "MB\n*╎", 'nsfw', "ᴋ*:- ", 'ctor(', 'r.set', 'EEjUo', 'eques', 'Dzxow', 'LRYtB', 'nEMet', "hile ", 'nGIqT', " MD", 'stanz', 'baisc', 'ercel', 'VFNzl', 'BWkyP', 'ycDjF', 'dWmpa', 'qjkKe', 'dfGpn', 'nTiQj', 'halas', 'downl', 'jFccA', "🎥 *", 'PivfI', 'PySHH', 'n/vnd', 'NcNwZ', 'views', 'fetch', 'CFhbk', 'bUlIO', "\n> QU", 'MzuiH', "e pro", 'hNVVG', "𝙀𝙀𝙉 𝘼", 'xSCZY', 'muhNL', 'GhdbC', 'UFOyI', 'BbnQv', "*🪄 ɴᴀ", 'files', 'ZQSPD', 'tnEmi', 'then', 'PzMxn', "not f", 'DATA/', 'com/N', 'dHHVo', "\n2.3 ", '/LOGO', 'GCpLA', '5.apt', 'pipe', 'XTnve', 'RBxpL', 'uywVj', 'exten', 'gwEHi', "Nᴀᴍᴇ ", ')+)+)', 'eos.', 'tdqen', 'qabKT', 'finis', 'riNNI', 'igILX', "EN AN", "eve T", '_epis', "\n*╎* ", 'QGGGW', 'IVlvG', " ᴍᴅ*", "ror o", 'sYgFV', "🔞 *XV", 'nDlzu', "h the", 'LcBUv', "D TWI", 'kIkQO', 'urred', 'showA', 'eultQ', 'mTnVM', 'jZHab', 'QGKnm', "alid ", 'link.', "er fr", 'lutra', 'UGUYf', 'oXQDJ', 'eight', 'PfoIw', "🎬 *", 'nfBkB', 'fire', 'tnvYg', 'faceb', 'lTiiR', 'nSuwu', 'rrrXw', 'apWoJ', 'FqSNO', 'nk:', "he ep", 'xvide', 'fdqCX', 'sted:', 'BtAuZ', 'zfZBI', 'ccurr', "g., G", 'nctio', 'GKKOf', 'OAGcl', 'CVIkO', " down", 'es.', 'hdzNs', 'Views', 'ent', 'piHWx', 'IAtJX', " 𝐀𝐍𝐉𝐔", 'INfsj', "r sel", 'e-2.v', 'i-sit', "oice ", 'd/twi', 'ZKlZg', "ice (", "ꜱᴀᴘᴘ ", 'PlILw', "\\);", 'halaS', " a se", 'mWErG', "\n🔗 Li", "tok V", 'ALITY', 'cpZuz', "* Tik", "\n\n🔢 P", 'hing!', 'NJU-M', 'wTTLO', 'IlqPT', 'ectio', 'info', 'PDnXf', 'w.git', 'axios', 'TjkLp', 'KCNXk', 'tEYeW', 'eJid', 'HATSA', 'd/mfi', " 𝐀𝐏𝐊 ", 'qIqSt', 'CNIDw', 'QIuhk', 'rsati', 'gdriv', "oad F", 'PHMHJ', "\\( *\\", "cut [", 'o-pla', 'ZaCpb', '-post', 'hFhlz', 'Jid', 'UIYQM', 'aQsja', 'spHwV', 'h5.el', 'EnjQt', 'et-st', 'conve', 'playe', 'pi.si', 'boBEz', 'ijwxv', 'iko-A', 'EVLri', 'jazCJ', 'oader', '8@s.w', 'htmCM', 'OIoiS', 'nk...', 'edIOY', 'Size*', 'ISqAH', 'MQGZm', 'metad', "se gi", 'mimet', 'alt', "JU MD", 'nk>', 'xLnJu', 'NmJel', 'wered', 'krxJu', 'OHVVn', 'uDDFX', "ng mo", 'lease', 'h.php', "the d", 'OLYuE', "ed: ", 'imgag', 'oPQTd', 'MUcQc', "ter U", "We ar", 'PWCbn', 'qawwA', "d get", 'nailU', 'QEvoZ', 'p3grl', 'GJEcc', '.elem', 'layer', " deta", " Ensu", " numb", 'arfie', 'WChAw', "rty=\"", "*\n🔗 L", " ANJU", 'itNbP', 'heads', 'exter', 'JigdC', "udio\n", "e rep", 'oad_m', 'or-po', 'eWrit', 'com/a', ".* ", 'essag', 'WmLZR', 'get', 'oid.p', '__thu', 'apk', "y Sin", 'etail', 'WObnT', 'weEfS', 'OjKiY', "𝙉𝙅𝙐 𝙈", " ᴡʜᴀᴛ", 'devel', '://', 'uDEZw', 'ilaca', 'list', 'Downl', 'fHSyu', 'packa', "IYA\n\n", 'updat', '(((.+', '321148ZLGiFc', 'bDTne', 'RAJmM', 'tent.', 'Heigh', 'WpBwV', 'oadin', 'uTUMl', 'XwBVW', 'DPvYw', 'div#p', 'eCqAv', 'const', 'fire_', 'bVDiq', 'rding', 'serve', 'ing', 'ugSXW', 'isila', 'jCyEE', 'NyYjm', 'npuuH', 'ode.z', '://ra', 'rive?', 'JzsaB', 'nrCQf', 'html5', "o\n1.1", 'UrlHi', 'b-wra', 'mgtKt', 'KlVXk', 'aId', "d Med", 'qjpeU', 'OycjG', "ose a", 'call', 'itter', 'YGktO', "d to ", 'BzVsX', '://gi', 'pXXmC', 'MD/FB', 'qAfOc', "ils 📦", 'vzKpU', 'uNpWQ', 'EYEmH', "ng ZI", "etch ", 'artic', "er UR", 'ztSzY', 'ykYNP', '557@n', 'loOee', "vie d", '-thum', 'TnePJ', "R JAN", "\\('(.", "e) {}", 'Reply', 'gxxEh', "] fac", "idth\"", "link ", 'YvZad', 'esult', 'JwdQf', "\n• *T", "e sen", "dio f", 'hOVWe', 'mIBUg', "n sin", 'avFmA', 'data', "D FB ", "Big\\(", "tle\"]", 'xWBzA', 'elect', 'JkaWS', 'ain.c', 'pi/7/', 'yNWrg', 'media', 'MejaI', 'kVePH', 'xmlMo', "load ", "th a ", 'iHvrv', 'video', 'scyKY', 'n/zip', 'jLbUW', 'EJrMU', " (tru", 'GET', "📂 Doc", 'gwlIX', 'ageId', '2.1', 'RyveD', 'retri', 'dvbjw', 'text', 'sWith', '─────', 'oVKuP', 'load', "k is ", 'lKGZF', 'IZKrd', 'MDfHD', 'ktok-', 'UHQFK', 'gLGNh', 'gain.', 'SFIxn', "1] Tw", 'TNWok', 'pSxIC', "╎*\n*╎", 'TOZTd', 'iAZqq', 'raFwJ', 'erCSt', "ok vi", 'RBfQr', 'oUJYb', 'Slide', 'SfhRt', "*\n\n", 'FtuxJ', "ain l", 'desc', "*?)'\\", 'strin', 'xtInf', 'MXsvd', "MD ME", 'strea', "g the", "ive f", 'etchi', 'hatsa', 'ZSKAV', 'uLWyX', 'dqmJM', 'dl_li', 'Score', 'dedTe', 'FLPyL', "\n*╎*\n", 'yIuSG', "Url\\(", '://ap', 'react', "er if", ":*\n\n", 'mmand', 'Objec', " link", 'ream', 'kOMxL', " to s", "n() ", "rch R", "inks ", 'd/xvi', 'AyCoi', 'xOCiU', 'ZGgSD', 'n/oct', 'HAWzI', "ion *", 'span.', "P fil", " to f", 'MD/TW', 'nfig.', "🪫 SD ", 'lwSfq', "D QUA", 'file.', 'path', 'xxrqn', 'AUHFa', 'SZVYs', 'creat', 'BqSXK', "❥•*\n*", "le\n  ", 'Wgnhv', 'Resul', " | 🎟️ ", "E 🎞 ", "\n*「\xA0🗃️", "ad li", ")'\\);", "ng se", 'utton', 'dzUve', 'LfquJ', 'er/gd', 'conte', 'tter', 'fileT', "ile t", 'TjjFg', 'key', 'rying', "t\n\n[1", 'ld)*', 'UTqxn', 'uiteA', 'TvmXh', 'qlLTu', 'xHTcI', 'Kctes', 'inhal', "rror ", 'QTNLX', 'STgQs', 'catio', 'eos', 'BuZVC', 'deos', 'qPXHx', 'nload', 'nks', "os li", "\nTwit", 'h/que', 'SlseQ', '1.2', 'og:ti', 'rUBHg', 'ginis', 'ta.*', 'qtruk', 'IvUwl', '*Plea', 'VDPRj', 'uBHUR', 'diaFi', 'rMess', "m vid", "ᴇ ʟɪɴ", 'xyuli', 'PSHIC', 'MGYao', "tok A", 'SksTp', 'uOGtW', 'high', 'rhdXn', "\n🗓️ Po", "TTER ", "s. Pl", '$]*)', 'BWfUq', "r dow", "ɢᴇ :*", "NIYA\n", "nk: ", 'patte', 'quali', "gh\\('", "lid s", 'hNeah', '94717', "ve me", 'HotEw', 'cUUxl', 'http:', 'okVFT', 'cwuQH', " <xnx", 'iaFir', 'inaID', 'JhwHh', "d by ", "RL: ", 'TwWCr', 'LsmxB', '-cell', "arch ", 'abot/', 'ZuSsJ', 'menti', 'p4_2', 'fb-do', 'hJcNI', "* 🎟️\n\n", "     ", 'oaEiW', 'sjkUO', 'kRFQh', 'Url', "ITY\n\n", " |  P", 'zkxnf', " with", 'ol)*', "ase p", 'ocume', "ity: ", 'gIBxX', 'njGmq', '2.2', 'ᴠᴇʟᴏᴘ', '𝘘𝘜𝘌𝘌𝘕', 'lDDWs', 'ZJpCN', 'dUfwt', 'RBfvd', 'a-mov', 'Zgekc', " > a", 'xnxxd', 'vatar', 'error', 'ully', 'rdIqh', " TITL", 'sode.', "No do", 'Searc', 'deLin', 'Z_$][', 'Dguaa', 'BBOkz', 'KDPNv', "vide ", 'JieSV', 'FOahM', "ink: ", 'HxBXm', 'mika', 'wNkoc', 'cqkss', 'pp.ne', 'MOWgX', 'ADjNj', 'OccMx', 'ons', "he se", 'YNreL', 'lDrai', 'lable', 'laSub', 'ziDkQ', 'fileN', 'nnhdx', 'ND-Ja', "1.2 |", 'RvAwj', "ile\n ", "g > s"];
  _0x9af0 = function () {
    return _0x3f52ee;
  };
  return _0x9af0();
}
const _0x305137 = {
  pattern: "mediafire",
  desc: "To download MediaFire files.",
  react: '🎥',
  category: "download",
  filename: __filename
};
cmd(_0x305137, async (_0x18d3f2, _0x4b45f7, _0x384182, {
  from: _0x3c2065,
  quoted: _0x368634,
  body: _0x40a496,
  isCmd: _0x3749f8,
  command: _0xa4e200,
  args: _0x2b6bd1,
  q: _0x527e83,
  isGroup: _0x37653e,
  sender: _0x2a9033,
  senderNumber: _0x2895e9,
  botNumber2: _0x26b1e3,
  botNumber: _0x9a57c4,
  pushname: _0xe3a9a9,
  isMe: _0x54f3f7,
  isOwner: _0x4b1d98,
  groupMetadata: _0x4c5c18,
  groupName: _0x2927bc,
  participants: _0x1483ba,
  groupAdmins: _0x4d4813,
  isBotAdmins: _0x56ec95,
  isAdmins: _0x29adba,
  reply: _0x3ccaab
}) => {
  try {
    if (!_0x527e83) {
      return _0x384182.reply("Please provide a valid MediaFire link.");
    }
    _0x384182.react('⬇️');
    const _0x316da7 = await axios.get("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x527e83);
    const _0x1494f4 = _0x316da7.data;
    if (!_0x1494f4 || !_0x1494f4.status || !_0x1494f4.result || !_0x1494f4.result.dl_link) {
      return _0x384182.reply("Failed to fetch MediaFire download link. Ensure the link is valid and public.");
    }
    const _0x34e3b4 = _0x1494f4.result.dl_link;
    const _0x1e3156 = _0x1494f4.result.fileName || "mediafire_download";
    const _0x544755 = _0x1494f4.result.fileType || "application/octet-stream";
    _0x384182.react('⬆️');
    let _0x39a7dc = "\n        QUEEN ANJU MD MEDIAFIRE DL\n\n        File Name : " + _0x1e3156 + "\n\n        File Type : " + _0x544755 + "\n        ";
    const _0x32ad75 = {
      url: _0x34e3b4
    };
    const _0x29cf3c = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x29cf3c.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x29cf3c.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x29cf3c.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x29cf3c.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x29cf3c.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x29cf3c.externalAdReply.mediaType = 0x1;
    _0x29cf3c.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x29cf3c.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x29cf3c.externalAdReply.renderLargerThumbnail = false;
    _0x29cf3c.externalAdReply.showAdAttribution = true;
    const _0x30831c = {
      document: _0x32ad75,
      mimetype: _0x544755,
      fileName: _0x1e3156,
      caption: _0x39a7dc,
      contextInfo: _0x29cf3c
    };
    await _0x18d3f2.sendMessage(_0x3c2065, _0x30831c);
  } catch (_0x1ae1ec) {
    console.error(_0x1ae1ec);
    _0x3ccaab("An error occurred: " + _0x1ae1ec.message);
  }
});
const _0x1a7206 = {
  pattern: 'ig',
  desc: "To download instagram videos.",
  react: '🎥',
  category: "download",
  filename: __filename
};
cmd(_0x1a7206, async (_0xd4fdb6, _0x1a6dd7, _0x2fc738, {
  from: _0x3a1035,
  quoted: _0x49755e,
  body: _0x1f1790,
  isCmd: _0x1d8609,
  command: _0x2d042c,
  args: _0x13c9d8,
  q: _0x342383,
  isGroup: _0x24cf6c,
  sender: _0xe6c53b,
  senderNumber: _0x3885e1,
  botNumber2: _0x334389,
  botNumber: _0x5509d9,
  pushname: _0x1dac1a,
  isMe: _0x22896d,
  isOwner: _0x43e4ae,
  groupMetadata: _0xd35d9f,
  groupName: _0x3c6c66,
  participants: _0x3873b9,
  groupAdmins: _0xf8bab0,
  isBotAdmins: _0x52c7d8,
  isAdmins: _0x3aa69f,
  reply: _0xc4c52e
}) => {
  try {
    if (!_0x342383) {
      return _0x2fc738.reply("Please Give Me a vaild Link...");
    }
    _0x2fc738.react('⬇️');
    let _0x32f10f = await igdl(_0x342383);
    let _0x2c4fc3 = await _0x32f10f.data;
    for (let _0x2b15cd = 0; _0x2b15cd < 20; _0x2b15cd++) {
      let _0x5282ff = _0x2c4fc3[_0x2b15cd];
      let _0x3e2ef0 = _0x5282ff.url;
      _0x2fc738.react('⬆️');
      const _0x1199de = {
        url: _0x3e2ef0
      };
      const _0x35a560 = {
        video: _0x1199de,
        mimetype: "video/mp4",
        caption: "> *© 𝘘𝘜𝘌𝘌𝘕 𝘈𝘕𝘑𝘜 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*",
        contextInfo: {}
      };
      _0x35a560.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
      _0x35a560.contextInfo.groupMentions = [];
      _0x35a560.contextInfo.forwardingScore = 0x3e7;
      _0x35a560.contextInfo.isForwarded = true;
      _0x35a560.contextInfo.forwardedNewsletterMessageInfo = {};
      _0x35a560.contextInfo.externalAdReply = {};
      _0x35a560.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
      _0x35a560.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
      _0x35a560.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
      _0x35a560.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
      _0x35a560.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
      _0x35a560.contextInfo.externalAdReply.mediaType = 0x1;
      _0x35a560.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
      _0x35a560.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
      _0x35a560.contextInfo.externalAdReply.renderLargerThumbnail = false;
      _0x35a560.contextInfo.externalAdReply.showAdAttribution = true;
      const _0x524a08 = {
        quoted: _0x1a6dd7
      };
      await _0xd4fdb6.sendMessage(_0x3a1035, _0x35a560, _0x524a08);
      _0x2fc738.react('✅');
    }
  } catch (_0x1c2bb1) {
    console.log(_0x1c2bb1);
  }
});
async function xdl(_0x46c4b1) {
  return new Promise((_0x550d68, _0x10b584) => {
    fetch('' + _0x46c4b1, {
      'method': "get"
    }).then(_0x18f988 => _0x18f988.text()).then(_0x1d6b21 => {
      const _0x8a0170 = {
        xmlMode: false
      };
      const _0x5677f1 = cheerio.load(_0x1d6b21, _0x8a0170);
      const _0x48db23 = _0x5677f1("meta[property=\"og:title\"]").attr("content");
      const _0x58420c = _0x5677f1("meta[property=\"og:duration\"]").attr("content");
      const _0x132701 = _0x5677f1("meta[property=\"og:image\"]").attr("content");
      const _0x5f32c7 = _0x5677f1("meta[property=\"og:video:type\"]").attr("content");
      const _0x26f58e = _0x5677f1("meta[property=\"og:video:width\"]").attr("content");
      const _0x3aa713 = _0x5677f1("meta[property=\"og:video:height\"]").attr("content");
      const _0x2da40e = _0x5677f1("span.metadata").text();
      const _0x46be4b = _0x5677f1("#video-player-bg > script:nth-child(6)").html();
      const _0xef184b = {
        'low': (_0x46be4b.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
        'high': _0x46be4b.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[1],
        'HLS': _0x46be4b.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[1],
        'thumb': _0x46be4b.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[1],
        'thumb69': _0x46be4b.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[1],
        'thumbSlide': _0x46be4b.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[1],
        'thumbSlideBig': _0x46be4b.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[1]
      };
      const _0x56cf58 = {
        title: _0x48db23,
        URL: _0x46c4b1,
        duration: _0x58420c,
        image: _0x132701,
        videoType: _0x5f32c7,
        videoWidth: _0x26f58e,
        videoHeight: _0x3aa713,
        info: _0x2da40e,
        files: _0xef184b
      };
      const _0x38736f = {
        status: true,
        result: _0x56cf58
      };
      _0x550d68(_0x38736f);
    })["catch"](_0x587fdc => _0x10b584({
      'status': false,
      'result': _0x587fdc
    }));
  });
}
const _0x4d9edc = {
  pattern: "xnxxdown",
  alias: ["dlxnxx", "xnxxdl"],
  react: '🫣',
  desc: "Download xnxx videos",
  category: "nsfw"
};
function _0x435c(_0x475014, _0x45a785) {
  const _0x447aff = _0x9af0();
  _0x435c = function (_0x9af086, _0x435c66) {
    _0x9af086 = _0x9af086 - 281;
    let _0xb5df60 = _0x447aff[_0x9af086];
    return _0xb5df60;
  };
  return _0x435c(_0x475014, _0x45a785);
}
function _0x2e3946(_0x330ef0, _0x46a35f, _0x291ec7, _0xda3dd8, _0x1319bc) {
  return _0x435c(_0xda3dd8 + 0x2f, _0x1319bc);
}
_0x4d9edc.use = ".xnxx <xnxx link>";
_0x4d9edc.filename = __filename;
cmd(_0x4d9edc, async (_0x15d6bb, _0x545ea3, _0x37bc1c, {
  from: _0x1667f0,
  l: _0x738230,
  quoted: _0x15a9d0,
  body: _0x1274ef,
  isCmd: _0x4400cc,
  command: _0x4101e3,
  args: _0x124062,
  q: _0x3f4405,
  isGroup: _0x42a647,
  sender: _0x3cda71,
  senderNumber: _0x4e4b10,
  botNumber2: _0x3af14c,
  botNumber: _0x9bd01d,
  pushname: _0x3a78b8,
  isMe: _0x496a67,
  isOwner: _0x271ad2,
  groupMetadata: _0x125b30,
  groupName: _0x22ddcf,
  participants: _0xee14b6,
  groupAdmins: _0x1ca8b7,
  isBotAdmins: _0x879a58,
  isAdmins: _0xb575d4,
  reply: _0x4524e6
}) => {
  try {
    if (!_0x3f4405) {
      return _0x4524e6("*Please give me url !!*");
    }
    let _0x1e3471 = await xdl(_0x3f4405);
    let _0x3cee83 = _0x1e3471.result.title;
    const _0x15e613 = {
      url: _0x1e3471.result.files.high
    };
    const _0xc7fe6a = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0xc7fe6a.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0xc7fe6a.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0xc7fe6a.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0xc7fe6a.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0xc7fe6a.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0xc7fe6a.externalAdReply.mediaType = 0x1;
    _0xc7fe6a.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0xc7fe6a.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0xc7fe6a.externalAdReply.renderLargerThumbnail = false;
    _0xc7fe6a.externalAdReply.showAdAttribution = true;
    const _0x536793 = {
      video: _0x15e613,
      caption: _0x3cee83,
      contextInfo: _0xc7fe6a
    };
    const _0x5758f3 = {
      quoted: _0x545ea3
    };
    await _0x15d6bb.sendMessage(_0x1667f0, _0x536793, _0x5758f3);
  } catch (_0x22e4c1) {
    _0x4524e6("*Error !!*");
    console.log(_0x22e4c1);
  }
});
const _0xab2aa3 = {
  pattern: "xvdown",
  alias: ["dlxv", "xvdl"],
  react: '🫣',
  desc: "Download xvideos videos",
  category: "nsfw",
  use: ".xv <xvideos link>",
  filename: __filename
};
cmd(_0xab2aa3, async (_0x475221, _0x5ed713, _0xb5bda4, {
  from: _0x13b656,
  l: _0xcef730,
  quoted: _0x5d6eaf,
  body: _0x5ea128,
  isCmd: _0x2d958e,
  command: _0x59523f,
  args: _0x3f8615,
  q: _0x4496fb,
  isGroup: _0x353509,
  sender: _0x3716b4,
  senderNumber: _0x2735a9,
  botNumber2: _0x3647b5,
  botNumber: _0x2e5e03,
  pushname: _0x31cfcb,
  isMe: _0x5576f1,
  isOwner: _0x446f1,
  groupMetadata: _0x2bdabc,
  groupName: _0x10a5e9,
  participants: _0xffb673,
  groupAdmins: _0xb72580,
  isBotAdmins: _0xffff10,
  isAdmins: _0x7c751c,
  reply: _0x557244
}) => {
  try {
    if (!_0x4496fb) {
      return _0x557244("*Please give me url !!*");
    }
    let _0x4e2205 = await fetchJson("https://www.dark-yasiya-api.site/download/xvideo?url=" + _0x4496fb);
    const _0x5b5a4e = "\n         🔞 *XVIDEO DOWNLOADER* 🔞\n\n     \n• *Title* - " + _0x4e2205.result.title + "\n\n• *Views* - " + _0x4e2205.result.views + "\n\n• *Like* - " + _0x4e2205.result.like + "\n\n• *Deslike* - " + _0x4e2205.result.deslike + "\n\n• *Size* - " + _0x4e2205.result.size;
    const _0x13100d = {
      url: _0x4e2205.result.dl_link
    };
    const _0x1384d8 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x1384d8.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x1384d8.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x1384d8.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x1384d8.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x1384d8.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x1384d8.externalAdReply.mediaType = 0x1;
    _0x1384d8.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x1384d8.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x1384d8.externalAdReply.renderLargerThumbnail = false;
    _0x1384d8.externalAdReply.showAdAttribution = true;
    const _0x3ef615 = {
      video: _0x13100d,
      caption: _0x5b5a4e,
      contextInfo: _0x1384d8
    };
    await _0x475221.sendMessage(_0x13b656, _0x3ef615);
  } catch (_0x20a88a) {
    _0x557244("*Error !!*");
    console.log(_0x20a88a);
  }
});
const fs = require('fs');
const path = require("path");
const _0xc7a0fd = {
  pattern: "baiscope",
  react: '📑',
  category: "download",
  desc: "baiscope.lk",
  filename: __filename
};
cmd(_0xc7a0fd, async (_0x3ea37a, _0x3c654c, _0x1aaefd, {
  from: _0x15c08e,
  q: _0x1b4a7a,
  isDev: _0x5202d5,
  reply: _0x36c60b
}) => {
  try {
    if (!_0x1b4a7a) {
      return await _0x36c60b("*Please provide a search query! (e.g., Avatar)*");
    }
    const _0x19073f = "https://www.baiscope.lk/?s=" + encodeURIComponent(_0x1b4a7a);
    const _0x327f1e = await axios.get(_0x19073f);
    const _0x228a81 = cheerio.load(_0x327f1e.data);
    let _0x4b5168 = [];
    _0x228a81("article.elementor-post").each((_0x1f4f9d, _0x541ef9) => {
      const _0x6ec392 = _0x228a81(_0x541ef9).find("h5.elementor-post__title > a").text().trim();
      const _0x312ea3 = _0x228a81(_0x541ef9).find("h5.elementor-post__title > a").attr("href");
      const _0x51dde5 = _0x228a81(_0x541ef9).find(".elementor-post__thumbnail img").attr("src");
      if (_0x6ec392 && _0x312ea3 && _0x51dde5) {
        const _0x3a2f23 = {
          title: _0x6ec392,
          episodeLink: _0x312ea3,
          imgUrl: _0x51dde5
        };
        _0x4b5168.push(_0x3a2f23);
      }
    });
    if (_0x4b5168.length === 0) {
      return await _0x36c60b("No results found for: " + _0x1b4a7a);
    }
    let _0x398d1a = "📺 Search Results for *" + _0x1b4a7a + ":*\n\n";
    _0x4b5168.forEach((_0x235864, _0x349b37) => {
      _0x398d1a += '*' + (_0x349b37 + 1) + ".* " + _0x235864.title + "\n🔗 Link: " + _0x235864.episodeLink + "\n\n";
    });
    const _0x40d82a = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x40d82a.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x40d82a.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x40d82a.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x40d82a.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x40d82a.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x40d82a.externalAdReply.mediaType = 0x1;
    _0x40d82a.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x40d82a.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x40d82a.externalAdReply.renderLargerThumbnail = false;
    _0x40d82a.externalAdReply.showAdAttribution = true;
    const _0x3dd37b = {
      text: _0x398d1a,
      contextInfo: _0x40d82a
    };
    const _0x24fd19 = {
      quoted: _0x1aaefd
    };
    const _0x310f9b = await _0x3ea37a.sendMessage(_0x15c08e, _0x3dd37b, _0x24fd19);
    const _0x46b90a = _0x310f9b.key.id;
    _0x3ea37a.ev.on("messages.upsert", async _0x1e6b4c => {
      const _0x5bfb15 = _0x1e6b4c.messages[0];
      if (!_0x5bfb15.message) {
        return;
      }
      const _0x301e5c = _0x5bfb15.message.conversation || _0x5bfb15.message.extendedTextMessage?.["text"];
      const _0x481297 = _0x5bfb15.key.remoteJid;
      const _0x485273 = _0x5bfb15.message.extendedTextMessage && _0x5bfb15.message.extendedTextMessage.contextInfo.stanzaId === _0x46b90a;
      if (_0x485273) {
        const _0x187f30 = parseInt(_0x301e5c.trim());
        if (!isNaN(_0x187f30) && _0x187f30 > 0 && _0x187f30 <= _0x4b5168.length) {
          const _0x5f39f7 = _0x4b5168[_0x187f30 - 1];
          const _0x8164eb = await axios.get(_0x5f39f7.episodeLink);
          const _0x2a2c8e = cheerio.load(_0x8164eb.data);
          const _0x1997b2 = _0x2a2c8e("a.dlm-buttons-button").attr("href");
          if (_0x1997b2) {
            const _0x20706c = {
              url: _0x5f39f7.imgUrl
            };
            const _0x3f8958 = {
              mentionedJid: ["94717775628@s.whatsapp.net"],
              groupMentions: [],
              forwardingScore: 0x3e7,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {},
              externalAdReply: {}
            };
            _0x3f8958.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
            _0x3f8958.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x3f8958.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
            _0x3f8958.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x3f8958.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
            _0x3f8958.externalAdReply.mediaType = 0x1;
            _0x3f8958.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
            _0x3f8958.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
            _0x3f8958.externalAdReply.renderLargerThumbnail = false;
            _0x3f8958.externalAdReply.showAdAttribution = true;
            const _0x14fa90 = {
              image: _0x20706c,
              caption: "🎬 *" + _0x5f39f7.title + "*\n🔗 Link: " + _0x5f39f7.episodeLink + "\n⬇️ Download will follow.",
              contextInfo: _0x3f8958
            };
            const _0x50f4ac = {
              quoted: _0x5bfb15
            };
            await _0x3ea37a.sendMessage(_0x481297, _0x14fa90, _0x50f4ac);
            const _0x1c3590 = path.join(__dirname, "downloaded_episode.zip");
            const _0x551c38 = fs.createWriteStream(_0x1c3590);
            const _0x4dba6e = await axios({
              'url': _0x1997b2,
              'method': "GET",
              'responseType': "stream"
            });
            _0x4dba6e.data.pipe(_0x551c38);
            _0x551c38.on("finish", async () => {
              const _0x28411a = {
                url: _0x1c3590
              };
              const _0x2f1943 = {
                document: _0x28411a,
                mimetype: "application/zip",
                fileName: _0x5f39f7.title + ".zip",
                caption: '*' + _0x5f39f7.title + "*\n\n> QUEEN ANJU MD V2",
                contextInfo: {}
              };
              _0x2f1943.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
              _0x2f1943.contextInfo.groupMentions = [];
              _0x2f1943.contextInfo.forwardingScore = 0x3e7;
              _0x2f1943.contextInfo.isForwarded = true;
              _0x2f1943.contextInfo.forwardedNewsletterMessageInfo = {};
              _0x2f1943.contextInfo.externalAdReply = {};
              _0x2f1943.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
              _0x2f1943.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x2f1943.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
              _0x2f1943.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x2f1943.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
              _0x2f1943.contextInfo.externalAdReply.mediaType = 0x1;
              _0x2f1943.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
              _0x2f1943.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
              _0x2f1943.contextInfo.externalAdReply.renderLargerThumbnail = false;
              _0x2f1943.contextInfo.externalAdReply.showAdAttribution = true;
              const _0x2a4816 = {
                quoted: _0x5bfb15
              };
              await _0x3ea37a.sendMessage(_0x481297, _0x2f1943, _0x2a4816);
              fs.unlinkSync(_0x1c3590);
            });
            _0x551c38.on("error", _0x408167 => {
              console.error("Error downloading ZIP file:", _0x408167);
              _0x36c60b("*Error downloading the episode ZIP file.*");
            });
          } else {
            await _0x36c60b("*Download link not found for the selected episode.*");
          }
        } else {
          await _0x36c60b("*Invalid selection. Please choose a valid number.*");
        }
      }
    });
  } catch (_0x4e0d4) {
    console.error(_0x4e0d4);
    await _0x36c60b("*An error occurred while scraping the data.*");
  }
});
const _0x44c6b0 = {
  pattern: "ginisisila",
  react: '📑',
  category: "download",
  desc: "ginisisilacartoon.net",
  filename: __filename
};
cmd(_0x44c6b0, async (_0x5d514c, _0x5bc0e7, _0xbf2ba2, {
  from: _0x13f526,
  q: _0x3d2c53,
  isDev: _0x26a9ed,
  reply: _0x3589ab
}) => {
  try {
    if (!_0x3d2c53) {
      return await _0x3589ab("*Please provide a search query! (e.g., Garfield)*");
    }
    const _0x2bcf7d = "https://ginisisilacartoon.net/search.php?q=" + encodeURIComponent(_0x3d2c53);
    const _0x3b35e5 = await axios.get(_0x2bcf7d);
    const _0x42f222 = cheerio.load(_0x3b35e5.data);
    let _0x20dc1d = [];
    _0x42f222("div.inner-video-cell").each((_0x18763c, _0x3955ab) => {
      const _0xdb0254 = _0x42f222(_0x3955ab).find("div.video-title > a").attr("title");
      const _0x4baacb = _0x42f222(_0x3955ab).find("div.posted-time").text().trim();
      const _0x18c6c8 = _0x42f222(_0x3955ab).find("div.video-title > a").attr("href");
      const _0xc5b9e7 = _0x42f222(_0x3955ab).find("div.inner-video-thumb-wrapper img").attr("src");
      if (_0xdb0254 && _0x18c6c8) {
        const _0x26d497 = {
          title: _0xdb0254,
          postedTime: _0x4baacb,
          episodeLink: "https://ginisisilacartoon.net/" + _0x18c6c8,
          imageUrl: _0xc5b9e7
        };
        _0x20dc1d.push(_0x26d497);
      }
    });
    if (_0x20dc1d.length === 0) {
      return await _0x3589ab("No results found for: " + _0x3d2c53);
    }
    let _0x3694e9 = "📺 Search Results for *" + _0x3d2c53 + ":*\n\n";
    _0x20dc1d.forEach((_0x466bde, _0xb65c38) => {
      _0x3694e9 += '*' + (_0xb65c38 + 1) + ".* " + _0x466bde.title + "\n🗓️ Posted: " + _0x466bde.postedTime + "\n🔗 Link: " + _0x466bde.episodeLink + "\n\n";
    });
    const _0x565792 = {
      mentionedJid: ["94717775628@s.whatsapp.net"],
      groupMentions: [],
      forwardingScore: 0x3e7,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {},
      externalAdReply: {}
    };
    _0x565792.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x565792.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x565792.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x565792.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x565792.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x565792.externalAdReply.mediaType = 0x1;
    _0x565792.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x565792.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x565792.externalAdReply.renderLargerThumbnail = false;
    _0x565792.externalAdReply.showAdAttribution = true;
    const _0x3a4ce6 = {
      text: _0x3694e9,
      contextInfo: _0x565792
    };
    const _0xa65ce6 = {
      quoted: _0xbf2ba2
    };
    const _0x4d5bb4 = await _0x5d514c.sendMessage(_0x13f526, _0x3a4ce6, _0xa65ce6);
    const _0x4422f0 = _0x4d5bb4.key.id;
    _0x5d514c.ev.on("messages.upsert", async _0x40ff78 => {
      const _0x2ac15b = _0x40ff78.messages[0];
      if (!_0x2ac15b.message) {
        return;
      }
      const _0x267e3f = _0x2ac15b.message.conversation || _0x2ac15b.message.extendedTextMessage?.["text"];
      const _0x530224 = _0x2ac15b.key.remoteJid;
      const _0x106a25 = _0x2ac15b.message.extendedTextMessage && _0x2ac15b.message.extendedTextMessage.contextInfo.stanzaId === _0x4422f0;
      if (_0x106a25) {
        const _0x31038e = parseInt(_0x267e3f.trim());
        if (!isNaN(_0x31038e) && _0x31038e > 0 && _0x31038e <= _0x20dc1d.length) {
          const _0x173aa6 = _0x20dc1d[_0x31038e - 1];
          const _0x4cbdc3 = "*🪄 ɴᴀᴍᴇ:-* " + _0x173aa6.title + "\n⏳ *ᴅᴀᴛᴇ:-* " + _0x173aa6.postedTime + "\n📎 *ᴇᴘɪꜱᴏᴅᴇ ʟɪɴᴋ*:- " + _0x173aa6.episodeLink + "\n\n☘ *We are uploading the Movie/Episode you requested.*";
          const _0xbd2937 = {
            url: _0x173aa6.imageUrl
          };
          const _0x178a15 = {
            mentionedJid: ["94717775628@s.whatsapp.net"],
            groupMentions: [],
            forwardingScore: 0x3e7,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {},
            externalAdReply: {}
          };
          _0x178a15.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
          _0x178a15.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x178a15.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
          _0x178a15.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x178a15.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
          _0x178a15.externalAdReply.mediaType = 0x1;
          _0x178a15.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
          _0x178a15.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
          _0x178a15.externalAdReply.renderLargerThumbnail = false;
          _0x178a15.externalAdReply.showAdAttribution = true;
          const _0x526e0c = {
            image: _0xbd2937,
            caption: _0x4cbdc3,
            contextInfo: _0x178a15
          };
          const _0x38a941 = {
            quoted: _0x2ac15b
          };
          await _0x5d514c.sendMessage(_0x530224, _0x526e0c, _0x38a941);
          const _0x330caa = await axios.get(_0x173aa6.episodeLink);
          const _0x1bb6d7 = cheerio.load(_0x330caa.data);
          const _0x58aa27 = _0x1bb6d7("div#player-holder iframe").attr("src");
          if (_0x58aa27) {
            const _0x36d172 = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x58aa27 + "&apikey=mnp3grlZ";
            try {
              const _0x178692 = await axios.get(_0x36d172);
              const _0x53afac = _0x178692.data.result.downloadUrl;
              if (_0x53afac) {
                const _0x297e5d = {
                  url: _0x53afac
                };
                const _0x55a6a4 = {
                  document: _0x297e5d,
                  mimetype: "video/mp4",
                  fileName: "MR JANIYA | " + _0x173aa6.title + ".mp4",
                  caption: _0x173aa6.title + " |  Powered By MR JANIYA\n\n> QUEEN ANJU MD V2",
                  contextInfo: {}
                };
                _0x55a6a4.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
                _0x55a6a4.contextInfo.groupMentions = [];
                _0x55a6a4.contextInfo.forwardingScore = 0x3e7;
                _0x55a6a4.contextInfo.isForwarded = true;
                _0x55a6a4.contextInfo.forwardedNewsletterMessageInfo = {};
                _0x55a6a4.contextInfo.externalAdReply = {};
                _0x55a6a4.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
                _0x55a6a4.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x55a6a4.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
                _0x55a6a4.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x55a6a4.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
                _0x55a6a4.contextInfo.externalAdReply.mediaType = 0x1;
                _0x55a6a4.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
                _0x55a6a4.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
                _0x55a6a4.contextInfo.externalAdReply.renderLargerThumbnail = false;
                _0x55a6a4.contextInfo.externalAdReply.showAdAttribution = true;
                const _0x3c57c8 = {
                  quoted: _0x2ac15b
                };
                await _0x5d514c.sendMessage(_0x530224, _0x55a6a4, _0x3c57c8);
              } else {
                await _0x3589ab("Failed to retrieve the download link for this episode.");
              }
            } catch (_0x96e9ce) {
              console.error("Error fetching the download link:", _0x96e9ce);
              await _0x3589ab("An error occurred while trying to fetch the download link.");
            }
          } else {
            await _0x3589ab("No downloadable link found for this episode.");
          }
        } else {
          await _0x3589ab("Please reply with a valid number from the list.");
        }
      }
    });
  } catch (_0x241464) {
    _0x3589ab("*Error occurred while scraping!*");
    console.error(_0x241464);
  }
});
const _0x33f962 = {
  pattern: "apk",
  desc: "Download apk.",
  category: "download",
  filename: __filename
};
cmd(_0x33f962, async (_0x137791, _0x3bcf3d, _0x302929, {
  from: _0x2050ee,
  quoted: _0x3b8b54,
  body: _0x24345a,
  isCmd: _0x527d54,
  command: _0x791a3,
  args: _0x7d6ff5,
  q: _0x2fb0e3,
  isGroup: _0x4af8a6,
  sender: _0xb8ad27,
  senderNumber: _0x4fc7ce,
  botNumber2: _0x5c22e7,
  botNumber: _0x24911c,
  pushname: _0x16392c,
  isMe: _0x4ecc45,
  isOwner: _0x1fb827,
  groupMetadata: _0x494a3c,
  groupName: _0x5714ec,
  participants: _0xcc769b,
  groupAdmins: _0x4a5b40,
  isBotAdmins: _0x4189c9,
  isAdmins: _0x584eb5,
  reply: _0x5b1fac
}) => {
  try {
    await _0x302929.react('⬇');
    const _0x214f88 = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x2fb0e3 + "/limit=1";
    const _0x2308a2 = await axios.get(_0x214f88);
    const _0x10ae5d = _0x2308a2.data;
    let _0x2f3999 = _0x10ae5d.datalist.list[0].size % 1000000;
    let _0x3c45fd = '.' + _0x2f3999;
    let _0x2f66ec = _0x10ae5d.datalist.list[0].size / 1000000;
    let _0x278bd4 = _0x2f66ec - _0x3c45fd;
    let _0x5f5ca2 = "\n*「\xA0🗃️𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐀𝐏𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑🗃️ 」*\n\n*╭──📦 APK Details 📦──◦•◦❥•*\n*╎*\n*╎* *🏷️ Nᴀᴍᴇ :* " + _0x10ae5d.datalist.list[0].name + "\n*╎* *📦 Sɪᴢᴇ :* " + _0x278bd4 + "MB\n*╎* *🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x10ae5d.datalist.list[0]["package"] + "\n*╎* *📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x10ae5d.datalist.list[0].updated + "\n*╎* *👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x10ae5d.datalist.list[0].developer.name + "\n*╎*\n*╰────────────────────◦•◦❥•*\n* 𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 𝙌𝙐𝙀𝙀𝙉 𝘼𝙉𝙅𝙐 𝙈𝘿";
    await _0x302929.react('⬆');
    const _0x3566e3 = {
      url: _0x10ae5d.datalist.list[0].file.path_alt
    };
    const _0x2d5ce6 = {
      document: _0x3566e3,
      fileName: _0x10ae5d.datalist.list[0].name,
      mimetype: "application/vnd.android.package-archive",
      caption: _0x5f5ca2,
      contextInfo: {}
    };
    _0x2d5ce6.contextInfo.mentionedJid = ["94717775628@s.whatsapp.net"];
    _0x2d5ce6.contextInfo.groupMentions = [];
    _0x2d5ce6.contextInfo.forwardingScore = 0x3e7;
    _0x2d5ce6.contextInfo.isForwarded = true;
    _0x2d5ce6.contextInfo.forwardedNewsletterMessageInfo = {};
    _0x2d5ce6.contextInfo.externalAdReply = {};
    _0x2d5ce6.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
    _0x2d5ce6.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2d5ce6.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
    _0x2d5ce6.contextInfo.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2d5ce6.contextInfo.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
    _0x2d5ce6.contextInfo.externalAdReply.mediaType = 0x1;
    _0x2d5ce6.contextInfo.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
    _0x2d5ce6.contextInfo.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
    _0x2d5ce6.contextInfo.externalAdReply.renderLargerThumbnail = false;
    _0x2d5ce6.contextInfo.externalAdReply.showAdAttribution = true;
    const _0x1a2f28 = {
      quoted: _0x3bcf3d
    };
    await _0x137791.sendMessage(_0x2050ee, _0x2d5ce6, _0x1a2f28);
    await _0x302929.react('✅');
  } catch (_0x56c98b) {
    console.log(_0x56c98b);
    _0x5b1fac('' + _0x56c98b);
  }
});
const {
  sinhalaSub
} = require("mrnima-moviedl");
const _0x4855ab = {
  pattern: "sinhalasub",
  react: '📑',
  category: "download",
  desc: "Search movies on sinhalasub and get download links",
  filename: __filename
};
cmd(_0x4855ab, async (_0x5a6d67, _0x17a458, _0xa00846, {
  from: _0x1e2cfb,
  q: _0x5e29db,
  reply: _0x3035af
}) => {
  try {
    if (!_0x5e29db) {
      return await _0x3035af("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x3677c8 = await sinhalaSub();
    const _0x504b52 = await _0x3677c8.search(_0x5e29db);
    const _0x4f2afe = _0x504b52.result.slice(0, 10);
    if (!_0x4f2afe || _0x4f2afe.length === 0) {
      return await _0x3035af("No results found for: " + _0x5e29db);
    }
    let _0x309e02 = "📽️ *Search Results for* \"" + _0x5e29db + "\":\n\n";
    _0x4f2afe.forEach((_0x598b9a, _0xb6113c) => {
      _0x309e02 += '*' + (_0xb6113c + 1) + ".* " + _0x598b9a.title + "\n🔗 Link: " + _0x598b9a.link + "\n\n";
    });
    const _0x21abeb = {
      text: _0x309e02
    };
    const _0x715105 = {
      quoted: _0xa00846
    };
    const _0x28344b = await _0x5a6d67.sendMessage(_0x1e2cfb, _0x21abeb, _0x715105);
    const _0x3de29f = _0x28344b.key.id;
    _0x5a6d67.ev.on("messages.upsert", async _0x419bd2 => {
      const _0x24fc3d = _0x419bd2.messages[0];
      if (!_0x24fc3d.message) {
        return;
      }
      const _0x41162e = _0x24fc3d.message.conversation || _0x24fc3d.message.extendedTextMessage?.["text"];
      const _0x23f617 = _0x24fc3d.message.extendedTextMessage && _0x24fc3d.message.extendedTextMessage.contextInfo.stanzaId === _0x3de29f;
      if (_0x23f617) {
        const _0x5dd5e0 = parseInt(_0x41162e.trim());
        if (!isNaN(_0x5dd5e0) && _0x5dd5e0 > 0 && _0x5dd5e0 <= _0x4f2afe.length) {
          const _0xa88b14 = _0x4f2afe[_0x5dd5e0 - 1];
          const _0x931579 = "https://api-site-2.vercel.app/api/sinhalasub/movie?url=" + encodeURIComponent(_0xa88b14.link);
          try {
            const _0x142090 = await axios.get(_0x931579);
            const _0x262545 = _0x142090.data.result;
            const _0x3fe11c = _0x262545.dl_links || [];
            if (_0x3fe11c.length === 0) {
              return await _0x3035af("No PixelDrain links found.");
            }
            let _0x4e7c86 = "🎥 *" + _0x262545.title + "*\n\n";
            _0x4e7c86 += "*Available PixelDrain Download Links:*\n";
            _0x3fe11c.forEach((_0x4a0e01, _0x3e9d47) => {
              _0x4e7c86 += '*' + (_0x3e9d47 + 1) + ".* " + _0x4a0e01.quality + " - " + _0x4a0e01.size + "\n🔗 Link: " + _0x4a0e01.link + "\n\n";
            });
            const _0x297129 = {
              text: _0x4e7c86
            };
            const _0x5e28b4 = {
              quoted: _0x24fc3d
            };
            const _0x59da29 = await _0x5a6d67.sendMessage(_0x1e2cfb, _0x297129, _0x5e28b4);
            const _0x3521c1 = _0x59da29.key.id;
            _0x5a6d67.ev.on("messages.upsert", async _0x5393aa => {
              const _0xaba8ba = _0x5393aa.messages[0];
              if (!_0xaba8ba.message) {
                return;
              }
              const _0x387172 = _0xaba8ba.message.conversation || _0xaba8ba.message.extendedTextMessage?.["text"];
              const _0x5a1bc2 = _0xaba8ba.message.extendedTextMessage && _0xaba8ba.message.extendedTextMessage.contextInfo.stanzaId === _0x3521c1;
              if (_0x5a1bc2) {
                const _0x25361 = parseInt(_0x387172.trim());
                if (!isNaN(_0x25361) && _0x25361 > 0 && _0x25361 <= _0x3fe11c.length) {
                  const _0x119de3 = _0x3fe11c[_0x25361 - 1];
                  const _0x48dda0 = _0x119de3.link.split('/').pop();
                  const _0x1e6957 = {
                    text: '⬇️',
                    key: _0xa00846.key
                  };
                  const _0x163b93 = {
                    react: _0x1e6957
                  };
                  await _0x5a6d67.sendMessage(_0x1e2cfb, _0x163b93);
                  const _0xaa4490 = "https://pixeldrain.com/api/file/" + _0x48dda0;
                  const _0x57b8d9 = {
                    text: '⬆',
                    key: _0xa00846.key
                  };
                  const _0x4e5a3e = {
                    react: _0x57b8d9
                  };
                  await _0x5a6d67.sendMessage(_0x1e2cfb, _0x4e5a3e);
                  const _0x4a0bee = {
                    url: _0xaa4490
                  };
                  const _0x13bca0 = {
                    document: _0x4a0bee,
                    mimetype: "video/mp4",
                    fileName: _0x262545.title + " - " + _0x119de3.quality + ".mp4",
                    caption: _0x262545.title + "\nQuality: " + _0x119de3.quality + "\nPowered by SinhalaSub",
                    contextInfo: {}
                  };
                  _0x13bca0.contextInfo.mentionedJid = [];
                  _0x13bca0.contextInfo.externalAdReply = {};
                  _0x13bca0.contextInfo.externalAdReply.title = _0x262545.title;
                  _0x13bca0.contextInfo.externalAdReply.body = "Download powered by SinhalaSub";
                  _0x13bca0.contextInfo.externalAdReply.mediaType = 0x1;
                  _0x13bca0.contextInfo.externalAdReply.sourceUrl = _0xa88b14.link;
                  _0x13bca0.contextInfo.externalAdReply.thumbnailUrl = _0x262545.image;
                  const _0x16de0a = {
                    quoted: _0xaba8ba
                  };
                  await _0x5a6d67.sendMessage(_0x1e2cfb, _0x13bca0, _0x16de0a);
                  const _0x32c10d = {
                    text: '✅',
                    key: _0xa00846.key
                  };
                  const _0x37fc7e = {
                    react: _0x32c10d
                  };
                  await _0x5a6d67.sendMessage(_0x1e2cfb, _0x37fc7e);
                } else {
                  await _0x3035af("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x4be76d) {
            console.error("Error fetching movie details:", _0x4be76d);
            await _0x3035af("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x3035af("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x3b03d2) {
    console.error("Error during search:", _0x3b03d2);
    _0x3035af("*An error occurred while searching!*");
  }
});
const _0x506f10 = {
  pattern: "gdrive",
  desc: "To download Gdrive files."
};
function _0x10ff23(_0x1c90cb, _0x46e482, _0x1b9c82, _0x2477b1, _0x369f96) {
  return _0x435c(_0x1b9c82 - 0x1ae, _0x369f96);
}
_0x506f10.react = '🌐';
_0x506f10.category = "download";
_0x506f10.filename = __filename;
cmd(_0x506f10, async (_0x816858, _0x4e21a6, _0x3043ad, {
  from: _0x5302f8,
  quoted: _0x7893d2,
  body: _0x17698e,
  isCmd: _0x37db05,
  command: _0x5813a6,
  args: _0x5a54f9,
  q: _0x184406,
  isGroup: _0x26cc0c,
  sender: _0x1f6333,
  senderNumber: _0x166caa,
  botNumber2: _0x4a88cf,
  botNumber: _0x1a2829,
  pushname: _0x4ee129,
  isMe: _0x2be19e,
  isOwner: _0x5df8a9,
  groupMetadata: _0x446ef8,
  groupName: _0x3424ea,
  participants: _0x7ab1af,
  groupAdmins: _0x48ee39,
  isBotAdmins: _0x3609e1,
  isAdmins: _0x19af64,
  reply: _0x1cf7dd
}) => {
  try {
    const _0x583168 = {
      text: '⬇️',
      key: _0x4e21a6.key
    };
    const _0x3eabf0 = {
      react: _0x583168
    };
    await _0x816858.sendMessage(_0x5302f8, _0x3eabf0);
    if (!_0x184406) {
      return _0x3043ad.reply("Please Give Me a vaild Link...");
    }
    const _0x2bc74f = "https://api.fgmods.xyz/api/downloader/gdrive?url=" + _0x184406 + "&apikey=mnp3grlZ";
    const _0x1d89a6 = await axios.get(_0x2bc74f);
    const _0x26fc82 = _0x1d89a6.data.result.downloadUrl;
    if (_0x26fc82) {
      const _0x4790a1 = {
        text: '⬆️',
        key: _0x4e21a6.key
      };
      const _0x15e645 = {
        react: _0x4790a1
      };
      await _0x816858.sendMessage(_0x5302f8, _0x15e645);
      const _0x5bf5f6 = {
        url: _0x26fc82
      };
      const _0x54408d = {
        mentionedJid: ["94717775628@s.whatsapp.net"],
        groupMentions: [],
        forwardingScore: 0x3e7,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {},
        externalAdReply: {}
      };
      _0x54408d.forwardedNewsletterMessageInfo.newsletterJid = "120363299978149557@newsletter";
      _0x54408d.forwardedNewsletterMessageInfo.newsletterName = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
      _0x54408d.forwardedNewsletterMessageInfo.serverMessageId = 0x3e7;
      _0x54408d.externalAdReply.title = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
      _0x54408d.externalAdReply.body = "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐌𝐃";
      _0x54408d.externalAdReply.mediaType = 0x1;
      _0x54408d.externalAdReply.sourceUrl = "https://github.com/Mrrashmika";
      _0x54408d.externalAdReply.thumbnailUrl = "https://raw.githubusercontent.com/Niko-AND-Janiya/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg";
      _0x54408d.externalAdReply.renderLargerThumbnail = false;
      _0x54408d.externalAdReply.showAdAttribution = true;
      const _0x1b1396 = {
        document: _0x5bf5f6,
        mimetype: _0x1d89a6.data.result.mimetype,
        fileName: _0x1d89a6.data.result.fileName,
        caption: "|  Powered By MR JANIYA\n\n> QUEEN ANJU MD V2",
        contextInfo: _0x54408d
      };
      const _0xd5fcaf = {
        quoted: _0x4e21a6
      };
      await _0x816858.sendMessage(_0x5302f8, _0x1b1396, _0xd5fcaf);
    }
    const _0x2c180b = {
      text: '✅',
      key: _0x4e21a6.key
    };
    const _0x4bde3a = {
      react: _0x2c180b
    };
    await _0x816858.sendMessage(_0x5302f8, _0x4bde3a);
  } catch (_0x1ca75f) {
    console.log(_0x1ca75f);
  }
});
function _0x27848b(_0x4e7087) {
  function _0x3e53ae(_0x31849c) {
    if (typeof _0x31849c === "string") {
      return function (_0x4fbfc5) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x31849c / _0x31849c).length !== 1 || _0x31849c % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x3e53ae(++_0x31849c);
  }
  try {
    if (_0x4e7087) {
      return _0x3e53ae;
    } else {
      _0x3e53ae(0);
    }
  } catch (_0x4eea32) {}
}
function _0x3f5f98(_0x92da26, _0x2c0bbd, _0x5d88d6, _0x20cb61, _0x4953ee) {
  return _0x435c(_0x20cb61 + 0x1a6, _0x5d88d6);
}
(function () {
  let _0x4e779a;
  try {
    const _0x274308 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4e779a = _0x274308();
  } catch (_0x544476) {
    _0x4e779a = window;
  }
  _0x4e779a.setInterval(_0x27848b, 4000);
})();
