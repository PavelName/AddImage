'use strict';
let namePerson = 'Alexander';
let result = (namePerson === 'Artem')? console.log('директор'):
            (namePerson === 'Alexander') ? console.log('преподаватель'): console.log('студент');

let leng = 'en';
let weeks = '';
if(leng === 'ru') {
  weeks = 'пон, вт,ср, чт, пт, сб, вс';
} else if (leng === 'en') {
  weeks = 'mon, tu, we, thu, fr, sat, sun';
} else {
  weeks = 'not languges supported!';
}
console.log(weeks);
             