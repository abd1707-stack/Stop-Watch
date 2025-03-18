let Min = document.getElementById('Min')
let Sec = document.getElementById('Sec')
let Msec = document.getElementById('Msec')

let stopbtn = document.getElementById('stopBtn')

let js_min = 0;
let js_sec = 0;
let js_msec = 0;

let intervel;

function Start(){
    intervel =  setInterval(function(){
        js_msec++
        Msec.innerHTML = js_msec;
    
    if(js_msec >= 100){
        js_sec++
        Sec.innerHTML = js_sec;
        js_msec = 0
    }else if (js_sec >= 5) {
        js_min++
        Min.innerHTML = js_min;
        js_sec = 0
    }
    
stopbtn.disabled = true



    },10)
}

function Stop() {

    clearInterval(intervel)


    stopbtn.disabled = false
}

function Reset(){

js_min = 0;
 js_sec = 0;
 js_msec = 0;

setTimeout(function(){

    Min.innerHTML =  js_min
    Sec.innerHTML = js_sec
    Msec.innerHTML = js_msec



})
clearInterval(intervel)
stopbtn.disabled = false
}