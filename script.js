"use strict"

$(function() {
  $('.marquee').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true
  });
}); 

var menudiv = document.querySelector('div.menu');

document.querySelector('#brgr').onclick = function(){
  menudiv.style.display = "block";
}
document.querySelector('#close').onclick = function(){
  menudiv.style.display = "none";
}
