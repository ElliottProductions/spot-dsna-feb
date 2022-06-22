//Map Function

function map(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const modifiedItem = callback(item);

    newArray[newArray.length] = modifiedItem;
  }
  return newArray;
}

map([1, 6, 5], (n) => n ** 2);

//Filter Functio

function filter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item)) {
      filteredArr[filteredArr.length] = item;
    }
  }
  return filteredArr;
}
