(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";
byeSpeaker.speak = function speak(x) {
  console.log(speakWord + " " + x);
};
window.byeSpeaker= byeSpeaker;
})(window);