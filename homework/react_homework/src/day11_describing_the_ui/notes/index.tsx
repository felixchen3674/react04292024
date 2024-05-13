// function App() {
//   return (
//     <div className="App">
//       Hello World
//       <User name="zhe" age={24} email="zhe@example.com" />
//     </div>
//   );
// }
// const User = ({ name, age, email }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{email}</h1>
//     </div>
//   );
// };
// export default App;
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const age = 14;
//   const isGreen = false;
//   return (
//     <div className="App">
//       {age >= 18 ? <h1>Overage</h1> : <h1>Underage</h1>}
//       <h1 style={{ color: isGreen ? 'green' : 'red' }}>THIS HAS COLOR</h1>
//       {isGreen && <button>This is a button</button>}
//     </div>
//   );
// }

// export default App;
// import User from './User';
// function App() {
//   const names = ['sad', 'mad', 'good', 'better'];
//   const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' },
//   ];

//   return (
//     <div ClassName="App">
//       {names.map((name, k) => {
//         return <h1 key={k}>{name}</h1>;
//       })}
//       {users.map((user) => {
//         return <User name={user.name} id={user.id} />;
//       })}
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const handleInputValue = (e) => {
//     setInputValue(e.target.value);
//   };
//   return (
//     <div>
//       <input type="text" onChange={handleInputValue} />
//       {inputValue}
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';

export default function Day11Play() {
  // const [list, setList] = useState([]);
  // const [task, setTask] = useState('');
  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleAddTask = () => {
  //   const newList = [...list, task];
  //   setList(newList);
  // };
  // const handkeDeleteTask = (keyName) => {
  //   setList(list.filter((task, key) => key !== keyName));
  // };
  // return (
  //   <div className="App">
  //     <div className="addTask">
  //       <input onChange={handleChange} />
  //       <button onClick={handleAddTask}>Add new Task</button>
  //     </div>
  //     <div className="list">
  //       {list.map((task, key) => {
  //         return (
  //           <>
  //             <li key={key}>{task}</li>
  //             <button
  //               onClick={() => {
  //                 handkeDeleteTask(key);
  //               }}
  //             >
  //               x
  //             </button>
  //           </>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  return <></>;
}
