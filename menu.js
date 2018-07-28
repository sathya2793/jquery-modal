$(document).ready(function() {

  $("#exampleModal").hide();

  $(".btn").click(function() {
      $("#exampleModal").slideToggle();
  });

  /* close button */
  $(".close").click(function() {
      $("#exampleModal").slideToggle();
  });

});
