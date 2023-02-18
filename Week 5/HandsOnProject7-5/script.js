/*
Name: Kendrick Ricio
Date: February 17, 2023
script.js
*/

"use strict";
var delivInfo = new Object();
var delivSummary = document.getElementById("deliverTo");
var foodInfo = new Object();
var foodSummary = document.getElementById("order");

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

function processFood() {
  // Empty delivSummary if an order has been submitted previously
  foodSummary.innerHTML = "";
  foodInfo = {};

  let prop;
  let crustOpt = document.getElementsByName("crust");
  let toppings = 0;
  let toppingBoxes = document.getElementsByName("toppings");
  let instr = document.getElementById("instructions");

  if (crustOpt[0].checked) {
    foodInfo.crust = crustOpt[0].value;
  } else {
    foodInfo.crust = crustOpt[1].value;
  }

  foodInfo.size = document.getElementById("size").value;

  for (let i = 0; i < toppingBoxes.length; i++) {
    if (toppingBoxes[i].checked) {
      toppings++;
      foodInfo["topping" + toppings] = toppingBoxes[i].value;
    }
  }

  if (instr.value !== "") {
    foodInfo.instructions = instr.value;
  }
}

function previewOrder() {
  processDeliveryInfo();
  processFood();

  foodSummary.innerHTML += "<p><span>Crust</span>: " +
    foodInfo.crust + "</p>";
  foodSummary.innerHTML += "<p><span>Size</span>: " +
    foodInfo.size + "</p>";
  foodSummary.innerHTML += "<p><span>Topping(s)</span>: " +
    "</p>";
  foodSummary.innerHTML += "<ul>";
  for (var i = 1; i < 6; i++) {
    if (foodInfo["topping" + i]) {
      foodSummary.innerHTML += "<li>" + foodInfo["topping" +      i] + "</li>";
    }
  }
  foodSummary.innerHTML += "</ul>";
  foodSummary.innerHTML += "<p><span>Instructions</span>: " +
  foodInfo.instructions;
  document.getElementById("order").style.display = "block";

  const section = document.querySelector("section");
  const sectiondiv = document.querySelector("section div");
  section.style.display = "block";
  sectiondiv.style.display = "block";
}

window.addEventListener("load", () => {
  const previewBtn = document.getElementById("previewBtn");
  previewBtn.addEventListener("click", previewOrder);
});
