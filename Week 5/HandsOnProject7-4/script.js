/*
Name: Kendrick Ricio
Date: February 17, 2023
script.js
*/

"use strict";
var delivInfo = new Object();
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
  // Empty delivSummary if an order has been submitted previously
  delivSummary.innerHTML = "";

  // Add inputs to delivInfo
  delivInfo.name = document.getElementById("nameinput").value;
  delivInfo.addr = document.getElementById("addrinput").value;
  delivInfo.city = document.getElementById("cityinput").value;
  delivInfo.email = document.getElementById("emailinput").value;
  delivInfo.phone = document.getElementById("phoneinput").value;

  let prop;
  for (prop in delivInfo) {
    console.log(delivSummary.innerHTML);
    delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
  }
}

function previewOrder() {
  processDeliveryInfo();
  const section = document.querySelector("section");
  const sectiondiv = document.querySelector("section div");
  section.style.display = "block";
  sectiondiv.style.display = "block";
}

window.addEventListener("load", () => {
  const previewBtn = document.getElementById("previewBtn");
  previewBtn.addEventListener("click", previewOrder);
});
