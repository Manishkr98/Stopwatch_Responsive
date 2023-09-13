
let [second, minutes, hours] =[0, 0, 0];
let Stopwatch = document.getElementById("Stopwatch");
let timer=null;


function watch(){
    second++;
    if(second==60){
        second=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++
        }
    }

    let h =hours< 10 ? "0" + hours : hours;

    let m = minutes<10 ? "0" + minutes : minutes;

    let s = second<10 ? "0" + second : second;

    Stopwatch.innerHTML = h + ":" + m + ":" + s;

}

function Startwatch(){
    if(timer!==null){
        clearInterval(timer)
    }
    timer=setInterval(watch, 1000);
}

function Pausewatch(){
    clearInterval(timer);
}

function Resetwatch(){
    clearInterval(timer);
    [second, minutes, hours]=[0, 0, 0];
    Stopwatch.innerHTML="00:00:00";
}