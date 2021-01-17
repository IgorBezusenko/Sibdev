const burger = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");
const listNav = document.querySelectorAll(".list__nav");
const listIcon = document.querySelectorAll(".list__icon");
const logo = document.querySelector(".logo");
const list = document.querySelector(".list");
const logoText = document.querySelector(".logo__text");

const handleClick = () => {
  burger.classList.toggle("active");
  sidebar.classList.toggle("active");
  listNav.forEach((item) => item.classList.toggle("active"));
  listIcon.forEach((item) => item.classList.toggle("active"));
  logo.classList.toggle("active");
  list.classList.toggle("active");
  logoText.classList.toggle("active");
};

burger.addEventListener("click", handleClick);
