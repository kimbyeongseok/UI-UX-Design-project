$(document).ready(function () {
  // side nav bar click function
  $(".side_nav_bars").click(function () {
    $(this).toggleClass("open");
    $(".slide_container").toggleClass("active");
    $(".slide_container .menu_sec a").toggleClass("active");
    $(".slide_container .menu_sec .sub_menu_sec").toggleClass("active");
    $(".slide_container .menu_sec p").toggleClass("active");
  });
});
