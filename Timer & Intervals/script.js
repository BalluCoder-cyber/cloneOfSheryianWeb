/*let setTime = setTimeout(function(){
    console.log("hello");  // run only once..

},5000);

clearTimeout(setTime);  // stop the timeout..

// let setInterval = setInterval(function(){
//     console.log("hello"); // run again and again in intervals..

// },5000);

// clearInterval(setInterval); // clear interval or stop it ..



// Make an number printer..

let count = 1;
let interval = setInterval(function(){
if(count <=10 ){
    console.log(count)
    count++;
}else{
    clearInterval(interval);
}
},1000); */



let count = 1;
let progress = document.querySelector(".progress");
let progressNum = document.querySelector("#progressNum");
let progressinfo = document.querySelector("#progressinfo");
let pause = document.querySelector(".download-btn");
let status = document.querySelector(".status");



let intv = setInterval(run,4000/100)

function run(){
    if(count <=100){
        let statusValue = 100-count;
        progress.style.width = `${count}%`;
        progressNum.textContent = `${count}%`;
        status.textContent = `${statusValue} sec remaining`
        count++;
    }else{
        progressinfo.textContent = "Downloaded";
        clearInterval(intv);

    }
}

let toogle = false;
pause.addEventListener("click",function(){

    pause.classList.toggle("paused");

    if(pause.classList.contains("paused") && !toogle){
        pause.textContent = "Resume";
        clearInterval(intv);
        toogle = true;
    }else{
        intv = setInterval(run,4000/100);
        pause.textContent = "Pause";
        toogle = false;
    }
   
});



