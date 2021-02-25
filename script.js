"use strict";
$(document).ready(function () {
   
  $("button").click(function () {
    $("#test").hide();
  });
  $("li").click(function () {
    $("li").siblings().hide();
  });
    

  });