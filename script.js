// 'use strict'

let lang = ('ru');

if (lang == 'ru') {
  let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  console.log(arr[3]);
} 
if (lang == 'en') {
  let arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  console.log(arr[3]);
}
switch (lang) {
	case 'ru':
		let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
let arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);

let namePerson = 'Сергей';
prof = namePerson == 'Артем' ? "Директор" : namePerson == 'Александр' ? "Преподаватель" : "Студент";
console.log(prof);