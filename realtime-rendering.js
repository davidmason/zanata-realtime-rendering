// ==UserScript==
// @name       Docbook Preview Hack
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://localhost:8080/zanata/webtrans/*
// @copyright  2013+, David Mason
// ==/UserScript==


/* This always reports window.zanata as 'undefined' even when
   typing it at the console gives an object.
   Must be something with closures that I don't understand, or
   a scope thing.
 */
function tryUntilReady() {

	alert(window.zanata);
    waitThenTry();
    
//    if (window.zanata) {
//        alert("Ready!");
//    } else {
//        alert("Not ready!");
//        waitThenTry();
//    }
}

function waitThenTry() {
    setTimeout(tryUntilReady, 10000);
}

document.addEventListener('DOMContentLoaded', waitThenTry);