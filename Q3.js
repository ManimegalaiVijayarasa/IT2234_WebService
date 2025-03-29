// Rearrange Digits for Maximum Value

function maxNumber(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
}

console.log(maxNumber(1325));

