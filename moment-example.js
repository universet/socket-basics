var moment = require('moment');
var now = moment();

//console.log(now.format()); //string as output
//console.log(now.format('X'));//seconds
//console.log(now.valueOf('x'));//milisecondds

var timestamp = now.valueOf('x');
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a')); //7:46 am
//now.subtract(1, 'year');

//console.log(now.format());
//console.log(now.format('dddd, MMM Do YYYY, h:mma')); //July 30th 2020, 7:24 am