'use strict'

function minute2text(minute) {
  let singleNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty']
  let minuteWord = '';

  if (minute === '11') {
    return 'eleven';
  }

  if (minute[0] === '0') {
    minuteWord += 'oh ';
    minuteWord += singleNumbers[parseInt(minute[1]) - 1];
  } else if (minute[1] === 0) {
    minuteWord += tens[parseInt(minute[0]) - 1];
  } else if (minute[0] === 1) {
    minuteWord += teens[parseInt(minute[1]) - 1];
  } else {
    minuteWord += tens[parseInt(minute[0]) - 1] + ' ' + singleNumbers[parseInt(minute[1]) - 1];
  }

  return minuteWord;
}

console.log(minute2text('34'));
console.log(minute2text('05'));
console.log(minute2text('11'));
console.log(minute2text('10'));
console.log(minute2text('16'));



function time2text (time) {
  let splitTime = time.split(':');
  let hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  let spokenTime = [];

  if (time === '00:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'noon';
  }


  if (splitTime[1] === '00') {
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour-= 12;
    }

    spokenTime.push(hours[hour - 1]);
    spokenTime.push("o'clock");
  }

  if (splitTime[1] === '05' || splitTime[1] === '10' || splitTime[1] === '20') {
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour-= 12;
    }

    if (hour === 12) {
      hour = 'noon';
    } else if (hour === 0) {
      hour = 'midnight';
    } else {
      hour = hours[hour - 1];
    }
    
    spokenTime.push(parseInt(splitTime[1]) + ' after ' + hour);
  }

  if (splitTime[1] === '55' || splitTime[1] === '50' || splitTime[1] === '40') {
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour-= 12;
    }

    if (hour === 12) {
      hour = 'noon';
    } else if (hour === 0) {
      hour = 'midnight';
    } else {
      hour = hours[hour];
    }

    spokenTime.push((60 - parseInt(splitTime[1])) + ' to ' + hour);
  }

  //morning, afternoon, evening
  let hour = parseInt(splitTime[0]);
  if (hour < 12) {
    spokenTime.push('in the morning');
  } else if (hour >= 12 && hour < 18) {
    spokenTime.push('in the afternoon');
  } else {
    spokenTime.push('in the evening');
  }

  return spokenTime.join(' ');
}

console.log(time2text('12:00'));
console.log(time2text('00:00'));
console.log(time2text('06:00'));
console.log(time2text('14:00'));
console.log(time2text('19:00'));
console.log(time2text('02:05'));
console.log(time2text('14:05'));
console.log(time2text('02:50'));
console.log(time2text('14:50'));


module.exports = time2text


/*
I: string
O: string

-storage array for time [one, two, three...]

-if else statements
  -catch exactly noon or midnight
  -check for full hour
  -check for half, quarter past or to
  -check for 5, 10, 20 past or to the hour
    -else, proceed regularly
  -check if 'oh' is needed
  -morning, afternoon, evening

-return joined storage array
*/