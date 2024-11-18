let num =[1,2,3,5,45,5,45];
// let newnum=num.map(x=>x*2)
// console.log(newnum);
// let evennum=num.filter(x=>x%2==0);
// console.log(evennum);
// let sum=num.reduce((x,y)=>x+y,0);
// console.log(sum);
const students=[
{ name:"alice",score :50},
{name:"rahul",score:10},
{name:"parul",score:70},

];
let scores=students.map((x)=>x.score).reduce((x,y)=>x+y,0);
console.log(scores);
