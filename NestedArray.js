// 3. print the nested array  [[1,2,30], [5,6], [8,5,3]]

console.log("--------3. print the nested array [[1,2,30], [5,6], [8,5,3]]--------");

let nestedArray = [[1,2,30], [5,6], [8,5,3]]

for(let j=0; j<=nestedArray.length; j++)
{
	console.log(nestedArray[j]);
}

//forEach
console.log("--------using forEach loop--------");
nestedArray.forEach((n) =>{
	console.log(n)
})


//forEach
console.log("--------printing one by one using forEach loop--------");
nestedArray.forEach((n) =>{
	n.forEach((i) =>{
		console.log(i)
	})
	
})