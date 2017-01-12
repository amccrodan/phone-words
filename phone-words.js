function makePhoneWords(inputNumber) {
  inputNumber = String(inputNumber);

  if (inputNumber.length !== 7 || inputNumber.search('0') !== -1 || inputNumber.search('1') !== -1) {
    return "Please enter a 7-digit phone number that does not contain 0s or 1s."
  }


}


// Test Cases

console.log(makePhoneWords(1998794));
console.log(makePhoneWords(2028794));
console.log(makePhoneWords(128794));

console.log(makePhoneWords(2555247));