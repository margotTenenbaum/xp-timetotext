'use strict'

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

    spokenTime.push(parseInt(splitTime[1]) + ' after ' + hour);
  }

  if (splitTime[1] === '55' || splitTime[1] === '50' || splitTime[1] === '40') {
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour-= 12;
    }

    spokenTime.push((60 - parseInt(splitTime[1])) + ' to ' + (hour + 1));
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