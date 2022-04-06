
function inverseWhile() {
    var fiveNumbers = '';
    var i = 5;
    var j = 5;

    while (i >= 0) {
        fiveNumbers += i;
        if (j != 0) {
            fiveNumbers += ',';
            j--;
        }
        i--;
    }
    return fiveNumbers;
}

console.log(inverseWhile());
module.exports = inverseWhile;