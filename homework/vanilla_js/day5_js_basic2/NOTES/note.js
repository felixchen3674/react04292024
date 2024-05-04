// Array

const a1 = ["a", "b", "c", "d"]

// console.log(a1)
// console.log(a1[0])
// console.log(a1[1])
// console.log(a1.length)

a1.push(["e", "f"])
// console.log(a1)
// console.log(a1[4][1])
a1[2] = "z"
// console.log(a1)


//Object

const person1 = {
    firstName: "Anthony",
    lastName: "Shin",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log("Hello, this is Anthony")
    },
    eat: function(){
        console.log("I eat meat")
    },
}

// console.log(person1.firstName)
// console.log(person1.lastName)
// console.log(person1.age)
// console.log(person1.isEmployed)
// person1.sayHello()
// person1.eat()

const person2 = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    isEmployed: false,
    sayHello: function(){
        console.log("Hello, this is John")
    },
    eat: function(){
        console.log("I eat pizza")
    },
    name: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
    //no arrow function as this cannot be combined with arrow function
}

// console.log(person2.firstName)
// console.log(person2.lastName)
// console.log(person2.age)
// console.log(person2.isEmployed)
// person2.sayHello()
// person2.eat()
// person2.name()

//Array Methods

const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 100},
    {name: "Keyboard", price: 25},
]

        //Filter method

        const filteredItems = items.filter((item) => {
            return item.price <=100
            //returns true or false statement (boolean)
        });
        // console.log(items)
        // console.log(filteredItems)

        //Map

        const itemNames = items.map((item) => {
            return item.price
        });
        // console.log(itemNames)

        //find

        const foundItem = items.find((item) => {
            return item.name === 'Book'
        });
        // console.log(foundItem)

        //forEach

        // items.forEach((item)=>{
        //     console.log(item.price)
        // })

        //some : returns true or false statement (boolean)

        const hasInexpensiveItemsSome = items.some((item) => {
            return item.price<=0
        })
        // console.log(hasInexpensiveItemsSome)

        //every : similar to some but it checks if ALL items are true or false
        const hasInexpensiveItemsEvery = items.every((item) => {
            return item.price<=100
        })
        // console.log(hasInexpensiveItemsEvery)

        //reduce :

        const total = items.reduce((currentTotal, item) => {
            return item.price + currentTotal
        }, 0)
        // console.log(total)

                //Explanation from MDN below
                // const array1 = [1, 2, 3, 4];
                // 0 + 1 + 2 + 3 + 4
                // const initialValue = 0;
                // const sumWithInitial = array1.reduce(
                // (accumulator, currentValue) => accumulator + currentValue,
                // initialValue,
                // );
                        //accumulator : The total of each iteration
                        //currentValue : The value of the current element.
                        // initialValue : Starting point
                // console.log(sumWithInitial);
                // Expected output: 10

        //includes : checks if it is included in the array. returns boolean

        const array1 = [1, 2, 3, 4, 5];

        const includesTwo = array1.includes(2)

        // console.log(includesTwo)
        // console.log(array1.includes(2))

//Destruction

    //Old or original way Array
    const arr = ["anthony", "shin", "30"];
    const first = arr[0];
    const last = arr[1];
    const age = arr[2];

    //Destructive Array
    const arr2 = ["anthony", "shin", "30"];
    const [first1, last1, age1] = arr2
        // if you want to skip an index : empty value with comma
            // const [first1,, age1] = arr2

        //combine the rest with  "..."
            // const arr3 = ["anthony", "shin", "30", "korea", "guitar"];
            // const [first2, last2, ...rest] = arr3;
            // console.log(arr3) ->[ 'anthony', 'shin', '30', 'korea', 'guitar' ]
            // console.log(first2) -> anthony
            // console.log(last2) -> shin
            // console.log(rest) ->[ '30', 'korea', 'guitar' ]

                // const [a, ...b,] = [1, 2, 3];
                // SyntaxError: rest element may not have a trailing comma
                // Always consider using rest operator as the last element


    //Old or original way Object
    const newObj = {
        candy: "lollipops",
        chocolate: "Almondjoy",
        gum: "Trident",
        drink: "Coke zero",
    }
    const candy = newObj.candy
    const chocolate = newObj.chocolate
    const gum = newObj.gum
    const drink = newObj.drink
    console.log(candy)

    //Deconstructive Array
    const newObj2 = {
        candy2: "lollipops",
        chocolate3: "Almondjoy",
        gum2: "Trident",
        drink2: "Coke zero",
    }
    const {candy2, chocolate3:choco, gum2, drink2} = newObj2
    console.log(candy2)
    // console.log(chocolate3) -> does not work because we changed it to "choco"
    console.log(choco)


    const newObj3 = {
        candy4: {
            oldFav:"lollipops",
            newFav:"Jolly Rancher"
        },
        chocolate3: "Almondjoy",
        gum2: "Trident",
        drink2: "Coke zero",
    }
    const { candy4: { oldFav, newFav} } = newObj3
    console.log(oldFav)
    console.log(newFav)

    //Used in for loop
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { title: '1984', author: 'George Orwell', year: 1949 },
        { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
    ];
    for (const { title, author, year } of books) {
        console.log(`Title: ${title}`);
        console.log(`Author: ${author}`);
        console.log(`Year: ${year}`);
        console.log('---');
    }
        //Output will be 
        // Title: The Great Gatsby
        // Author: F. Scott Fitzgerald
        // Year: 1925
        // ---
        // Title: To Kill a Mockingbird
        // Author: Harper Lee
        // Year: 1960
        // ---
        // Title: 1984
        // Author: George Orwell
        // Year: 1949
        // ---
        // Title: Pride and Prejudice
        // Author: Jane Austen
        // Year: 1813
        // ---

        //Used in a function
        const person3 = {
            name: 'John Doe',
            age: 32,
            occupation: 'Engineer',
            city: 'New York'
        };
        function printPersonDetails({ name, age, occupation, city }) {
            console.log(`Name: ${name}`);
            console.log(`Age: ${age}`);
            console.log(`Occupation: ${occupation}`);
            console.log(`City: ${city}`);
        }
          
        printPersonDetails(person3);

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
    const nums1 = ['1', '2', '3', '4', '5', '6']
    //Old
    // const a = alphabet[0]
    
    const [a,b] = alphabet
    console.log(a)

    //Below 2 array are same
    const newArray = [...alphabet, ...nums1]
    const newArray1 = alphabet.concat(nums1)
    console.log(newArray)

    function sumAndMultiply(a,b) {
        return [a+b, a*b]
    }
    const array3 = sumAndMultiply(2,3)
    const [sum1, multiply1] = sumAndMultiply(2,3)
    // console.log(array3)
    // console.log(sum1)
    // console.log(multiply1)

    //override when combining object
    const personOne = {
        name: "John",
        age: 24
    }
    const personTwo = {
        age: 45,
        adderss: "Los Angeles"
    }
    const personThree = {...personOne, ...personTwo}
    // console.log(personThree)

