// import React from 'react';

// interface AppProps {
//   initialCount: number;
// }

// interface AppState {
//   count: number;
// }

// class Day13Play extends React.Component<AppProps, AppState> {
//   static defaultProps = {
//     initialCount: 0, // Default value for initialCount
//   };
//   constructor(props: AppProps) {
//     super(props);
//     this.state = {
//       count: props.initialCount,
//     };
//     console.log('Constructor: Initialized state with count:', this.state.count);
//   }

//   componentDidMount() {
//     console.log('componentDidMount: Component has been mounted.');
//     // Simulate an API call to fetch data
//     setTimeout(() => {
//       console.log('Simulated API call: Fetching initial data');
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }

//   componentDidUpdate(prevProps: AppProps, prevState: AppState) {
//     console.log('componentDidUpdate: Component updated.');
//     if (prevState.count !== this.state.count) {
//       console.log(
//         'Count has changed from',
//         prevState.count,
//         'to',
//         this.state.count
//       );
//     }
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount: Component is about to be unmounted.');
//     // Cleanup any subscriptions or timers here
//   }

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render(): React.ReactNode {
//     console.log('Render: Rendering the component.');
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default Day13Play;
import React, { useEffect, useState } from 'react';
import Text from './Text';
import Axios from 'axios';

export default function Day13Play() {
  //   const [showText, setShowText] = useState(false);
  //   return (
  //     <>
  //       <div>Day13Play</div>
  //       {showText && <Text />}
  //       <button
  //         onClick={() => {
  //           setShowText((pre) => !pre);
  //         }}
  //       >
  //         Show
  //       </button>
  //     </>
  //   );
  const [catFact, setCatFact] = useState('');

  const fetchData = async () => {
    const res = await Axios.get('https://catfact.ninja/fact');
    setCatFact(res.data.fact);
  };
  useEffect(() => {
    fetchData();
    console.log('component mounted');
  }, []);

  return (
    <div className="App">
      <button onClick={fetchData}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
