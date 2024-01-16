let newDate = new Date();
// console.log(newDate); // --> Output : 2024-01-16T16:46:06.713Z

// // <1> date.toString()
// console.log(newDate.toString()); // --> Output : Tue Jan 16 2024 16:48:10 GMT+0000 (Coordinated Universal Time)

// // <2> Date.toDateString()
// console.log(newDate.toDateString()); // --> Output : return date and day in this format : Tue Jan 16 2024

// // <3> date.toLocaleStirng()
// console.log(newDate.toLocaleString()); // --> Output : 1/16/2024, 4:52:10 PM

// // <4> Date.toTimeString()
// console.log(newDate.toTimeString()); // --> Output : 16:53:20 GMT+0000 (Coordinated Universal Time)

// // <5> Date.toJSON()
// console.log(newDate.toJSON()); // --> Output : 2024-01-16T16:54:40.303Z

// // <6> newDate.toISOString()
// console.log(newDate.toISOString()); // --> Output : 2024-01-16T16:58:01.454Z

// // <7> newDate.toLocaleDateString()
// console.log(newDate.toLocaleDateString()); // --> Output : 1/16/2024

// // <8> newDate.toLocaleTimeString()
// console.log(newDate.toLocaleTimeString()); // --> Output : 5:12:14 PM

// // <9> newDate.toLocaleTimeString()
// console.log(newDate.toUTCString()); // --> Output : Tue, 16 Jan 2024 17:15:33 GMT

// ********************************************************************************
                                // Get Operations
// ********************************************************************************
let myDate = new Date(2024,0,16,23,3,23,893);
// <10> newDate.getDay()
// console.log(myDate.getDay()); // --> Output : 2 for [tue]
// sun : 0
// mon: 1 
// tue: 2
// wed: 3
// thu: 4
// fri: 5
// sat: 6

// <11> myDate.getDate()
// console.log(myDate.getDate()); // --> Output : return current date : 16

// // <12> myDate.getHours()
// console.log(myDate.getHours()); // --> Output : return current Hour : 23

// // <13> myDate.getMilliseconds()
// console.log(myDate.getMilliseconds()); // --> Output : 893

// // <14> myDate.getMinutes()
// console.log(myDate.getMinutes()); // --> Output : 3

// // <15> myDate.getMonth()
// console.log(myDate.getMonth()); // --> Output : 0

// // <16> myDate.getSeconds()
// console.log(myDate.getSeconds()); // --> Output : 23

// // <17> myDate.getTime()
// console.log(myDate.getTime()); // --> Output : 1705446203893

// // <18> myDate.getTimezoneOffset()
// console.log(myDate.getTimezoneOffset()); // --> Output : 0

// // <19> myDate.getFullYear()
// console.log(myDate.getFullYear()); // --> Output : 2024

myDate.setFullYear(2023); // --->  it will change current year
// we have same functions for all
// console.log(myDate.getFullYear()); 