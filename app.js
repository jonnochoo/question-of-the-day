var PushBullet = require('pushbullet');
var config = require('./config');
var random = require('random-js')();

var data =require('./' + process.argv[2]) 

var pusher = new PushBullet(config.pushbullet.apiKey);
pusher.note(config.pushbullet.deviceId, getRandom(), '', function(err, response) {
  if(err) {
    return console.log(err);
  }

  console.log(response.title);
});

function getRandom() {
  var value = random.integer(0, data.length - 1);
  return data[value];
}