// ***********difference between Object and Array's destructure**********

const myUser = {
    password: "1234",
    username: "john1234",
    isActive: true,
}
const  {password, username} = myUser;
// order does not matter but key has to match.
//below is same.
//const  {password, username} = myUser;
//const  {username, password} = myUser;

const numbersAnthony = [1,2,3,4,5];
const [a1,b1,c1,d1,e1] = numbersAnthony
//order matters!! but name(or the key) does not matter.

//*********************************************** */

/**********you could use ...rest to separate 
the sensitive info when managing user info*/

//Shallow copy vs Deep copy

    //Primitives are immutable
    let myName = 'dave';
    // myName[0] = 'w'; ->does not work

    //Reassignment is not the same as mutable
    myName = 'david';
    // console.log(myName);

    //Non-primitives are mutable
    const xArray = [1,2,3];
    const yArray = xArray;
    yArray.push(4)
    yArray[0] = 9
    // console.log(yArray);
    // console.log(xArray)

    //Impure function that mutates the data 
    const addToScoreHistory = (array, score)=>{
        array.push(score);
        return array;
    }
    //this change(or mutate) the original array
    const scoreArray = [15,43,24]
    // console.log(addToScoreHistory(scoreArray,742))
    // console.log(scoreArray)

    //Shallow copy
        //with the spread operator
        const zArray = [...yArray, 10] //shallow copy
        console.log(xArray)
        console.log(zArray)
        console.log(yArray)
        console.log(xArray === yArray)
        console.log(zArray === yArray)


        // ?????????????????
        // const xArray = [1, 2, 3];
        // const zArray = [...xArray];

        // console.log(xArray); // [1, 2, 3]
        // console.log(zArray); // [1, 2, 3]

        // zArray.push(10); // Modifying zArray, not affecting xArray?? then is it shallow copy???

        // console.log(xArray); // [1, 2, 3]
        // console.log(zArray); // [1, 2, 3, 10]

        // zArray[0] = 100;


//chaining
    //Nullish Coalescing (??)
    function calculatePrice(price, taxes, description){
        // taxes = taxes || 0.05
        taxes = taxes ?? 0.05// by using ?? it checks if the left side is null or undefined, if so, use the right side
        description = description || "default"
        const total = price * (1+taxes)
        console.log(`${description} with tax: $${total}`)
    }
    calculatePrice(100, 0.07, "my Item")
    calculatePrice(100, 0, "my Item")
    calculatePrice(100, undefined, "my Item")

    //styling console.log

        // console.log('%c fun", "color:red")
    
    //optional Chaining (?)
    const user = {
        id: 1,
        name: 'John Doe',
        address: {
          street: '123 Main St',
          city: 'losAngeles',
          zipcode: '12345'
        },
        // Uncomment the line below to see the effect of optional chaining with undefined property
        // phoneNumber: '123-456-7890'
      };
        // Accessing properties without optional chaining
        const streetWithoutOptionalChaining = user.address && user.address.street;
        console.log(streetWithoutOptionalChaining); // '123 Main St'

        // Accessing properties with optional chaining
        const streetWithOptionalChaining = user.address?.street;
        console.log(streetWithOptionalChaining); // '123 Main St'

        // Accessing nested properties with optional chaining
        const zipcodeWithOptionalChaining = user.address?.zipcode;
        console.log(zipcodeWithOptionalChaining); // '12345'

        // Accessing non-existing property with optional chaining
        const phoneNumberWithOptionalChaining = user.phoneNumber?.number;
        console.log(phoneNumberWithOptionalChaining); // undefined

    //Object Shorthand

    const newName = "Anthony"
    const favFood = "Rice"
    const anthony = {
        newName,
        favFood
    }
    console.log(anthony)

//Ternary operator
// condition ? if true : if false

let myAge =30
let message = myAge >= 20 ? "older than me" : "younger than me"
console.log(message)

//Logical operator

    // AND = &&
    // OR = ||
    // NOT = !
