// Maximum Purchase Amount within Budget

function getMaxPurchase(budget, keyboards, mice) {
    let maxAmount = -1;
    for (let k of keyboards) {
        for (let m of mice) {
            let total = k + m;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }
    return maxAmount;
}


console.log(getMaxPurchase(60,[40,50,60], [5,8,12] ))