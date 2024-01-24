// <1> creating object with constructor 
let student = new Object();
student.name = "Sameer";
student.age = 20;
student.city = "Delhi";
student.aim = "NIT Trichy";

// console.log(student); // --> Output : { name: 'Sameer', age: 20, city: 'Delhi', aim: 'NIT Trichy' }

// <2> array as a value in object 
student.marks = [90, 80, 85, 93, 96];
// console.log(student);
// // --> Output : {
//   name: 'Sameer',
//   age: 20,
//   city: 'Delhi',
//   aim: 'NIT Trichy',
//   marks: [ 90, 80, 85, 93, 96 ]
// }
// console.log(student.marks); // --> Output : [ 90, 80, 85, 93, 96 ]
// console.log(student.marks[2]); // --> Output : 85

// < 3 > object as value (Nested Object);
student.marks = {
    "academic marks": {
        maths: 93,
        physics: 94,
        chemistry: 98,
        english: 93,
        computer_science : 99
    },
    practical_marks: {
        physics: 89,
        chemistry: 87,
        computer_science : 96
    }
}
// console.log(student); // --> Output : {
//     name: 'Sameer',
//     age: 20,
//     city: 'Delhi',
//     aim: 'NIT Trichy',
//     marks: [ 90, 80, 85, 93, 96 ]
//   }
//   {
//     name: 'Sameer',
//     age: 20,
//     city: 'Delhi',
//     aim: 'NIT Trichy',
//     marks: {
//       'academic marks': {
//         maths: 93,
//         physics: 94,
//         chemistry: 98,
//         english: 93,
//         computer_science: 99
//       },
//       practical_marks: { physics: 89, chemistry: 87, computer_science: 96 }
//     }
//   }
// console.log(student.marks.practical_marks); // --> Output : { physics: 89, chemistry: 87, computer_science: 96 }
// console.log(student.marks.practical_marks.physics); // --> Output : 89

// console.log(student.marks["academic marks"]);  // --> Output : {
//     maths: 93,
//     physics: 94,
//     chemistry: 98,
//     english: 93,
//     computer_science: 99
//   }
// console.log(student.marks["academic marks"].physics); // --> Output : 94

// <4> merging two objects 
// #first way
// NOTE : it will not merge two array but make objects as values of object
let obj1 = { 1: "first", 2: "second", 3: "third" };
let obj2 = { 4: "four", 5: "five", 6: "six" };
let obj3 = { 7: "seven", 8: "eight", 9: "nine" };

let mergeObj1 = { obj1, obj2, obj3 }; // --> Output : it will not give expected output but it will append obj1,2,3 as element of object

// console.log(mergeObj1);  // --> Output : {
//     obj1: { '1': 'first', '2': 'second', '3': 'third' },
//     obj2: { '4': 'four', '5': 'five', '6': 'six' },
//     obj3: { '7': 'seven', '8': 'eight', '9': 'nine' }
//   }

// #second way Object.assign(target,source);
let mergeObj2 = Object.assign({}, obj1, obj2, obj3);

// console.log(mergeObj2); // --> Output : {
    // '1': 'first',
    // '2': 'second',
    // '3': 'third',
    // '4': 'four',
    // '5': 'five',
    // '6': 'six',
    // '7': 'seven',
    // '8': 'eight',
    // '9': 'nine'
//   }

// #third way [it is most used way] spreading
let mergeObj3 = { ...obj1, ...obj2, ...obj3 };

// console.log(mergeObj3); // --> Output : {
//     '1': 'first',
//     '2': 'second',
//     '3': 'third',
//     '4': 'four',
//     '5': 'five',
//     '6': 'six',
//     '7': 'seven',
//     '8': 'eight',
//     '9': 'nine'
//   }

// <5> accessing object from array of objects
let users = [
    {
        id: "sameer@gmail.com",
        city : "Delhi"
    },
    {
        id: "sohail@gmail.com",
        city : "Pune"
    },
    {
        id: "salman@gmail.com",
        city : "Mumbai"
    }
]

