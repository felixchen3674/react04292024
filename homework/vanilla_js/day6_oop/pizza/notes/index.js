// const s = 'Hello';
// console.log(typeof s.toUpperCase());
// console.log(s.toUpperCase());

// const s2 = new String('z');
// console.log(typeof s2);
// console.log(s2.toUpperCase());

//  console.log(typeof window.alert()); //undefined, not return value
// console.log(navigator);

//Object literal
// const book1 = {
//   title: 'Book One',
//   author: 'John doe',
//   year: '2012',
//   getSummary: function () {
//     return `${this.title} was written by ${this.author}`;
//   },
// };

// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// // 2-constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   //   this.getInfo = function () {
//   //     return `${this.title} by ${this.author}, ${this.year}`;
//   //   };
// }
// //getInfo prototype
// Book.prototype.getInfo = function () {
//   return `${this.title} by ${this.author}, ${this.year}`;
// };

// //getAge
// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `The book is ${years} years old`;
// };

// //revise/Change year
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// const book1 = new Book('book1', 'zhe', '2012');
// book1.revise('500');
// console.log(book1);

//3-inheritence

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   //   this.getInfo = function () {
//   //     return `${this.title} by ${this.author}, ${this.year}`;
//   //   };
// }
// //getInfo prototype
// Book.prototype.getInfo = function () {
//   return `${this.title} by ${this.author}, ${this.year}`;
// };

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);
// const mg1 = new Magazine('mg1', 'li', '2000', '08');
// console.log(mg1);

//ES6 Class
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getInfo() {
//     return `${this.title} by ${this.author}, ${this.year}`;
//   }
// }

// //Instantiate Object
// const book1 = new Book('book1', 'zhe', '2000');
// console.log(book1.getInfo());

//Subclass
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getInfo() {
//     return `${this.title} by ${this.author}, ${this.year}`;
//   }
// }

// //Magazine SubClass
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super();
//     this.month = month;
//   }
// }

// const mg1 = new Magazine('Mag1', 'sja', '2000', '08');
// console.log(mg1);

//Objects keys. values. and entries

let objects1 = {
  sadj: 'asd',
  sad: 'sadsa',
  dasfd: 'asdd',
};
let map = new Map(Object.entries(objects1));

console.log(map);
