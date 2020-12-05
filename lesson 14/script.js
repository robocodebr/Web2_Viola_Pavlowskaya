let str1 = "text" ;
let str2 = 'text';
let str3 = str1 + str2;

let str4 = `text
${ str1 }
${1}
${true}
text

`;


console.log(str4)
let container = document.getElementById("container");
container.innerHTML = str1;
container.innerHTML += "<br>"+str2;
console.log(str1[0])
console.log(str4.length)

for(let i = 0; i<str4.length; i++){
    console.log(str4[i])
}
console.log(str4.charAt(str4.length-1));
console.log(str4.length-1);

let str5 ="1234_123245_4235";
let arr = str5.split("_");
console.log(arr);
let arr2 = str5.split("")
console.log(arr2);
console.log(str5.indexOf("_"));
console.log(str5.indexOf("5"));
let str6 = str5.slice(0, str5.length-4);
console.log(str6);

let str7 = str5.substring(str5.length);
console.log(str7);

let str8 = str5.substring(str5.length, 4);
console.log(str8);

let str9 = str5.substring(str5.length, 4);
console.log(str9);
let s1 ="abcd";
let s2 ="bccddd";
let s1Result="";

s1Result="";
for(let i =0; i<s1.length; i++){
    s1Result += s1[i].repeat(i);
}
console.log(s1Result);

let date1 = "05-12-2020"
let date2 = date1.split("-");
console.log(date2)
let result = [];
for(let i = 0; i<date2.length; i++){
    result[i] =parseInt(date2[i])
}
console.log(result);

let a = "robocodebr@gmail.com";
let a2 = a.split("@");
console.log(a2.join(""))

let temp = a2[1].split(".");
let resArr222 =[a2[0],temp[0], temp[1]]
console.log(resArr222)

let b1 = `JavaScript  — мультипарадигменный язык программирования. 
Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript 
(стандарт ECMA-262[7]).

JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
 Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам[8].

Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, 
прототипное программирование, функции как объекты первого класса.

На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. 
Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования,
 используемых в веб-разработке[~ 1][9].

Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США[10].`

let b12 = b1.split(".");
console.log(b12.length -1);
container.innerHTML += `<br> \u{1f601}`
container.innerHTML += `<br> \u{1f603}`
container.innerHTML += `<br> \u{1f609}`
container.innerHTML += `<br> \u{1f606}`

let emozi = b12.join(".\u{1f606}")

console.log(emozi)
container.innerHTML += emozi













