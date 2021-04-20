'use strict'

function minute2text(minute) {
  let singleNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'fourty', 'fifty']
  let minuteWord = '';

  if (minute[0] === '0') { //single digits
    //minuteWord += 'oh ';
    minuteWord += singleNumbers[parseInt(minute[1]) - 1];
  } else if (minute[0] === '1') { //ten and teens
    if (minute === '10') {
      return 'ten'
    } else {
      minuteWord += teens[parseInt(minute[1]) - 1];
    }
  } else { //twenty and up
    if (minute[1] === '0') { 
      minuteWord += tens[parseInt(minute[0]) - 2];
    } else {
      minuteWord += tens[parseInt(minute[0]) - 2] + '-' + singleNumbers[parseInt(minute[1]) - 1];
    }
  }

  return minuteWord;
}

function time2text (time) {
  let splitTime = time.split(':');
  let hours = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one'];
  let spokenTime = [];
  let roundUp = false;
  let noonMidnight = false;

  if (time === '24:00' || time === '00:00') {
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
  } else if (splitTime[1] === '05' || splitTime[1] === '10' || splitTime[1] === '20') {
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour-= 12;
    }

    if (hour === 12) {
      hour = 'noon';
      noonMidnight = true;
    } else if (hour === 0) {
      hour = 'midnight';
      noonMidnight = true;
    } else {
      hour = hours[hour - 1];
    }
    
    spokenTime.push(minute2text(splitTime[1]) + ' past ' + hour);
  } else if (splitTime[1] === '55' || splitTime[1] === '50' || splitTime[1] === '40') { 
    let hour = parseInt(splitTime[0]); 


    if (hour === 11) {
      hour = 'noon';
      noonMidnight = true;
    } else if (hour === 23) {
      hour = 'midnight';
      noonMidnight = true;
    } else {
      if (hour > 12) {
        hour -= 12;
      }
      hour = hours[hour];
      roundUp = true;
    }

    let minutes = 60 - parseInt(splitTime[1]);
    let minStr = minutes.toString();

    if (minStr.length === 1) {
      minStr = '0' + minStr;
    }

    spokenTime.push(minute2text(minStr) + ' to ' + hour);
  } else if (splitTime[1] === '15' || splitTime[1] === '30') {
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour -= 12;
    }

    if (hour === 12) {
      hour = 'noon';
      noonMidnight = true;
    } else if (hour === 0) {
      hour = 'midnight';
      noonMidnight = true;
    } else {
      hour = hours[hour - 1];
    }

    let minWord = splitTime[1] === '15' ? 'quarter' : 'half';
    spokenTime.push(minWord + ' past ' + hour);
  } else if (splitTime[1] === '45') {
    let hour = parseInt(splitTime[0]);

    if (hour === 11) {
      hour = 'noon';
      noonMidnight = true;
    } else if (hour === 23) {
      hour = 'midnight';
      noonMidnight = true;
    } else {
      if (hour > 12) {
        hour -= 12;
      }
      hour = hours[hour];
      roundUp = true;
    }

    spokenTime.push('quarter to ' + hour);
  } else { //all other times
    let hour = parseInt(splitTime[0]);
    if (hour > 12) {
      hour -= 12;
    }
    if (hour === 0) {
      hour = 12;
    }
  
    if (splitTime[1][0] === '0') {
      spokenTime.push(hours[hour - 1] + ' oh ' + minute2text(splitTime[1]));
    } else {
      spokenTime.push(hours[hour - 1] + " " + minute2text(splitTime[1]));
    }
   
  }

  //morning, afternoon, evening
  if (!noonMidnight) {
    let hour = parseInt(splitTime[0]);
    if (roundUp) {
      hour++;
    }
    if (hour < 12) {
      spokenTime.push('in the morning');
    } else if (hour >= 12 && hour < 18) {
      spokenTime.push('in the afternoon');
    } else {
      spokenTime.push('in the evening');
    }
  }

  return spokenTime.join(' ');
}

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