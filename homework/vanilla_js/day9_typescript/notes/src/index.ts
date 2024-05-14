// declare variale
let age: number = 7;
if (age < 50) {
  age += 10;
  console.log(age);
}

//age ="ss"
// tsc --init to create configuration flie

// "rootDir": "./src" /* Specify the root folder within your source files. */

// "outDir": "./dist" /* Specify an output folder for all emitted files. */,
// "removeComments": true /* Disable emitting comments. */,

// "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */,

// "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */

let sales: number = 123_456_789;
let course: string = "typeScript";
let isPublished: boolean = true;
// let b = 123; you can also omit the annotation , the complier will detect the type of variable;
let varb; //any type of value;
// data type :
//  anytype
varb = "a";
varb = 8;
// any type can be the same as js with dynamic data type;

// function wha(data){
//   console.log(data); // that will be error without declaring the data type;
// }

function render(data: any) {
  console.log(data);
}
let array: number[] = [1, 2, 3];
// let array2:number[] =[1,2,"3"] that will reflect the error in the array;
// let array2 = []; this will become any type of array; in order to indicate the data type of array;
let array3: number[] = [];
// array3.forEach(n=>n.something )// this will specify the method only for number array)

// tuple :only for two value of array;
let array4: [number, string] = [1, "mochi"];
// array4[0].somthing will be methods for number ; array4[1].something will be methods for string ;

//enums:
const small = 1;
const medium = 2;
const large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
// which will show mySize to be 2; if we want more specify number, we can assgin each variable in enum instead of just assign the small to 1

//function
// "noUnusedParameters": true /* Raise an error when a function parameter isn't read. */,
function calculateTax(income: number, year: number): number {
  // this came income will be error showing on code if income not use;
  if (year > 5000) {
    // let x;
    //  "noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,
    return income * 1.2;
  }
  // the second number will be annotation for the return value; if nothing to return , you can ommit it
  return income * 1.3;
}
// "noImplicitReturns": true /* Enable error reporting for codepaths that do not explicitly return in a function. */,

function calculateTax2(income: number, year?: number): number {
  // or year = 2022
  if ((year || 2022) > 5000) {
    // year>5000;

    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(1000, 2000); // if you missing variable , it will show error;

calculateTax2(1000); // in this case you will have default value for year

// object
let employee: {
  readonly id: number;
  // name ?: string; // ? mark will be option but not recommend to use
  name: string;
  retire: (data: Date) => void;
} = {
  id: 1,
  name: "", // can be empty string but not null or undefind
  retire: (data: Date) => console.log(data),
}; // object can add annotation as well
employee.name; // will not show error;

// employee.id = 0;
// will show error because we can't modify the porperty will readonly

// type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (data: Date) => void;
};
let employee2: Employee = {
  id: 2,
  name: "jack",
  retire: (data: Date) => console.log(data),
};

//union type
function kgtolbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight;
  } else {
    return parseInt(weight);
  }
}

//intersection type
let weight: number & string; // just a example but not realistic

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};
type UImidwidget = Draggable & Resizeable;

let textBox: UImidwidget = {
  drag: () => {},
  resize: () => {},
};

//Literal(exact, specification)(limit the number or string that can be used)

type Quantity = 50 | 100;
let quantity: Quantity = 50; // it will show error if the value is not 50 or 100;
type Metirc = "cm" | "inch";

function greeting(name: string) {
  // usually we can't use null of undefined in ts;
  console.log(name.toUpperCase());
}

greeting("tom");

function greeting2(name: string | null) {
  // however we can use union type to assgin the null or undefind to the value and use if/else to distinguish the situation
  if (name) console.log(name.toUpperCase());
  else console.log("hola");
}

greeting2(null);

//optional chainning

type Person = {
  birthday?: Date; // if we put optional operator here
};
function getPerson(id: number): Person | null {
  return id === 0 ? null : { birthday: new Date() };
}
let newperson = getPerson(0);
// console.log(newperson.birthday) //** this will be error because the person is null
console.log(newperson?.birthday?.getFullYear); // ** give the option that only the true value can console
// when the birthday type will be optional , we need to put operator whenever we need to access the property of birthday.

// array[0] is null or undefined
// we can use array?.[0] to show the value if it is true;

let log = (message: string) => console.log(message);
// log.(null);// will be error because the return type is string;

// let log2: any = null;
// log2?.("a"); //
//  if the function log2 can't operate correctly and return null,
//  we can use ?. optional operator to make sure it only take value with ture

//generics type

// function getElement(array: number[]) {
//   return array[0];
// }
// const array1: number[] = [1, 2, 3];
// const array2: string[] = ["a", "b", "c"];
// console.log(getElement(array1));
// console.log(getElement(array2));in this case we need to change the type of generics type so that we can reuse the function;

function getElement<ElementType>(array: ElementType[]) {
  return array[0];
}
const array1: number[] = [1, 2, 3];
const array2: string[] = ["a", "b", "c"];
console.log(getElement(array1));
console.log(getElement(array2)); // it helps us to identify the datatype automatlly

// generics type for object
type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

const response: ApiResponse<{ name: string; age: number }> = {
  // because data type is not assgin any info, you have to manually enter the data type when using it
  data: {
    name: "tome",
    age: 21,
  },
  isError: false,
};
const respons2: ApiResponse<{ title: string }> = {
  // you can see when you passing different datatype value , it change the format of the obj
  data: {
    title: "ss",
  },
  isError: false,
};

//****default generics type
type ApiResponse2<Data = { status: string }> = {
  data: Data;
  isError: boolean;
};
const respons3: ApiResponse2 = {
  // we can set up default data type so that we don't have to pass data type manually everytime
  data: {
    status: "fals",
  },
  isError: false,
};

//**** generics obj type */ it limit the type of Data to be object type

type ApiResponse3<Data extends object> = {
  data: Data;
  isError: boolean;
};
const respons4: ApiResponse3<{ name: string }> = {
  data: {
    name: "s",
  },
  isError: false,
};

//default of generics object type
type ApiResponse4<Data extends object = { name: string }> = {
  data: Data;
  isError: boolean;
};
const respons5: ApiResponse4 = {
  // you don't have to declare your generics type here because of default
  data: {
    // status:"fals", it will show up false since the object will be {name:string};
    name: "good",
  },
  isError: false,
};

//index signature
// for define unknown key of object ,we can use index signature to define it as any;

type Obj = {
  [key: string]: any;
  // key will be string type and value will be any
  //with this method, you only need to define once and it will include all the key in the object
};
