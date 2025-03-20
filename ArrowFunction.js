const msg = ()=>{return console.log("Hello JS")}
msg()

// use arrow function to do some math operations
const add = (a,b)=>{return console.log(a+b)}
add(5,2)

const subs = (a,b)=>{return (a-b)}
console.log(subs(5,2))

//default parameter
const mul = (a,b=2)=>{return (a*b)}
console.log(mul(5))
console.log(mul(5,4))

const div = (a,b)=>{return console.log(a/b)}
div(5,2)

//rest parameter
const mysum = (...n) =>{
	console.log(n)
	
	let sum= 0;
	n.forEach((i)=>sum=sum+i)
	 console.log("summation is: "+ sum)
}
mysum(4,5,6,89,2)

console.log("------Another way----")
const mysum1 = (...n) =>{
	return n.reduce((t,i)=>t= t+i)
}
console.log(mysum1(4,5,6,89,2))