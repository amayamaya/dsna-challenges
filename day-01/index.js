function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(string) {
  return function punctuate(quote) {
    return (`${quote}${string}`);
  };
}

function titleCaseWords(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function oddishOrEvenish(number) {
  let num = 0;
  console.log(typeof string);
  String(number).split('').map(number => num += Number(number));
  console.log(num);
  return num % 2 === 0 ? 'Evenish' : 'Oddish';
}

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

module.exports = { reverseSentence, addPunctuation, titleCaseWords, oddishOrEvenish, at };
