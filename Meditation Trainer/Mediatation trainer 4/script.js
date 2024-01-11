const container  = document.getElementById('container');
const text = document.getElementById('text');

//declaring time variables
const totaltime = 7500;
const breathetime = (totaltime / 5) * 2 ;// totally 3 seconds
const holdtime = totaltime / 5; //totally 1.5 seconds

//audio
var music = "music.mp3";
var bgaudio = new Audio();
var breathein = document.getElementById("breathein");
var hold = document.getElementById("hold");
var breatheout = document.getElementById("breatheout");

//creating a background audio source 
bgaudio.src = music;
//adjusting the volume
bgaudio.volume = 0.6;
bgaudio.autoplay = true;

//creating a animation function
breatheanimation();

function breatheanimation()
{
    text.innerText = 'Breathe in';
    container.className = 'container grow'; //creating a class name for growth animation 
    breathein.play();

    //creating a timeout for holdfunction to take place
    setTimeout(() => {
        text.innerText = 'Hold';
        hold.play();

        //creating a timeout for breathout function 
        setTimeout(() => {
            text.innerText = 'Breath Out';
            container.className = 'container shrink';
            breatheout.play();
        },holdtime);
    },breathetime);


}

//setting an interval to repeat the breathanimation function after a specific period of time
setInterval(breatheanimation, totaltime);