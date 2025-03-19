// 4. write the code to find the all pairs that sum up to the target

// arr= [1,2,3,4,5,6]
// target = 7

console.log("-------------  4. all pairs that sum up to the target(7)------------")
let arr= [1,2,3,4,5,6]

let target = 7
for(let i=0; i<=arr.length; i++)
{
	for(let j=i+1; j<=arr.length; j++)
	{
		if(arr[i] + arr[j] == target)
		{
			console.log(arr[i]+ " and "+ arr[j])
		}
	}
	
}