const request = require('request');
const token = process.env.token;

const payload = {
  'content': 'hu'
};

const header = {
  'authorization': 'OTczOTk4MzE3MTkxMTcyMTU4.G255U4.kdohELokhHcXUDa44FDLVRRqIEebgGyfzLDcGI'
};

// قم بإنشاء مصفوفة لتخزين IDs القنوات في الترتيب المطلوب
const channels = [
"1210017918235050047",
];

let currentIndex = 0; // متغير لتتبع القناة الحالية

function sendMessage() {
  const channelId = channels[currentIndex];
  const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
  request.post(url, {
    headers: header,
    json: payload
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(body);
  });
  currentIndex = (currentIndex + 1) % channels.length; // التحقق من القناة التالية في كل دورة
}

// تعيين وقت الانتظار بين كل دورة من الرسائل (بالمللي ثانية)
const intervalTime = 2000;

// بدء الدورة المتكررة لإرسال الرسائل
setInterval(sendMessage, intervalTime);


// السورس الاساسي لـ اظهار رابط موقعك في ريبل ات وجعل البوت الخاص فيك 24ساعة
// https://ra3dstudio.com CopyRight Codes

setInterval(function() {
  var now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
