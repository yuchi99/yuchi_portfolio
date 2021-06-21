function toggleShadow(isScroll) {
  var navbar = document.querySelector(".navbar");
  if (isScroll) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
}

// document ready
(function ready() {
  if (document.readyState != "loading") {
    console.log("err");
    return;
  }
  document.addEventListener("DOMContentLoaded", function () {
    var navbarMobile = document.querySelector("#navbarNav");

    navbarMobile.addEventListener("shown.bs.collapse", function (event) {
      document.querySelector("body").style.overflowY = "hidden";
    });
    navbarMobile.addEventListener("hidden.bs.collapse", function (event) {
      document.querySelector("body").style.overflowY = "auto";
    });

    var last_known_scroll_position = 0;
    var ticking = false;

    window.addEventListener("scroll", function (e) {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (last_known_scroll_position > 100) {
            toggleShadow(true);
          } else {
            toggleShadow(false);
          }

          ticking = false;
        });
      }
      ticking = true;
    });
  });
})();
