//AOS
AOS.init();
// navbar show hide function
var menu = document.getElementById("menu");
var menuOpen = document.getElementById("open");
var menuClose = document.getElementById("close");
function showHideMenu() {
  if (menu.style.display === "none") {
    menuOpen.style.visibility = "hidden";
    menuClose.style.visibility = "visible";
    menu.style.display = "flex";
  } else {
    menuOpen.style.visibility = "visible";
    menuClose.style.visibility = "hidden";
    menu.style.display = "none";
  }
}

//Testimonials Carosel
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    slideSpeed: 1000,
    autoPlay: true,
  });
});
//contact form submision
$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzxqmxajdmxGkKvunrkoNm-2MgZRCOHpuvebVgY9lNG-iPogi_tTils8rp4HXyFnElf/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error");
    },
  });
});
