//main script

//html button activates greeting function
document.getElementById("wake_button").addEventListener("click", greeting);

function greeting(){
// variables
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices.filter(function(voice) { return voice.name == 'Alex'; })[0];

  if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    msg.text = "Hello, Sir.";
    window.speechSynthesis.speak(msg);
  }else{
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }

  // Begin collecting data
    // variables
  var current_tab;

  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    current_tab = tabs[0];
    console.log(current_tab.url);
    //parse url
    var partsArray = current_tab.url.split('/');
    //alert(partsArray);
    let text = "Currently at ";
    let result = text.concat(partsArray[2]);
    msg.text = result;
    //alert(url);
    window.speechSynthesis.speak(msg);
    
});
}
 

 