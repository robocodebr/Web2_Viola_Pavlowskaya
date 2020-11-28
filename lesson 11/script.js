let arr =[];
let sum = 0;
let min = 10;
let max = 0;
for(let i = 0; i<10; i++){
arr[i] = Math.floor(Math.random()*10);
sum = sum+ arr[i];
if(min>arr[i]){
    min = arr[i];

}
}
console.log(arr);
console.log("sum="+sum);
console.log("sum="+min);
console.log("sum="+max);
console.log(sum);
