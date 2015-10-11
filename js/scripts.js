$(window).load(function(){
    $("#modal1").openModal();
    $(document).ready(function(){
    	$('.lean-overlay').remove();
    });
   });

$(document).ready(function() {
  	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
new WOW().init();
});

$( document ).ready(function (){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
});