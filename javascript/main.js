'use strict';
//constantes principales
const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const input = document.querySelector('.js_input');
const result = document.querySelector('.js_result');
const saldo = document.querySelector('.js_saldo');
const reload = document.querySelector('.js_reload');
let salValue = 50;

//numero usuaria
function valorUsuaria() {
  const numUsuaria = parseInt(select.value);
  return numUsuaria;
}

//numero aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//función parar el juego
function stopGame() {
  console.log(salValue);
  if (salValue <= 0 || salValue >= 200) {
    reload.classList.remove('hidden');
    btn.classList.add('hidden');
  }
}
//comparacion de numeros
function compararNum() {
  const numAleat = getRandomNumber(6);
  const numUsuaria = valorUsuaria();
  if (numAleat === numUsuaria) {
    result.innerHTML = 'Has ganado el doble de lo apostado :)';
  } else {
    result.innerHTML = 'Has perdido lo apostado :(';
  }
}

//funcion jefa
function handlerclickBtn(event) {
  event.preventDefault();
  compararNum();
}

//codigo que se ejecuta
btn.addEventListener('click', handlerclickBtn);
