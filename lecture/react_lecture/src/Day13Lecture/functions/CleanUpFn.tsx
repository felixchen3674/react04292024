import React, { useEffect } from "react";

export default function CleanUpFn() {
  // 1st arg, callback fn in useEffect, has to return either undefined or another function
  // if we make the 1st arg an async function, then it will return promise

  useEffect(() => {
    const onDocumentClick = () => {
      console.log("something funny");
    };
    document.addEventListener("click", onDocumentClick);

    // the following function will be triggered when component will unmount
    return () => {
      console.log("component will unmount, cleaning up...");
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return <div>CleanUpFn</div>;
}
