var PushBullet = require('pushbullet');
var config = require('./config');
var questions = require('./questions');
var random = require('random-js')();

var pusher = new PushBullet(config.pushbullet.apiKey);
pusher.note(config.pushbullet.deviceId, getRandomQuestion(), '', function(err, response) {
  if(err) {
    return console.log(err);
  }

  console.log(response.title);
});

function getRandomQuestion() {
  var value = random.integer(0, questions.length - 1);
  return questions[value];
}
