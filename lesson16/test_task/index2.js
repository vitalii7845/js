// array functions

var arr = [];

for (var i = 0; i < 10; i++) {
  arr[i] = function () {
    return i;
  };
}

console.log(arr()); // 10 * f{r i}
console.log(arr[0]()); // 10
