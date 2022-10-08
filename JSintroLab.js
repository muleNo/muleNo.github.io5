function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

const checkVowel = (vowel) => {
  if (vowel == null || vowel == undefined) return false;
  if (vowel.length > 1) return false;

  if (
    vowel === "a" ||
    vowel === "A" ||
    vowel === "e" ||
    vowel === "E" ||
    vowel === "o" ||
    vowel === "O" ||
    vowel === "u" ||
    vowel === "U" ||
    vowel === "v" ||
    vowel === "V"
  )
    return true;
  else {
    return false;
  }
};

const sum = (arr) => {
  return arr.reduce((summation, elem) => summation + elem, 0);
};


const product = (arr) => {
  return arr.reduce((product, elem) => product * elem, 1);
};

const reverse = (text) => {
  let reversed = "";
  let size = text.length;

  for (let i = size - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};



const findLongestWord = (arrayOfWords) => {
  if (
    arrayOfWords == null ||
    arrayOfWords.length === 0 ||
    arrayOfWords == undefined
  )
    return 0;

  let lengthOflongestWord = arrayOfWords[0].length;
  arrayOfWords.forEach((element) => {
    if (element.length > lengthOflongestWord) {
      lengthOflongestWord = element.length;
    }
  });
  return lengthOflongestWord;
};


const filterLongWords = (words, key) => {
  const filteredArray = words.filter((elt, i, arr) => {
    return elt.length > key;
  });
  return filteredArray;
};


const multiplyBy10 = (list, key) => {
  const result = list.map(function (elem, i, array) {
    return elem * key;
  });
  return result;
};

const elementsEqualTo = (list, key) => {
  const equalTo = list.filter(function (elem, i, array) {
    return elem === key;
  });
  return equalTo;
};


const productOfAllElements = (list) => {
  const productAll = list.reduce((product, elt) => {
    return product * elt;
  }, 1);
  return productAll;
};


console.log(
  `Expected output of maxOfThree(5,4,44) is 44  ${myFunctionTest(
    44,
    maxOfThree(5, 4, 44)
  )}`
);
console.log(
  `Expected output of maxOfThree(55,4,44) is 55  ${myFunctionTest(
    55,
    maxOfThree(55, 4, 44)
  )}`
);
console.log(
  `Expected output of maxOfThree(55,4,44) is 55  ${myFunctionTest(
    4,
    maxOfThree(55, 4, 44)
  )}`
);


