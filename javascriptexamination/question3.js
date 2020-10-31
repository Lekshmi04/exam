var n = 3, sum = 0;
var t = 1; var val;

for (var i = 1; i <= n; i++) {

    sum = sum + t;
    t = (t * 10) + 1;
}
val = n * sum;
console.log(val)



