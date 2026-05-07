let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;


let btns=["red","yellow","teal","blue"];

let body=document.querySelector('body');
let h3=document.querySelector('h3');
let startBtn=document.querySelector(".start-btn");

startBtn.addEventListener("click", ()=>{
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;

    // random button choose then flash
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randombtn=document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    gameFlash(randombtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
            if(userSeq.length==gameSeq.length){
                setTimeout(levelUp, 1000);
                console.log("same seq");
        }
    }
    else{
        h3.innerHTML=`Game over! Your score was <b>${level}</b>.<br>Press any key to start `;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor=" rgb(234, 234, 181)";
        },200);
        console.log("wrong seq");
        reset();
     }
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
