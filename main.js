'use strict'
//constantes principales
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const input = document.querySelector('.js-input');
const title = document.querySelector('js-title');

//numero usuaria
function valorUsuaria (){
    const numUsuaria = select.value;
    return numUsuaria;
}

//numero aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   } 

//comparacion de numeros   
function compararNum (){
    const numAleat = getRandomNumber(6);
    const numUsuaria = valorUsuaria ();
    if(numAleat === numUsuaria) {
        title.innerHTML = 'Has ganado el doble de lo apostado :)';
    }
    else {
        title.innerHTML = 'Has perdido lo apostado :(';
    }
} 


//funcion jefa
function handlerclickBtn (event) {
    event.preventDeafult();
    compararNum();  
}

//codigo que se ejecuta
btn.addEventListener('click', handlerclickBtn);