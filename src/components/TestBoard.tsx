"use client"

import { useState } from "react";
import Circle from "./Circle";
import Cross from "./Cross";

export default function TestBoard() {
  const [circleActive, setCircleActive] = useState(false);
  const [crossActive, setCrossActive] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className='flex gap-4'>
        <Circle winner={circleActive} />
        <Cross winner={crossActive} />
      </div>
      <div className='flex gap-4'>
        <button onClick={() => setCircleActive(!circleActive)}>Circle action</button>
        <button onClick={() => setCrossActive(!crossActive)}>Cross action</button>
      </div>
    </div>
  );
};