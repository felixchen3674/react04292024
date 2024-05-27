import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserContainer() {
  const user = useSelector((state) => state.users);
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {user.data &&
        user.data.map((item) => {
          return <div>{item.name}</div>;
        })}
    </div>
  );
}
