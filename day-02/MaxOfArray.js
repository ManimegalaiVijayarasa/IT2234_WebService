//2. finding the max number of an array using forEach loop
console.log("--------2. Finding the max number of an array using forEach loop--------");

let num= [1,2,3,4,5,6];
let max= num[0]
num.forEach((p) =>{
	if(p>=max)
	{
		max = p;
	}	
})
console.log("The max number of this array is : "+ max)
	//or

console.log("----------Easy way to Finding the max number of an array using forEach loop -----------")
let Max=0
num.forEach((n) =>{
	(Max<n) && (Max=n)
})

console.log("The max number of this array is : "+ Max)