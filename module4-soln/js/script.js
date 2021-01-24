(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(name in names){
  var x = names[name];
  var first = x.charAt(0);
  var char = first.toLowerCase();
  if (char == 'j') {
    byeSpeaker.speak(x);
  }
 else {
   helloSpeaker.speak(x);
  }
}
})();