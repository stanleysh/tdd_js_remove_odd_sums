function removeOddSum(array, a, b) {
    const newArray = [];
    array.forEach( (e) => {
        let total = e[a] + e[b];
        if (total % 2 == 0){
            newArray.push(e);
        };
    });
    return newArray;
}

module.exports = removeOddSum;
