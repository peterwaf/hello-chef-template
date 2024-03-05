var visibleMobileMenuAndIcon = document.getElementById("visible_mobile_logo_and_icon");
var popUpMobileMenu = document.getElementById("logo_menu_pop_up");
var visibleHumburgerIcon = document.getElementById("humbeger");
var mobilePopUpMenu = document.getElementById("logo_menu_pop_up");
var mobilePopUpX_Icon = document.getElementById("humberger_menu_poped");
mobilePopUpMenu.style.display = "none";
visibleHumburgerIcon.onclick = function () {
    mobilePopUpMenu.style.display = "block";
}
mobilePopUpX_Icon.onclick = function () {
    mobilePopUpMenu.style.display = "none";
}
