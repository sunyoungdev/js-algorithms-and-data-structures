function mutation(arr) {
    const test = arr.pop().toLowerCase().split('');
    const letters = arr.pop().toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (letters.indexOf(test[i]) === -1) {
        return false;
      }
    }
    return true;
  
    // console.log(letters)
    // return arr;
  }
  
  console.log(mutation(["hello", "hey"]));

  function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    console.log(arr)
    console.log(newArr);
    return newArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
