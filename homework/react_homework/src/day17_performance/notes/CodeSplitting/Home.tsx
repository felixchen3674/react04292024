import React, { useState } from "react";

interface Props {}

function Home(props: Props) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
            import("../path.tsx").then((module) => {
                alert(module.sum(2, 2));
            });
        }}
    >
        add2+2
      </button>
      <br />
      <br />
      <button>Toggle Admin</button>
      {isAdmin ? <AdminData /> : <h2>NotAdmin</h2>}
    </>
  );
}

export default Home;
