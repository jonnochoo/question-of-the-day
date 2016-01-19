var PushBullet = require('pushbullet');
var config = require('./config');

var pusher = new PushBullet(config.pushbullet.apiKey);
pusher.devices(function(err, response) {
  if(err) return console.log(err);

  response.devices.forEach(function(device) {
    console.log(`${device.nickname} (${device.iden})`); 
  });
});