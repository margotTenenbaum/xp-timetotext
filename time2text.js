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