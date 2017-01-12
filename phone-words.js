var inputArgs = process.argv.slice(2);

function makePhoneWords(inputNumber) {

  inputNumber = String(inputNumber);

  if (inputNumber.length !== 7 || inputNumber.search('0') !== -1 || inputNumber.search('1') !== -1) {
    console.log('Please enter a 7-digit phone number that does not contain 0s or 1s.');
    return;
  }

  var digitLetters = {
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y']
  };

  function recursiveAnswer (prefix, currentSlot) {
    if (currentSlot === inputNumber.length) {
      console.log(prefix);
      return '';
    }

    for (var i = 0; i < 3; i++) {
      prefix += recursiveAnswer(prefix + digitLetters[inputNumber[currentSlot]][i], currentSlot + 1);
    }
    return '';
  }

  recursiveAnswer('', 0);
}



// Test Cases

// for (var i = 0; i < inputArgs.length; i++) {
//   console.log(makePhoneWords(inputArgs[i]));
// }

// improper input
makePhoneWords(1998794);
makePhoneWords(2028794);
makePhoneWords(128794);

makePhoneWords(2559399);