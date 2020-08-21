$(document).ready(function() {
    preventImgDrag();
    disableHrefs();
    copyEmail();
});

function preventImgDrag() {
    $('img').on('dragstart', function(e) { 
      e.preventDefault(); 
    });
}

function disableHrefs() {
    $(".nav-link, .down-about-icon").on("click", function (e) {
      e.preventDefault();
      $(window).scrollTop($($(this).attr('href')).offset().top);
    });
}

function copyEmail() {
    $('.footer-email').click(function () { 
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val("ambavar98@berkeley.edu").select();
        document.execCommand("copy");
        $temp.remove();
        $('.footer-email').attr("aria-label", "Copied!");
    });
}

function fadeUpOnScroll() {
    $(window).scroll(function() {
        $("#fade").css("opacity", 1 - $(window).scrollTop() / ($('#fade').height()));
    });
}