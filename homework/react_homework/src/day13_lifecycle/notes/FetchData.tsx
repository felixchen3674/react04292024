import axios from "axios";
import { useEffect, useState } from "react";

export default function Fetch() {
  const [text, setText] = useState("");
  const handleData = async () => {
    // fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    axios.get("https://catfact.ninja/fact").then((data) => console.log(data));
  };
  useEffect(() => {
    function getData() {
      axios
        .get("https://catfact.ninja/fact")
        .then((res) => setText(res.data.fact));
    }
    getData();
  }, []);
  return (
    <div>
      <button onClick={handleData}> GetData</button>
      <h2>{text}</h2>
    </div>
  );
}
