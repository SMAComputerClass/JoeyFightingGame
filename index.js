'use strict';
var yourCharacter= "Mr. No Name";
var opponentHealth= 100;
var opponent;
var yourCharacterPicture;

function chooseAdlani(){
  yourCharacter= "Adlani";
  document.getElementById("yourCharacter").innerHTML = "ADLANI";
  return
}
function chooseNoah(){
  yourCharacter= "Noah";
  document.getElementById("yourCharacter").innerHTML = "NOAH";
  return
}
function chooseJoey(){
  yourCharacter= "Joey";
  document.getElementById("yourCharacter").innerHTML = "JOEY";
  banana.innerHTML = "<img src= 'JOEY NINJA.jpg'>";
  return
}
function chooseDiego(){
  yourCharacter= "Diego";
  document.getElementById("yourCharacter").innerHTML = "DIEGO";
  return
}
function chooseJon(){
  yourCharacter= "Jon";
  document.getElementById("yourCharacter").innerHTML = "JON";
  return
}

function punch()
{
  document.getElementById("opponentHealth").innerHTML = opponentHealth-10;
  opponentHealth=opponentHealth-10;
  if (opponentHealth<=0){
    alert("Congratulations "+yourCharacter+", you killed an innocent man.");
      document.getElementById("opponentHealth").innerHTML = 100;
    opponentHealth= 100;
    getNewOpponent();
   }
}

function kick(){
  document.getElementById("opponentHealth").innerHTML = opponentHealth-5;
  opponentHealth=opponentHealth-5;
  if (opponentHealth<=0){
    alert("Congradulations "+yourCharacter+", you killed an innocent man.");
    document.getElementById("opponentHealth").innerHTML = 100;
    opponentHealth= 100;
    getNewOpponent();
   }
}

function spitOnHim(){
  document.getElementById("opponentHealth").innerHTML = 0;
  opponentHealth=0;
  if (opponentHealth<=0){
    alert("Congradulations "+yourCharacter+", you killed an innocent man.");
    document.getElementById("opponentHealth").innerHTML = 100;
    opponentHealth= 100;
    getNewOpponent();
   }
}

function getNewOpponent()
{
   var opponentNumber;

     opponentNumber = Math.floor(Math.random() * 4 + 1);

     if (opponentNumber == 1)
     {
       document.getElementById("opponent").innerHTML= "BOB";
       opponent= "BOB";
     }
     if (opponentNumber== 2)
     {
       document.getElementById("opponent").innerHTML= "ERNIE";
       opponent= "ERNIE";
     }
     if (opponentNumber== 3)
     {
       document.getElementById("opponent").innerHTML= "JIM";
       opponent= "JIM";
     }
     if (opponentNumber== 4)
     {
       document.getElementById("opponent").innerHTML= "DAVE";
       opponent= "DAVE";
     }
}

getNewOpponent();
// Enter your js code Here
