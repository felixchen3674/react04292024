import './App.css';
import { useState } from "react";

function App() {
  
    return (
    <div className="App">
      <User name="Lin" age={24} />
      <User name="merve" age={29} />
      <Job salary={200000} position="software engineer" company="amazon" />
      <Filter age={29} />
      <List />
      <MoreUsers />
      <Age />
    </div>
  
    );
}

const User = (props) => {
  return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
     </div>
  );
}


const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  );
}

const Filter = (props) => {
  const isGreen = true;
  return (
    <div>
      {props.age > 21 ? <h2 style = {{color: isGreen ? "green" : "red"}}>ok</h2> : <h2>under age</h2>}
    </div>

  );
}

const List = () => {
  const names = ["lin", "cedar", "david", "jeff"];
  return (
    <div>
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>

      })}
    </div>
  );
}

const MoreUsers = () => {
  const users = [
    {name: "Lin", age : 24},
    {name: "David", age : 26},
    {name: "Jeff", age : 29},
  ];
  return (
    <div>
      {users.map((user, key) => {
        return (
          <div>
            <User name={user.name} age={user.age} />
          </div>
        );
      })}
    </div>
  );
}

const Age = () => {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  }
  return (
    <div>
    {age}
    <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default App;
