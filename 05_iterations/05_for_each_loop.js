// for each loop in js //---> it is work as property for obj, arrays

//********************************************************
// <1> accessing array using for each loop   // --->

let programmingLanguages = ["C", "C++", "Java", "Python", "C#", "JavaScript"];

//**********************[First Way]**********************************
// using normal function

programmingLanguages.forEach(function (item) {
  // console.log(item);
});

//**********************[Second Way]**********************************
// using arrow function

programmingLanguages.forEach((item) => {
  // console.log(item);
});

// "OR"

// programmingLanguages.forEach((item) => console.log(item));

// "OR"

// programmingLanguages.forEach((item) => (console.log(item)));


//**********************[Third Way]**********************************
// using externally created function 
// NOTE : in this we provide Reference of function not execute funtion inside parenthesis

function printMe(arr) {
  // console.log(arr);
}

programmingLanguages.forEach(printMe);

//**********************[Fourth Way]**********************************
// we can also print index and value using for each

programmingLanguages.forEach((value, index, arr) =>
{
  // console.log(`index : ${index} , value : ${value} , arr : ${arr}`);
  // --> Output : give ouptut like this : index : 0 , value : C , arr : C,C++,Java,Python,C#,JavaScript
})

//********************************************************
// <2> accessing array of object using for each looop   // ---> 

let programmingLanguageswithExtension = [
  {
    languageName: "Python",
    languageExtension: "py"
  },
  {
    languageName: "JavaScript",
    languageExtension: "js"
  },
  {
    languageName: "Java",
    languageExtension: "java"
  }
];

// console.log(programmingLanguageswithExtension);

programmingLanguageswithExtension.forEach((language) => {
  console.log(`Name : ${language.languageName} , Extension : ${language.languageExtension}`);
})
// --> Output : this will generate this type of output for all : Name : Python , Extension : py
