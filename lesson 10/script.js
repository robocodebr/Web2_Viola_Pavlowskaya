/*for(i=0; i<10;i++){
    console.log(Math.round(Math.random()*1000))
}
let names =["Ваня","Мирослава","Никита"];
let arr =[] ;
console.log(arr);
arr[0] = 5;
for(let i =0; i< names.length; i++){
    console.log(names[i]);
}*/
let arr = new Array(2);
let arr1 = []
console.log(arr)
console.log(arr.length)
console.log(arr[arr.length-1])

let predmet =["G","Sh","K","S","N"];
console.log(predmet);
//predmet[2] = 5;
predmet[5] ='I';
predmet[6] ='T';
alert(predmet.pop());

predmet.push("H");
predmet.unshift("M");
alert(predmet);
console.log(predmet);
// for(let i =5; i< predmet.length; i++){
//     console.log(predmet[i]);
// }