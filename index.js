$(function() {
  $(".hello")
    .css("display", "none")
    .fadeIn(1300);

  let currentYear = new Date().getFullYear();
  $(document).ready(function() {
    $("#year").text(new Date().getFullYear());
  });
});
ScrollReveal().reveal(".card", { delay: 200 });
