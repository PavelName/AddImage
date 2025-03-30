'use strict';
let namePerson = 'Alexander';
let result = (namePerson === 'Artem')? console.log('директор'):
            (namePerson === 'Alexander') ? console.log('преподаватель'): console.log('студент');

let leng = 'ru';
let weeks = '';
if(leng === 'ru') {
  weeks = 'пон, вт,ср, чт, пт, сб, вс';
} else if (leng === 'en') {
  weeks = 'mon, tu, we, thu, fr, sat, sun';
} else {
  weeks = 'not languges supported!';
}
console.log(weeks);

let len = 'en';
             
switch (len) {
  case 'ru':
    weeks = 'пон, вт,ср, чт, пт, сб, вс';
    break;
  case 'en':
    weeks = 'mon, tu, we, thu, fr, sat, sun';
    break;
  default:
    weeks = 'Not days!';

}
console.log(weeks);

let languges = "en";
const daysOfWeeks = [
  ['пон, вт,ср, чт, пт, сб, вс', 'hello'],
  ['mon, tu, we, thu, fr, sat, sun', 'goodbye']
];
const langIndex = languges === 'ru' ? 0 : 1;
const results = daysOfWeeks[langIndex].join(', ');
console.log(results);