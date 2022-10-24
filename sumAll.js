const arr = [1, 3, "Bob", 6];

const sumAll = function (array) {
  let len = array.length;
  let sumArray = [];
  for (i = 0; i < len; i++) {
    sumArray += array[i];
  }
  return sumArray;
};

console.log(sumAll(arr));
