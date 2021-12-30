// Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  const diffs = newArr.filter((val) => {
    return !arr1.includes(val) || !arr2.includes(val);
  });
  console.log(diffs);

  return diffs;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy
function destroyer(arr) {
  let args = [...arguments];
  let initArr = args.shift();
  // console.log(initArr, args)
  return initArr.filter((val) => {
    return !args.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
