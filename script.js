function playAudio(){

var audio = document.createElement('audio');
audio.src= './sound.mp3'
audio.loop=true;
audio.play();
var a =document.getElementById('audio');
a.load();
}


