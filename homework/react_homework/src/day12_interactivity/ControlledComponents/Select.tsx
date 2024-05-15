// export default function Select() {
//   return (
//     <div>
//       <label>
//         Choose the duration of your appointment
//         <select>
//           <optgroup label="Select the following:">
//             <option value={"10"}>10 mins</option>
//             <option value={"20"}>20 mins</option>
//             <option value={"30"}>30 mins</option>
//           </optgroup>
//         </select>
//       </label>
//     </div>
//   );
// }

import { Component, ReactNode } from "react";

export class Select extends Component {
  render(): ReactNode {
    return (
      <div>
        <label>
          Choose the duration of your appointment
          <select>
            <optgroup label="Select the following:">
              <option value={"10"}>10 mins</option>
              <option value={"20"}>20 mins</option>
              <option value={"30"}>30 mins</option>
            </optgroup>
          </select>
        </label>
      </div>
    );
  }
}
