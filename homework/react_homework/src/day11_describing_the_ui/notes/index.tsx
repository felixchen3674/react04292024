import { StudentType } from "../Student";
import ConditionalRender from "./ConditionalRender";

export default function Day11Play(props: {
  student: StudentType;
  message: string;
  onClick: () => void;
}) {
  // props will accept a object which will contains value property that is an another object
  console.log(props.student);
  console.log(props);
  console.log(props.message);
  props.onClick();
  return (
    <div>
      <h1>Day 11 Notes</h1>
      <ConditionalRender />
    </div>
  );
}
// export default function Day11Play({
//   student,
//   message,
//   onClick,
// }: {
//   // in this case , we use deconstruct the props object to specify name so that we don't have to write down props
//   student: StudentType;
//   message: string;
//   onClick: () => void;
// }) {
//   console.log(student);
//   console.log(message);
//   onClick();
//   return (
//     <div>
//       <h1>Day 11 Notes</h1>
//     </div>
//   );
// }
