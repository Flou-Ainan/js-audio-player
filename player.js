var musicIDs = ["musica01", "musica02", "musica03"];
var player;

function stopOthers(audioID) {
    for(let i=0; i < musicIDs.length ; i++){
        if (!(musicIDs[i] === audioID)){
            stopAudio(musicIDs[i]);
        }
    }
}

function playAudio(audioID) {
    stopOthers(audioID);
    player = document.getElementById(audioID);
    player.play(); 
} 

function pauseAudio(audioID) { 
    player = document.getElementById(audioID);
    player.pause(); 
}

function stopAudio(audioID) {
    player = document.getElementById(audioID);
    player.pause();
    player.currentTime = 0;
}