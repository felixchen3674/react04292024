import React, { useState } from "react";
import { faqList } from "./faqList";
import RenderQAList from "./renderQAList";
import AddQA from "./AddQA";

export default function CollapsibleFAQ() {
  const [list, setList] = useState(faqList);
  return (
    <div>
      <RenderQAList list={list} setList={setList} />
      <AddQA setList={setList} />
    </div>
  );
}
