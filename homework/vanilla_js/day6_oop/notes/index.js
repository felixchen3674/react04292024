// Object literal
const book1 = {
  title: "book1",
  author: "Tom",
  year: 2012,
  getInfo: function () {
    return `${this.title}is written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getInfo());

//construtor function

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  //   this.getInfo = function () {
  //     return `${this.title}is written by ${this.author} in ${this.year}`;
  //   };
}
// prototype method
book.prototype.getInfo = function () {
  return `${this.title}is written by ${this.author} in ${this.year}`;
};
book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revise = true;
};
const book2 = new book("book2", "Jack", 2022);
console.log(book2.getInfo());
console.log(book2);
book2.revise(2012);
console.log(book2);

// magezine consctruct

function magezine(title, author, year, month) {
  book.call(this, title, author, year, month);
  this.month = month;
}
magezine.prototype = Object.create(book.prototype);
const mag1 = new magezine("mag1", "tom", "2012", "03");
// magezine.prototype.constructor = magezine;
console.log(mag1);

class Book {
  constructor(title, author, year) {
    (this.title = title), (this.author = author), (this.year = year);
  }
  getInfo() {
    return `${this.title}is written by ${this.author} in ${this.year}`;
  }
  static topBook() {
    return "what is this";
  }
}

console.log(Book.topBook());

class magezine extends Book {
  constructor(titel, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
