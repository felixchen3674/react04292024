import React, { useState, memo } from 'react';
import MemoComponent from './plays/MemoComponent';
import MemoValue from './plays/MemoValue';
import MemoFunction from './plays/MemoFunction';

export default function Play() {
  return (
    <>
      {/* <MemoComponent /> */}
      {/* <MemoValue /> */}
      <MemoFunction />
    </>
  );
}
