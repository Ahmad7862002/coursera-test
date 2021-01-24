(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function speak(x) {
  console.log(speakWord + " " + x);
};
window.helloSpeaker = helloSpeaker;
})(window);