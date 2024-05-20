import { useEffect } from "react";

export default function UseLogger(name: string) {
  useEffect(() => {
    console.log(name);
  });
}
