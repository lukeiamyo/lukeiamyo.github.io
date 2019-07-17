//jquery
$(document).ready(function() {
  $(".night-day").click(function() {
    $("body").toggleClass("dark");
    $(".name").toggleClass("dark");
    $(".foot").toggleClass("dark");
    $(".icon").toggleClass("dark");
    $(".nav-link").toggleClass("dark");
    $(".navbar").toggleClass("dark");
    $(".to-top").toggleClass("dark");
    $(".card-title").toggleClass("dark");
    $(".resume:after").toggleClass("dark");
    $(".card").toggleClass("dark");
    $(".major").toggleClass("dark");
    $(".list-group-mine .list-group-item").toggleClass("dark");
    $(".list-group-mine .list-group-item:hover").toggleClass("dark");
    $(".list-group-mine .list-group-item:active").toggleClass("dark");
    $(".list-bar").toggleClass("please");
    $(".just-head-two").toggleClass("please");
    $(".rrr").toggleClass("please");
    $(".nav-link-two").toggleClass("please");
    $(".navbrdr-two").toggleClass("please");
    $(".night-day").toggleClass("fa-sun-o fa-moon-o");
    $(".lock-two").toggleClass("please");
  });
});

//javascript
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
