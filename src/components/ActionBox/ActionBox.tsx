"use client"

import { animated } from '@react-spring/web'
import Image from "next/image";
import { type ActionBox } from "./ActionBox.type";

const imagePath = { X: '/cross-icon.svg', O: '/circle-icon.svg' };

export default function ActionBox({ winner = false, style, actionType, onClickHandler }: ActionBox) {

  return (
    <animated.div style={style}>
      {actionType ? <Image
        alt={actionType}
        src={imagePath[actionType]}
        width={96}
        height={96}
      /> : <button className="w-24 h-24 text-center" onClick={onClickHandler}>TEST</button>}
    </animated.div>
  );
};