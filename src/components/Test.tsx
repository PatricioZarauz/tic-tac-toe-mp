"use client"

import { useState } from "react";
import TestBoard from "./TestBoard";
import { type Action } from "@/types/Action.type";

type CurrentAction = 'X' | 'O';

const BASE_TABLE = [{ type: null }, { type: null }, { type: null }, { type: null }, { type: null }, { type: null }, { type: null }, { type: null }, { type: null }];

export default function Test() {
  const [list, setList] = useState<Action[]>(BASE_TABLE);
  const [currentAction, setCurrentAction] = useState<CurrentAction>('X');

  return (
    <TestBoard
      data={list}
      onClickHandler={(pos) => {
        const newList = list.toSpliced(pos, 1, { type: currentAction });
        setCurrentAction(currentAction => (currentAction === "X" ? "O" : "X"))
        setList(newList);
      }}
    />
  );
};