// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
 var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({left: "0px"}, 200);

    $('.body').animate({left: "285px"}, 200);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({left: "-285px"}, 200);

    $('.body').animate({left: "0px"}, 200);
  });
};
$(document).ready(main);










