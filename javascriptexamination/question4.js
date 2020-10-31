var inp = 2
var minimum = 49;
var maximum = 65;
var num;
for (var i = 1; i * i <= 65; i++) {
    num = i ** inp;

}
if (minimum > num < maximum) {
    console.log(num);
}



