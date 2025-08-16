let gameSeq = [];
let userSeq = [];

let btns = [ "red", "green","yellow", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let randInd = Math.floor(Math.random() * btns.length);
  let randColor = btns[randInd];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randInd);
  // console.log(randColor);
  // console.log(randBtn);
  
  gameSeq.push(randColor);
  console.log("Game Sequence",gameSeq);
  gameFlash(randBtn);
}


function checkAns(idx){
  //console.log("current level:",level)
  // let idx=level-1;

  if (userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000)
    }
    // console.log("same value");
  }else{
    h2.innerHTML=`Game over! your score was <b> ${level} </b> </br> press any any key to game start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }

}

function btnPress(){
  //console.log(this);

    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
   
}
