'use strict'

function numbers2text(number) {
  while (number.length < 3) {
    number = '0' + number;
  }

  let singleNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let word = '';

  if (number[0] !== '0' ) {
    word += singleNumbers[parseInt(number[0]) - 1] + ' hundred ';

    if (number[1] !== 0 || number[2] !== 0) {
      word += 'and ';
    }
  }
  if (number[1] === '0') { // single digits   504
    word += singleNumbers[parseInt(number[2]) - 1];
  } else if (number[1] === '1') { // ten and teens
    if (number === '10') {
      return 'ten'
    } else {
      word += teens[parseInt(number[2]) - 1];
    }
  } else { // twenty and up
    if (number[2] === '0') { 
      word += tens[parseInt(number[1]) - 2];
    } else {
      word += tens[parseInt(number[1]) - 2] + ' ' + singleNumbers[parseInt(number[2]) - 1];
    }
  }

  return word;
}

console.log(numbers2text('528'))
console.log(numbers2text('402'))
console.log(numbers2text('42'))
console.log(numbers2text('2'))


function money2text (time) {


}

// Input: string(number in digit form)
// Output: string(number in spoken form)
// Edge cases: under a dollar, number of digits
// Given: no commas
//
// High Level Plan
// Split at decimal
// Evaluate cents first
// Take length at dollar amounts
//  Categorize
//  Work recursively

module.exports = money2text


// 117,554,205.00
//length = 4