// console.log(users); // --> Output : [
//     { id: 'sameer@gmail.com', city: 'Delhi' },
//     { id: 'sohail@gmail.com', city: 'Pune' },
//     { id: 'salman@gmail.com', city: 'Mumbai' }
//   ]
// console.log(users[0].id); // --> Output : sameer@gmail.com

// <6> accessing all values of object Object.values(obj) --> will return array of values

// console.log(Object.values(student)); // --> Output : it will return array
// [
//     'Sameer',
//     20,
//     'Delhi',
//     'NIT Trichy',
//     {
//       'academic marks': {
//         maths: 93,
//         physics: 94,
//         chemistry: 98,
//         english: 93,
//         computer_science: 99
//       },
//       practical_marks: { physics: 89, chemistry: 87, computer_science: 96 }
//     }
//   ]

// console.log(Object.values(student)[3]); // --> Output : NIT Trichy

// console.log(Object.values(student.marks["academic marks"])); // --> Output : [ 93, 94, 98, 93, 99 ]

// <7> accessing all keys of object --> Object.keys(obj) --> will return array of keys

// console.log(Object.keys(student)); // --> Output : [ 'name', 'age', 'city', 'aim', 'marks' ]

// console.log(Object.keys(student)[2]); // --> Output : city

// console.log(Object.keys(student)[2][0]); // --> Output : c

// console.log(Object.keys(student.marks)); // --> Output : [ 'academic marks', 'practical_marks' ]

// console.log(Object.keys(student.marks["academic marks"])); // --> Output : [ 'maths', 'physics', 'chemistry', 'english', 'computer_science' ]
// console.log(Object.keys(student.marks["academic marks"].maths)); // --> Output : [] since maths is it self key


// <8> accessing all enteries(key,value) pair of object

// console.log(Object.entries(student)); // --> Output : will return array of key value pair 
// [
//     [ 'name', 'Sameer' ],
//     [ 'age', 20 ],
//     [ 'city', 'Delhi' ],
//     [ 'aim', 'NIT Trichy' ],
//     [
//       'marks',
//       { 'academic marks': [Object], practical_marks: [Object] }
//     ]
//   ]

// console.log(Object.entries(student)[0]);  // --> Output : [ 'name', 'Sameer' ]

// console.log(Object.entries(student.marks));  // --> Output : [
    //     [
        //       'academic marks',
        //       {
            //         maths: 93,
            //         physics: 94,
            //         chemistry: 98,
            //         english: 93,
            //         computer_science: 99
            //       }
            //     ],
//     [
    //       'practical_marks',
    //       { physics: 89, chemistry: 87, computer_science: 96 }
    //     ]
    //   ]

    // console.log(Object.entries(student.marks["academic marks"]));  // --> Output : [
    //     [ 'maths', 93 ],
    //     [ 'physics', 94 ],
    //     [ 'chemistry', 98 ],
    //     [ 'english', 93 ],
    //     [ 'computer_science', 99 ]
    //   ]

// <9> destructuring 

let course = {
    coureTitle: "Js in hindi",
    price: 999,
    courseInstructor: "Hitesh",
    courseDuration : "20 hr"
}
// console.log(course);

// now if we want to access multiple values from course then we need to write course.key this will make code little messy and unreadable so here destructuring came into picture

let { courseInstructor } = course;
console.log(course.courseInstructor); // --> Output : Hitesh
// now instead of above we use below directly without writing "course."

console.log(courseInstructor); // --> Output : Hitesh

// we also make this more shorter i.e.
let { courseDuration: duration } = course;
console.log(duration); // --> Output : 20 hr

let { "academic marks": academic_marks } = student.marks; // --->  ***
console.log(academic_marks);
// --> Output : {
//   maths: 93,
//   physics: 94,
//   chemistry: 98,
//   english: 93,
//   computer_science: 99
// }

