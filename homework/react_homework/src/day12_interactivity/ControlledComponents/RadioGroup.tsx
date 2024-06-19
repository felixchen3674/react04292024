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

import React from "react";
import { Component, ReactNode } from "react";

// import { Component, ReactNode } from "react";

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

// export class RadioGroup extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(): ReactNode {
//     return (
//       <div>
//         <label>
//           Gender:
//           <label htmlFor="man"> // htmlfor is to increase the accessibility and will mark the radio when clicking the text
// however, if you just nest input in the label , you don't have to use htmlfor ; it should indicate automatically
//             Man:
//             <input type="radio" name="gender" value={"man"} id="man" />
//           </label>
//           <label htmlFor="woman">
//             Woman:
//             <input type="radio" name="gender" value={"woman"} id="woman" />
//           </label>
//         </label>
//       </div>
//     );
//   }
// }
