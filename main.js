const title = " Start Project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 1000;
const rollback = 30;
const fullPrice = 40000;
const adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screenPrice, "Стоимость верстки экранов  рублей/ долларов/гривен/юани");
console.log(fullPrice, "Стоимость разработки сайта  рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split(""));
console.log((fullPrice * (rollback/100)));


