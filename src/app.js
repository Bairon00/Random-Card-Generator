/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#numero").innerHTML = numberRandom();
  //escoje un numero
  function numberRandom() {
    let numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let random = Math.floor(Math.random() * 12);
    return (numeros = [random]);
  }
  //console.log("Hello Rigo from the console!");
};
