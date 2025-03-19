let originalString= "4567-5-7893";

if(originalString.length >0)
{
	let reversedString="";

	for(let i=originalString.length-1; i>=0; i--)
	{
		reversedString += originalString[i];
	}	
	
	console.log("Original string : "+originalString);
	console.log("Reversed String : "+reversedString);
}
else{
	console.log("The string is empty");
}