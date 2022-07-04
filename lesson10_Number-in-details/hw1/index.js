const getTotalPrice = arr => '$' + Math.floor(arr.reduce((acc, num) => acc + num, 0) * 100) / 100;

// test data
console.log(getTotalPrice([95.597, 64.6974, 964.98732, 963.1475, 951753.369741]));
console.log(getTotalPrice([0.597, -64.6974, 4.98732, 951753.369741]));
console.log(getTotalPrice([15, 95, 85, 74, 63]));
