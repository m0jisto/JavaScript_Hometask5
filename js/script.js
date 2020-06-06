let newLi = document.createElement("li"),
    menu = document.querySelector(".menu"),
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.querySelector(".title"),
    column = document.querySelectorAll(".column"),
    adv = document.querySelector(".adv");
//1 
menu.insertBefore(menuItem[2], menuItem[1]);
newLi.classList.add("menu-item");
newLi.textContent = "Пятый пункт";

menu.appendChild(newLi);

//2
document.body.style.background = "url(../img/apple_true.jpg)";

//3
title.textContent = "Мы продаем только подлинную технику Apple!";

//4 
column[1].removeChild(adv);

let answer = prompt("Приветствуем вас на нашем сайте, хотелось бы узнать ваше отношение к технике Apple"),
    promp = document.querySelector(".prompt");

promp.textContent = answer;

