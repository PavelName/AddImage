'use strict';
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
const screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?",12000 ));
const rollback = 30;

const adaptive = confirm("Нужен ли адаптив на сайте?");


const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = parseFloat(prompt("Сколько это будет стоить?"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - (rollback / 100));

if (fullPrice > 30000){
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
  console.log("Что то пошло не так");
} else {
  console.log("Скидка не предусмотрена");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screenPrice, "Стоимость верстки экранов  рублей/ долларов/гривен/юани");
console.log(fullPrice, "Стоимость разработки сайта  рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(""));
console.log((fullPrice * (rollback/100)));
console.log(servicePercentPrice);


