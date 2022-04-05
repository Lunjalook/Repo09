function switchCase(letter) {
    var animals;
    switch (letter) {

        case "a":
            return animals = "antelope";
            break;

        case "b":
            return animals = "bird";
            break;
        case "c":
            return animals = "cat";

        default:
            return animals = "stuff";
            break;
    }

}
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

module.exports = switchCase;

