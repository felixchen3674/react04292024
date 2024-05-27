import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userReducer";

// export default function UserContainer() {
//   const user = useSelector((state) => state.users);
//   useEffect(() => {
//     fetchUser();
//   }, []);
//   return (
//     <div>
//       {user.data &&
//         user.data.map((item) => {
//           return <div>{item.name}</div>;
//         })}
//     </div>
//   );
// }
export default function UserContainer() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const user = useSelector((state) => state.users);
  console.log(user);
  return (
    <div>
      {user.data &&
        user.data.map((item) => {
          return <div>{item.name}</div>;
        })}
    </div>
  );
}
