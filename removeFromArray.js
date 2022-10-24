arr = ["one", "two", "three"];

const removeFromArray = function (array) {
  let len = array.length;
  let newArray = [];
  for (i = 0; i < len; i++) {
    newArray.push(array[i]);
  }
  return newArray;
  //   const array = args[0];
  //   console.log(array);
  //   const newArray = [];
  //   console.log(newArray);

  //   array.forEach((item) => {
  //     if (!args.includes(item)) {
  //       newArray.push(item);
  //     }
  //   });
  //   console.log(newArray);

  //   return newArray;
};

console.log(removeFromArray(arr));
