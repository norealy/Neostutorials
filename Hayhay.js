function destroyer(arr, ...paramsLast) {
  let arr2 = [...paramsLast];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) !== -1) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for (let i in collection) {
    console.log(typeof source);
    console.log(typeof collection[i]);
    if (collection[i] == source) {
    }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
