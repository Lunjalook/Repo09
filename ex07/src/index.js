function randomRangeNumber(minNumber, maxNumber) {

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

console.log(randomRangeNumber(3, 6));

module.exports = randomRangeNumber;