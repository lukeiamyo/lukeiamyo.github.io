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

function nextWork() {
    var currTab = document.getElementById('btn-active-work');
    currTabNum = parseInt(currTab.innerHTML);
    if (currTabNum != 6) {
        removeActivePane();
        appendActiveToPane(currTabNum);
        if (currTabNum == 5) {
            document.getElementById('next-work').classList.add("disabled");
        }
        currTabNum++; 
        if (currTabNum != 1) {
            document.getElementById('prev-work').classList.remove("disabled");
        }
        currTab.innerHTML = currTabNum.toString();
    }
}

function prevWork() {
    var currTab = document.getElementById('btn-active-work');
    currTabNum = parseInt(currTab.innerHTML);
    if (currTabNum != 1) {
        removeActivePane();
        appendActiveToPane(currTabNum - 2);
        if (currTabNum == 2) {
            document.getElementById('prev-work').classList.add("disabled");
        }
        currTabNum--; 
        if (currTabNum != 6) {
            document.getElementById('next-work').classList.remove("disabled");
        }
        currTab.innerHTML = currTabNum.toString();
    }
}

function removeActivePane() {
    var activePane = document.getElementsByClassName("tab-pane active")[0];
    activePane.classList.remove("show");
    activePane.classList.remove("active");
}

function appendActiveToPane(curr) {
    var tabs = document.getElementsByClassName("tab-pane");
    tabs[curr].classList.add("show");
    tabs[curr].classList.add("active");
}