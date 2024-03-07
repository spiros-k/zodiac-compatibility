import React from "react";
import ReactDOM from "react-dom";

let name = prompt("What is your name?");
prompt("What is your zodiac sign?");
let number = Math.floor(Math.random() * 10);
const zodiacArray = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Aquarius",
  "Capricorn",
  "Pisces",
];
let compZodOne = zodiacArray[Math.floor(Math.random() * 12)];
let compZodTwo = zodiacArray[Math.floor(Math.random() * 12)];
let compZodThree = zodiacArray[Math.floor(Math.random() * 12)];
if (compZodOne === compZodTwo) {
  compZodTwo = zodiacArray[Math.floor(Math.random() * 12)];
  if (compZodOne === compZodTwo) {
    compZodTwo = zodiacArray[Math.floor(Math.random() * 12)];
  }
} else if (compZodOne === compZodThree) {
  compZodThree = zodiacArray[Math.floor(Math.random() * 12)];
  if (compZodOne === compZodThree) {
    compZodThree = zodiacArray[Math.floor(Math.random() * 12)];
  }
} else if (compZodTwo === compZodThree) {
  compZodThree = zodiacArray[Math.floor(Math.random() * 12)];
  if (compZodThree === compZodTwo) {
    compZodThree = zodiacArray[Math.floor(Math.random() * 12)];
  }
}

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your lucky number for this week is {number}</p>
    <p>Compatible signs with yours: </p>
    <ul>
      <li>{compZodOne}</li>
      <li>{compZodTwo}</li>
      <li>{compZodThree}</li>
    </ul>
  </div>,
  document.querySelector("#root")
);
