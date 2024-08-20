document
  .getElementById("menu_portfolio")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
  });

document
  .getElementById("menu_profile")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "profile.html";
  });

document.getElementById("menu_etc").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "etc.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll(".menu .list");

  menuItems.forEach((item) => {
    const link = item.querySelector("a").getAttribute("href");
    if (currentPath.includes(link)) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

$(".list_flex").click(function () {
  var $listTitle = $(this).next(".list_title");
  var $arrowIcon = $(this).find(".arrow_icon");

  $listTitle.slideToggle(300);
  $(this).toggleClass("open");
});
