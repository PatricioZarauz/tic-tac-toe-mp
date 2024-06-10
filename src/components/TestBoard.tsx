"use client"

import { useTransition } from "@react-spring/web";
import ActionBox from "./ActionBox";
import { type Action } from "@/types/Action.type";

type TestBoard = {
  data: Action[];
  onClickHandler: (pos: number) => void;
}

const imagePath = { X: '/cross-icon.svg', O: '/circle-icon.svg' };

export default function TestBoard({ data = [], onClickHandler }: TestBoard) {
  const transitions = useTransition(data, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
    exitBeforeEnter: true
  })

  return (
    <div className="flex flex-col gap-6" >
      <div className="grid grid-cols-3 divide-y-4 divide-x-4 divide-solid divide-black w-fit [clip-path:inset(4px_0_0_4px)]">
        {transitions((style, { type }, _, position) => (
          <div className="p-4">
            <ActionBox style={style} actionType={type} onClickHandler={() => onClickHandler(position)} />
          </div>
        ))}
      </div>
    </div>
  );
};