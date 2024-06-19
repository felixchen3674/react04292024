import React, { useState } from "react";
import { menuConfig } from "./MenuConfig";

export default function MenuList() {
  const data = menuConfig;
  const [toggleId, setToggleId] = useState(-1);
  const handleExpand = (index) => {
    if (toggleId === index) {
      setToggleId(-1);
    } else {
      setToggleId(index);
    }
  };
  return (
    <div>
      {data &&
        data.map((item, index) => {
          const { title, subItems } = item;
          return (
            <div key={title} className="itemContainer">
              <h3>{title}</h3>
              {subItems && (
                <button onClick={() => handleExpand(index)}>
                  {toggleId === index ? "hide" : "expand"}
                </button>
              )}
              {toggleId === index ? (
                <div className="subItemContainer">
                  {subItems?.map((item) => {
                    return (
                      <div key={item} className="subItemContainer">
                        <h4>{item}</h4>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}
