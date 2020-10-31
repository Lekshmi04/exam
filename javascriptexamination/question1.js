var input = [3, 1, 4, 6, 5]

var n = 2;

for (element1 of input) {
    for (element2 of input) {
        for (element3 of input) {
            var a = element1 ** n;
            var b = element2 ** n;
            var c = element3 ** n;
            if (a + b == c   && a<b) {

                console.log("output=" + element1 + "" + element2 + "" + element3);

            }


        }
    }
} 
