// export default function Checkbox() {
//   return (
//     <div>
//       <label>
//         {" "}
//         Check List:
//         <label htmlFor="item1">Item1</label>
//         <input type="checkbox" name="item1" id="item1" value={"item"} />
//         {/* htmlfor will match the input id to ensure the accessibilty work well */}
//         <label htmlFor="item2">Item2</label>
//         <input type="checkbox" name="item2" id="item2" value={"item2"} />
//         <label htmlFor="item3">Item3</label>
//         <input type="checkbox" name="item3" id="item3" value={"item3"} />
//       </label>
//     </div>
//   );

// }

// import { Component } from "react";
// export class Checkbox extends Component {
//   render() {
//     return (
//       <div>
//         <label>
//           Check List: <label htmlFor="item1">Item1</label>
//           <input type="checkbox" name="item1" id="item1" value={"item"} />
//           {/* htmlfor will match the input id to ensure the accessibilty work well */}
//           <label htmlFor="item2">Item2</label>
//           <input type="checkbox" name="item2" id="item2" value={"item2"} />
//           <label htmlFor="item3">Item3</label>
//           <input type="checkbox" name="item3" id="item3" value={"item3"} />
//         </label>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <label>
        Check List:
        <label htmlFor="item1">
          Item1
          <input type="checkbox" name="item1" id="item1" value={"item1"} />
        </label>
        <label htmlFor="item2">
          Item2
          <input type="checkbox" name="item2" id="item2" value={"item2"} />
        </label>
      </label>
    );
  }
}
