
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

// $(document).ready(function() {
//   $(window).scroll(function() {
//     $("#fade").css("opacity", 1 - $(window).scrollTop() / ($('#fade').height()));
//   });
// });

$('img').on('dragstart', function(event) { event.preventDefault(); });
