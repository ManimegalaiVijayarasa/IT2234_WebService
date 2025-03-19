// 1. array concept

let num= [1,2,3,4,5,6];
console.log(num);
	//or

console.log("--------1. using for loop--------");
for(let i=0; i<=num.length; i++)
{
	console.log(num[i]);
}

//forEach
console.log("--------using forEach loop--------");
num.forEach((n) =>{
	console.log(n)
})
