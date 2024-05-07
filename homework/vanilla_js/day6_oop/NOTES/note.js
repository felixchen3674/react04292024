//OOP

// object.method()

const s = 'Hello'
console.log(typeof s)
console.log(s.toUpperCase())

//Creating string as objects
const ss = new String('Hello')
console.log(typeof ss)

console.log(s.toUpperCase())

// when  const s = 'Hello'
// and when you do s.toUpperCase(), it does const ss = new String('Hello') behind the scene. BUT TEMPORALLY.
// so it changes s to an object to use .toUpperCase() method, then changes back to string after doing .toUpperCase()

// console.log(window);
// console.log(navigator.appVersion) 
// ->5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36

//Object literal

    const book1 = {
        title: 'book1',
        author: 'Anthony',
        year: '2024',
        getSummary: function(){
            return `${this.title} is written by ${this.author} in ${this.year}`
        }
    }
    console.log(book1);
    console.log(book1.title);
    console.log(book1.getSummary());
    // constructor 

    function Book(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    //getSummary prototype
    Book.prototype.getSummary = function(){
        return `${this.title} is written by ${this.author} in ${this.year}`
    }

    //getAge
    Book.prototype.getAge = function(){
        const years = new Date().getFullYear()-this.year;
        return `${this.title} has been ${years} since initial publish`
    }
    //Revise / change year

    Book.prototype.revise = function(newYear){
        this.year = newYear;
        this.revised = true;
    }

    const book2 = new Book('book2', 'anthony', '2023')
    const book3 = new Book('book3', 'anthonyshin', '2014')
    console.log(book2)
    console.log(book2.getSummary())
    console.log(book2.getAge())

    console.log(book2);
    book2.revise('2012');
    console.log(book2);


    //Constructor

    function Magazine(title, author, year, month){
        Book.call(this, title, author, year);
        this.month = month;
    }

    // To inherit prototype function
    Magazine.prototype = Object.create(Book.prototype);
    //change constructor property in prototype to Magazine
    Magazine.prototype.constructor = Magazine;
    const mag1 = new Magazine('mag1', 'sun', '2022', 'Jan')
    console.log(mag1)
    console.log(mag1.getSummary())

    //Object.create()
    //Object of protos
    const bookProtos = {
        getSummary: function(){
            return `${this.title} is written by ${this.author} in ${this.year}`
        },
        getAge: function(){
            const years = new Date().getFullYear()-this.year;
            return `${this.title} has been ${years} since initial publish`
        },
    }

        //Create Object
    const book4 = Object.create(bookProtos);
    book4.title = 'New Book';
    book4.author = 'Shin';
    book4.year = '2016'

    //other way
    const book5 = Object.create(bookProtos, {
        title: {value: 'Newwww Book'},
        author: {value: 'bookboooook'},
        year: {value: '2018'},
    });

    console.log(book4)
    console.log(book5)

    // CLASS

    class Bookk {
        constructor(title, author, year){
            this.title = title;
            this.author = author;
            this.year = year;
        }
        getSummary(){
            return `${this.title} is written by ${this.author} in ${this.year}`
        }
        getAge(){
            const years = new Date().getFullYear()-this.year;
            return `${this.title} has been ${years} since initial publish`
        }
        revise(newYear){
            this.year = newYear;
            this.revised = true;
        }
        static topBookStore(){
            return 'Barns & Noble'
        }
    }
    //Instantiate Object
    const book6 = new Bookk('book5', 'ShinShin', '2020');
    console.log(book6)
    console.log(Bookk.topBookStore());

    //Subclasses: making a class that inherits from other class
     //Magazine Subclass

     class Magazinee extends Bookk{
        constructor(title, author,year, month){
            super(title, author, year);
            this.month = month;
        }
     }
     const mag2 = new Magazinee('mag2', 'Anthony', '2021', 'June')
     console.log(mag2)
     console.log(mag2.getSummary())




    

////////////////////


function Person(fname, age, job){
    this.fname = fname;
    this.age = age;
    this.job = job;
    // this.sayHi = function(){
    //     return `Hi ${this.fname}`
    // }
}
Person.prototype.sayHi = function (){
    return`Hi ${this.fname}`
}

const p1 = new Person('joe')

//p is the instance, Person is the class and constructor function
const p2 = new Person('mike')

const person999 = {
    fname: 'Jack',
    age: 12,
}
const sayHicopy = p1.sayHi;
person999.sayHi = sayhicopy;
person999.sayHi();

//binding 


function(){}.bind()