let age: number = 20;
if (age < 50)
    age += 10;

//You do not need to annotate everything as typescript compiler can infer what type it is based on the value
let sales: number = 123_456_789;
//let sales = 123_456_789; 
let course: string = 'TypeScript';
//let course = 'TypeScript';
let is_published: boolean = true;
//let is_published = true;

let level;
// if not declare, it assumes type is 'any'

//Array

// let number1: number[] = [1,2,'3']
let number2: number[] = [1,2,3]
let number3: number[] = []


// Tuples

let user: [number, string] = [1, "Anthony"]
//type will declare what type it is and how many it will have
// user.push(1);
//.push works but try not to use for tuples as the type would be any

//Enums: list of related constance

const small = 1;
const medium = 2;
const large = 3;

    //PascalCase: first letter cap

    const enum Size1 {Small, Medium, Large}
    //enum will automatically say Small = 0, Medium = 1, Large = 2
    //if you do not wish to have 0,1,2 you could assign them with equal '=' sign
    const enum Size2 {Small = 1, Medium = 2, Large = 3}
    //or
    const enum Size3 {Small = 's', Medium = 'm', Large = 'l'}

    let mySize: Size1 = Size1.Medium
    // enum such as 'Size1' becomes a type of itself.
    //that's why it is :Size1 not :number
    console.log(mySize)

//Functions

function calculateTax(income: number, taxYear: number): number{
    if (taxYear < 2022){
        return income *1.2
    } return income * 1.3
}
    // need to not only annotate the params, 
    // but also need to annotate the return value by adding :type next to the params
    
    // if you want params that are optional (could be there or not there), you add '?' ex) (income: number, taxYear?: number)
    // or use default value ex) (income: number, taxYear = 2022)
    calculateTax(10000, 2022)



//Objects

let employee1: {
    id: number,
    name?: string
} = { id:1};
employee1.name = 'Anthony'

//If you want to have name object, it needs both type and object declared.
// you have couple options
//1. {id:1, name:''}
//2. {id:1} but have  the type to ?  ex)let employee: {id: number,name?: string}

//have certain properties "read only" so we dont accidentally change later
//we add readonly before the name of the property when declaring the type
//ex)
let employee2: {
    readonly id: number,
    name?: string
} = { id:1};
employee2.name = 'Anthony'
//employee2.id = 1    => will not work as it is read only!



//how do we write the type of a function (or method in an object)?

let employee3: {
    readonly id: number,
    name?: string,
    //function
    retire: (date: Date) => void
} = { 
    id:1,
    retire: (date:Date) =>{
        console.log(date)
    }
};
employee2.name = 'Anthony'

//Type alias :you can make custom types

type Employee = {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let employee4: Employee = { 
    id:1,
    retire: (date:Date) =>{
        console.log(date)
    }
};
employee4.name = 'Anthony'

//Union Types : allows you to have multiple types

function kgToLbs(weight: number | string): number{
    //Narrowing: narrow down what the type would be 
    if(typeof weight === 'number'){
        return weight*2.2
    }
    else{
        return parseInt(weight)*2.2
    }
}
kgToLbs(10)
kgToLbs('10kg')

//Intersection types

// ex) let weight: number & string;
//using &

//realistic example
type Draggable = {
    drag: ()=>void
}
type Resizable = {
    resize: ()=>void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget ={
    drag: ()=>{},
    resize: ()=>{}
}

//Literal types (exact or specific)
    let quantity1:50 = 50;
    //quantity will not work as we have hard coded quantity to be only 50
    let quantity2:50 | 100 = 100;
    //this means that quantity2 could be 50 or 100, nothing else
    //or

    type Quantity = 50 | 100;
    let quantity3: Quantity = 100;
    //string
    type NewString = 'cm' | 'inch'
    let newString: NewString = 'cm'

//Null types

function greet1(name:string){
    console.log(name.toUpperCase())
}

//greet(null); -> does not work in TS.

//if you want to at least check or show an error, use union type and use if statement
function greet2(name:string | null){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Hola')
}
greet2(null)

//Optional chaining

type Customer1 = {
    birthday: Date
}

function getCustomer1(id:number):Customer1 | null {
    return id===0? null : {birthday:new Date()}
}
let customer1 = getCustomer1(0)
if(customer1 !== null)
    console.log(customer1.birthday)

//Now, in certain cercumstances, we need to add 'undefined' to the type of return value. then we could
//add another | undefined and check for undefined in the if statement as well.
function getCustomer2(id:number):Customer1 | null | undefined{
    return id===0? null : {birthday:new Date()}
}
let customer2 = getCustomer2(0)
if(customer2 !== null && customer2 !== undefined)
    console.log(customer2.birthday)

//But there is simpler way called Optional Chaining

function getCustomer3(id:number):Customer1 | null | undefined{
    return id===0? null : {birthday:new Date()}
}
let customer3 = getCustomer3(1)
//optional property access operator "?"customer could  be null or undefined
    console.log(customer3?.birthday)
    //now we only get customer that is not null or undefined

//let's take another step and have birthday property optional
type Customer2 = {
    birthday?: Date
}
function getCustomer4(id:number):Customer2 | null | undefined{
    return id===0? null : {birthday:new Date()}
}
let customer4 = getCustomer4(1)
//optional property access operator "?" customer could  be null or undefined
    console.log(customer4?.birthday?.getFullYear())


//optional element access operator: dealing with Arrays
//let's say we are printing 1st customer in an array.
//we check if it is null or undefined
//if(customer !== null && customer !== undefined)
//  customer[0]
//same as customer?.[0]

//optional call (a function)

let log = null;
//check with
log?.("what")


//Generics (in type)

function getElement1 (array: number[]){
    return array[0]
}

const numbers1 = [1,2,3]
//numbers will be type number
const firstNum1 = getElement1(numbers1)

const strings1 = ['sadf', 'fghd']
//numbers will be type number
const firstStr1 = getElement1(strings1)

//strings will not work as (array:number[]) is showing number array
//we could change it to (number | string[])
function getElement2 (array: number | string[]){
    return array[0]
}
const numbers2 = [1,2,3]
//numbers will be type number
const firstNum2 = getElement2(numbers2)

const strings2 = ['sadf', 'fghd']
//numbers will be type number
const firstStr2 = getElement2(strings2)

//so we do Generic type

function getElement3<T> (array: T[]){
    return array[0]
}
const numbers3 = [1,2,3]
//you can even type it in as below 
const firstNum3 = getElement3<number>(numbers3)

const strings3 = ['sadf', 'fghd']
//numbers will be type number
const firstStr3 = getElement3(strings3)
