new WOW().init();

$(window).on("scroll", function () {
  let Scroll = $(this).scrollTop();

  if (Scroll > 20) {
    $("nav").addClass("stikey");
  } else {
    $("nav").removeClass("stikey");
  }
});

var scrollLink = $(".page-scroll");
// Active link switching
$(window).scroll(function () {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function () {
    var sectionOffsets = $(this.hash).offset().top;
    var sectionOffset = sectionOffsets - 200;
    if (sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });
});

$(".icon").on("click", function () {
  $(".menu-item").addClass("add");
  $(".menu-item").removeClass("close");
});

$(".menu-item ul li a").on("click", function () {
  $(".menu-item").removeClass("add");
  $(".menu-item").addClass("close");
});

$(".counter").counterUp({
  delay: 10,
  time: 3000,
});
