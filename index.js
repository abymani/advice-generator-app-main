


handleDice();
const dice = document.getElementsByClassName("dice")[0];
const id = document.getElementById('id');
const advice = document.getElementsByClassName('advice-text')[0];
let obj ='';




dice.addEventListener('click',function(){
    handleDice();
})

function handleDice(){
    //creates an XMLHttpRequest object
    const xhttp = new XMLHttpRequest;

    // Defines a callback function
    xhttp.onload= function(){
        //here received data will be used
        obj = JSON.parse(this.responseText);
        id.innerHTML = obj.slip.id;
        advice.innerHTML = obj.slip.advice;
    };

    // send a request
    xhttp.open("GET","https://api.adviceslip.com/advice");
    xhttp.send();
  
}