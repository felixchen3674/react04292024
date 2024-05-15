// export default function RadioGroup() {
//   return (
//     <div>
//       <label>
//         Gender:
//         <label>
//           Male:
//           <input type="radio" name="gender" value={"male"}></input>
//         </label>
//         <label>
//           Female:
//           <input type="radio" name="gender" value={"female"}></input>
//         </label>
//         <label>
//           Other:
//           <input type="radio" name="gender" value={"other"}></input>
//         </label>
//       </label>
//     </div>
//   );
// }

import { Component, ReactNode } from "react";

export class RadioGroup extends Component {
  render(): ReactNode {
    return (
      <div>
        <label>
          Gender:
          <label>
            Male:
            <input type="radio" name="gender" value={"male"}></input>
          </label>
          <label>
            Female:
            <input type="radio" name="gender" value={"female"}></input>
          </label>
          <label>
            Other:
            <input type="radio" name="gender" value={"other"}></input>
          </label>
        </label>
      </div>
    );
  }
}
