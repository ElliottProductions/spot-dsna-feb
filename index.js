function map(arr, callback) {}
const array = [1, 6, 5];
map(array, (numba) => numba ** 2);
console.log(array);

map([1, 6, 5], (n) => n ** 2);

// Write a function `filter` that takes an array and a predicate callback function:
// - it returns a _new_ array
// - it calls the callback function with each element of the passed array and conditionally adds the item to the new array if the predicate function returns a truthy value

function filter(arr, predicate) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      arr2.push(arr[i]);
    }
  }
}
