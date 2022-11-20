"use strict";
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const date = document.querySelector(".display-date");
let now = new Date();

let hour = now.getHours() % 12 || 12;
let minute = now.getMinutes();
let second = now.getSeconds();

date.textContent = now.toDateString();
hourHand.style.transform = `rotateZ(${hour * 30}deg)`;
minuteHand.style.transform = `rotateZ(${minute * 6}deg)`;

setInterval(() => {
  now = new Date();
  hour = now.getHours() % 12 || 12;
  minute = now.getMinutes();
  hourHand.style.transform = `rotateZ(${hour * 30}deg)`;
  minuteHand.style.transform = `rotateZ(${minute * 6}deg)`;
}, 60000);
