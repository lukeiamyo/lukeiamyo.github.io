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
    $(".date").toggleClass("dark");
    $(".p-foot").toggleClass("dark");
    $(".cs61b").toggleClass("dark");
    $(".card-footer").toggleClass("dark");
    $(".resume-two-bar").toggleClass("please");
  });
});

//javascript
window.onscroll = function() {
  // scrollFunction();
  toggleDisappearFunction();
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

function toggleDisappearFunction() {
  if (
    document.body.scrollTop > 160 ||
    document.documentElement.scrollTop > 160
  ) {
    document.getElementById("lock-lock").style.display = "none";
  } else {
    document.getElementById("lock-lock").style.display = "block";
  }
}

document.onreadystatechange = function() {
  var state = document.readyState;
  if (state == "interactive") {
    document.getElementById("contents").style.visibility = "hidden";
  } else if (state == "complete") {
    setTimeout(function() {
      document.getElementById("interactive");
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 1000);
  }
};
