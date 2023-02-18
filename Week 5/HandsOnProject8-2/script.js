/*
Name: Kendrick Ricio
Date: February 17, 2023
script.js
*/

"use strict";

//var newAccountArray = [];
var newAccountObject = {};
var newAccountSubmission;

function createID() {
  let fname = document.getElementById("fnameinput");
  let lname = document.getElementById("lnameinput");
  let zip = document.getElementById("zipinput");
  let account = document.getElementById("accountidbox");

  let fields = document.getElementsByTagName("input");

  let acctid, firstInit, lastInit;

  if (fname != "" && lname != "" && zip != "") {
    firstInit = fname.value.charAt(0).toUpperCase();
    lastInit = lname.value.charAt(0).toUpperCase();
    acctid = firstInit + lastInit + zip.value;
    account.value = acctid;

    //newAccountArray = [];
    newAccountObject = {};

    for (var i = 0; i < fields.length - 1; i++) {
      //newAccountArray.push(fields[i].value);
      newAccountObject[fields[i].name] = fields[i].value;
    }
  }
}

function createString() {
  newAccountSubmission = JSON.stringify(newAccountObject);
}

function createEventListeners() {
  var fname = document.getElementById("fnameinput");
  var lname = document.getElementById("lnameinput");
  var zip = document.getElementById("zipinput");
  if (fname.addEventListener) {
    fname.addEventListener("change", createID, false);
    lname.addEventListener("change", createID, false);
    zip.addEventListener("change", createID, false);
  } else if (fname.attachEvent) {
    fname.attachEvent("onchange", createID);
    lname.attachEvent("onchange", createID);
    zip.attachEvent("onchange", createID);
  }

  // Prevent reloading page so project can actually work.
  var form = document.getElementById("projectForm");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  var button = document.getElementById("submitBtn");
  if (button.addEventListener) {
    button.addEventListener("click", createString, false);
  } else if (button.attachEvent) {
    button.attachEvent("onclick", createString);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}
