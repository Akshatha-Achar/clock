"use strict";
const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const container = document.querySelector(".container");
const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const date = document.querySelector(".display-date");

let now = new Date();
let hour = now.getHours() % 12 || 12;
let minute = now.getMinutes();
let second = now.getSeconds();
const meridiem = now.toLocaleTimeString().split(" ").at(-1);

date.textContent = now.toDateString();
hourHand.style.transform = `rotateZ(${hour * 30}deg)`;
minuteHand.style.transform = `rotateZ(${minute * 6}deg)`;

const changeBackground = () => {
  body.style.backgroundColor = "grey";
  container.style.backgroundColor = "#1c1c1c";
  clock.style.backgroundColor = "#b9b09f";
};
if (hour >= 6 && hour !== 12) {
  if (meridiem === "PM") {
    changeBackground();
  }
} else {
  if (meridiem == "AM") {
    changeBackground();
  }
}

setInterval(() => {
  now = new Date();
  hour = now.getHours() % 12 || 12;
  minute = now.getMinutes();
  hourHand.style.transform = `rotateZ(${hour * 30}deg)`;
  minuteHand.style.transform = `rotateZ(${minute * 6}deg)`;
}, 60000);
