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

//Filter Function

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

//Punctuation function

function addPunctuation(punc) {
  return (x) => {
    return x + punc;
  };
}
const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello world'));

//Add First Element

function addFirst(element) {
  return (array) => {
    array.unshift(element);
    return array;
  };
}

const addOrange = addFirst('cat');
console.log(addOrange(['bird', 'dog', 'lizard']));
