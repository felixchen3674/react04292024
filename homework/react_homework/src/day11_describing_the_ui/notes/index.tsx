import React from "react";
import { useState } from "react";
import User from "./User";
import Planet from "./Planet"
interface JobProps {
  salary: number;
  position: string;
  company: string;
}
interface User2Props {
  name: string;
  age: number;
  email: string;
}
//Rendering

// const age = 15;
// if (age >= 18) {
//   console.log("is over age");
// } else {
//   console.log("is under age");
// }
//ternary
// age >= 18 ? console.log("is over age") : console.log("is under age");

export default function Day11Play() {
  // const name = "anthony"
  // const name2 = <h3>Anthony</h3>
  // const age = <h3>32</h3>
  // const email = <h3>name@gmai.com</h3>
  // const user = (
  //   <div>{name2}{age}{email}</div>
  // );
  // const isGreen = false;
  // const names = ["anthony", "shin", "kang", "hoon"];
  // const users = [
  //   {name: "anthony", age: 21},
  //   {name: "shin", age: 31},
  //   {name: "Kang", age: 41},
  // ]
  // const planets = [
  //   {name:"mars", isGasPlanet:false},
  //   {name:"earth", isGasPlanet:false},
  //   {name:"jupiter", isGasPlanet:true},
  //   {name:"venus", isGasPlanet:false},
  //   {name:"neptune", isGasPlanet:true},
  //   {name:"uranus", isGasPlanet:true},
  // ]
  // const [age, setAge] =useState(0);
  // const increaseAge = () => {
  //   setAge(age +1)
  // }
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const [textColor, setTextColor] = useState("blue")
  return (
    <div>
      <h1>Day 11 Notes</h1>
      {/* <div>
        {age}
        <button onClick={increaseAge}>Increase age</button>
      </div> */}
      <div>
        <button onClick={() => {setTextColor("red")}}>Change Color</button>
        <h1 style={{color: textColor}}>what</h1>
      </div>
      {/* <div>
        <input type="text" onChange={handleInputChange} />
        {inputValue}
      </div> */}
      <div>
        {/* {names.map((name, key) => {
          return <h2 key={key}>{name}</h2>;
        })} */}
        {/* {users.map((user, key)=>{
          return <User name={user.name} age={user.age}/>
        })} */}
        {/* {planets.map(
          (planet, key)=>planet.isGasPlanet&&<Planet name={planet.name}/>
        )} */}
      </div>
      {/* This is your play around code */}
      {/* <h2>{name}</h2>
      <div>{name2}</div>
      <div>{name2}{age}{email}</div>
      <div>{user}</div>
      <User /> */}
      {/* <User2 name="kang" age={31} email="kang@gmail.com"/>
      <User2 name="hoon" age={31} email="kang@gmail.com"/>
      <User2 name="shin" age={31} email="kang@gmail.com"/> */}
      {/* <Job salary={5000} position="sen SDE" company="amazon"/>
      <Job salary={12000} position="JR SDE" company="Netflix"/>
      <Job salary={500000} position="sen SDE" company="Google"/> */}
      {/* <h1 style={{color: isGreen?"green":"red"}}>this has color</h1>
      {isGreen && <h1>It is Green</h1>} */}
    </div>
  );
}

//JS function (camel case)
const GetName = () => {
  return "Anthony Shin";
};

//React component: returning html element (name is Pascal case)
const GetNameComponent = () => {
  return <h1>Anthony Shin</h1>;
};

// const User = () => {
//   return (
//     <div>
//       <h1>Anthony</h1>
//       <h1>44</h1>
//       <h1>anthony@gmail.com</h1>
//     </div>
//   );
// };

const User2: React.FC<User2Props> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job: React.FC<JobProps> = (props) => {
  return (
    <div>
      <h5>{props.salary}</h5>
      <h5>{props.position}</h5>
      <h5>{props.company}</h5>
    </div>
  );
};

// const User = (props) => {
//   return (
//     <div>
//       {props.name}
//       {props.age}
//     </div>
//   )
// }


