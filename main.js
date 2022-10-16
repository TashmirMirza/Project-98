var SpeechRecognition = window.webkitSpeechRecognition;
recognition=new SpeechRecognition () ;
function stt() {
    document.getElementById("txtbox").innerHTML="";
    recognition.start();
}; 
recognition.onresult=function (event) {
    console.log (event);
    var content=event.results[0][0].transcript;
    document.getElementById("txtbox").innerHTML=content;
};