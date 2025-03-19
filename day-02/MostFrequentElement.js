// 6. find the most frequent element in the array
//[4,8,3,4,3,2,1,8,4]

const numbers = [4,8,3,4,3,2,1,8,4];
const frequencyMap = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
const mostFrequent = Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b);
console.log("Most Frequent Element:", mostFrequent);
