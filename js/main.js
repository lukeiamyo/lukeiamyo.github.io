//jquery
// $(function() {
//   console.log("ready");

//   $(".list-group li").click(function(e) {
//     e.preventDefault();

//     $that = $(this);

//     $(".list-group")
//       .find("li")
//       .removeClass("active");
//     $that.addClass("active");
//   });
// });
// jQuery(document).ready(function($) {
//   $(window).load(function() {
//     $(".spinner-grow").fadeOut("slow", function() {
//       $(this).remove();
//     });
//   });
// });
//javascript
// const texts = "Hi! My name is Vishal Ambavaram ";
// let letter = "";
// let typeWriteIndex = 0;
// (function type() {
//   if (typeWriteIndex === texts.length) {
//     $(".typing::after").css("content", "none");
//   }
//   letter = texts.slice(0, ++typeWriteIndex);
//   document.querySelector(".typing").textContent = letter;
//   setTimeout(type, 150);
// })();

// var offset = 300;

// $(".navbar .collapse ul li a").click(function(event) {
//   event.preventDefault();
//   $($(this).attr("href"))[0].scrollIntoView();
//   scrollBy(0, -offset);
// });

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
