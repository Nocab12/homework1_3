/*one funciton*/
function test() {
    var sum = [300, 200, 100,600, 500, 800, 10000, 5, 700];
    for (var i=0; i < sum.length; i++) {
        if (a < sum[i]) {
            a = sum[i];
        }

    }
    console.log(a);
}
test();

/*two function*/
var numbers = [74989, 74990, 84990, 62000, 58480, 61800];
numbers.sort(function(a, b) {
    return a - b;
});
numbers.reverse();
var sumOfThreePlayers = (numbers[0] + numbers[1] + numbers[2]);
var gradePoint = sumOfThreePlayers / 3;
/*console.log(numbers);*/ /*вывод упорядоченного массива*/
console.log(gradePoint);