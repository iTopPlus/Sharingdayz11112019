var moment = require('moment-timezone');
// let current_datetime = new Date('2019-10-25T17:16:59.000Z')
// // current_datetime.addHours(-7);
// current_datetime.add(-7, 'h');
// console.log(current_datetime.toString());
// var datetime = new Date("2019-10-25T17:16:59.000Z");
// console.log("Before: ", datetime);
// // datetime.setHours(datetime.getHours()); 
// console.log("After: ", datetime);

const date = moment('2019-10-25T17:16:59.000Z');
// date.add(-7, 'h');
var test = date.tz('Aisa/Bangkoks');
console.log(test.toString());