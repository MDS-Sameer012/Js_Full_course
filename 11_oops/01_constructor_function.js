//********************************************************
// < 1 > Consturctor Function   // ---> it will allow us to create instace of particular class

// for example if we want to create 100 student object having value based on fetch from data base then to intialize each manually ges lots of efforts and decrease maintainabiliy so we use constructor function to create instances of particular object

function student(
  name,
  rollno,
  gender,
  [english, computerScience, physics, chemistry, maths]
) {
  this.name = name;
  this.rollno = rollno;
  this.gender = gender;
  this.marks = [english, computerScience, physics, chemistry, maths];
  this.totalMarks = this.marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  this.printMarks = () => {
    this.marks.forEach((subject, index) => {
      switch (index) {
        case 0:
          console.log(`English : ${subject}`);
          break;
        case 1:
          console.log(`Computer Science : ${subject}`);
          break;
        case 2:
          console.log(`Physics : ${subject}`);
          break;
        case 3:
          console.log(`Chemistry : ${subject}`);
          break;
        case 4:
          console.log(`Maths : ${subject}`);
          break;
        default:
          break;
      }
    });
  };
  this.getThis = () => console.log(this);
  return this;
}
const Sameermarks = [90, 95, 78, 78, 56];
const sameer = student("Sameer", 12, "Male", Sameermarks);
const sohail = student("Sohail", 15, "Male", [90, 65, 89, 95, 74]); // --->  this will update the value of name , rollno , and marks of sameer also so to prevent this overwrite we use new keyword to create a new instace of object which is unique for variable

// sameer.printMarks();
// console.log(sameer);
// console.log(sohail);
// both the above state give value of student constructor function and other stuff also

 //+++++ Important +++++
 //************************[new Keyword]********************************

const pant = new student("Rishab Pant", 17, "Male", [89, 85, 76, 65, 45]);
const ayesha = new student("Ayesha", 38, 'Female', [89, 45, 65, 75, 96]);
// console.table([pant,ayesha]);
// console.table(ayesha);

// NOTE : so as we see that pant and ayesha has seprate instaces of each variable 
// console.log(typeof pant);

pant.getThis()
