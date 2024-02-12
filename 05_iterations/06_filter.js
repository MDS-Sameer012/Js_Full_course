// filter is used to get values filtered on some conditions

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "Science"); // --->  it will return array of books where book genre is science

userBooks = books.filter(
  (book) => book.publish >= 1996 && book.genre === "Science"
); // --->  it will return array of books where publish year > = 1996

userBooks = books.filter((book) => {
  // --->  it will return all books with history genre
  if (book.genre === "History") {
    // book.genre = "Political Science"; // --->  it will also change in original array
    return book;
  }
});

// console.log(userBooks);
// console.log(books);

// accessing even position values from array
let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNum = myNumber.filter((num, index, arr) => index % 2 == 1);
console.log(myNum);
