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

// Wherefore art thou
function whatIsInAName(collection, source) {
  // Only change code below this line
  const srcKeys = Object.keys(source);
  // console.log(srcKeys)
  return collection.filter((obj) => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

// Spinal Tap Case
function spinalCase(str) {
  // a whitespace character [\s] is encountered
  // underscore character [_] is encountered
  // or is followed by an uppercase letter [(?=[A-Z])]
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("Teletubbies say Eh-oh"));

// Pig Latin
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return str + "way";
  }
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  console.log(consonantCluster);
  return str.substring(consonantCluster.length).concat(consonantCluster, "ay");
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));

// Search and Replace
function myReplace(str, before, after) {
  if (/[A-Z]/.test(before[0])) {
    const capAfter = capitalize(after);
    return str.replace(before, capAfter);
  } else if (/[a-z]/.test(before[0])) {
    const lowAfter = after.toLowerCase();
    return str.replace(before, lowAfter);
  }
  return str.replace(before, after);
}

function capitalize(str) {
  return str.replace(/\b[a-z]/, (letter) => letter.toUpperCase());
}

// DNA Pairing
function pairElement(str) {
  const strArr = str.split("");
  strArr.map((s, i, arr) => {
    if (s === "G") {
      arr[i] = ["G", "C"];
    } else if (s === "C") {
      arr[i] = ["C", "G"];
    } else if (s === "A") {
      arr[i] = ["A", "T"];
    } else if (s === "T") {
      arr[i] = ["T", "A"];
    }
  });

  console.log(strArr);
  return strArr;
}

pairElement("GCG");

function pairElement2(str) {
  const pairGroup = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  const strArr = str.split("");

  console.log(strArr.map((s) => [s, pairGroup[s]]));
  return strArr.map((s) => [s, pairGroup[s]]);
}

pairElement2("GCG");

// Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// Sorted Union
function uniteUnique(arr) {
  const args = [...arguments];
  const uniqueArr = [];
  args.map((arg) => {
    arg.map((val) => {
      if (!uniqueArr.includes(val)) {
        uniqueArr.push(val);
      }
    });
  });

  console.log(uniqueArr);
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
  const strArr = str.split("");
  strArr.map((val, i) => {
    switch (val) {
      case "&":
        strArr[i] = "&amp;";
        break;
      case "<":
        strArr[i] = "&lt;";
        break;
      case ">":
        strArr[i] = "&gt;";
        break;
      case '"':
        strArr[i] = "&quot;";
        break;
      case "'":
        strArr[i] = "&apos;";
        break;
    }
  });
  console.log(strArr.join(""));
  return strArr.join("");
}

convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  if (num <= 0) return 0;

  const fibArr = [1, 1];
  let nextFib = 0;

  while ((nextFib = fibArr[0] + fibArr[1]) <= num) {
    fibArr.unshift(nextFib);
  }
  const oddSum = fibArr
    .filter((n) => n % 2 !== 0)
    .reduce((prev, curr) => prev + curr);

  return oddSum;
}

console.log(sumFibs(10));

// Sum All Primes
function sumPrimes(num) {
  let primeArr = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeArr.push(i);
    }
  }
  console.log(primeArr);
  return primeArr.reduce((prev, curr) => prev + curr);
}

console.log(sumPrimes(10));

// Smallest Common Multiple
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0) // 0으로 인덱스 먼저 채우고
    .map((_, i) => i + min); // map 으로 자릿값 계산

  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => (a * b) / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

console.log(smallestCommons([23, 18]));
