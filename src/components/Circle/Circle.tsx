import Image from "next/image";
import { type Circle } from "./Circle.type";

export default function Circle({ winner }: Circle) {
  console.log('Circle winner: ', winner);
  return (
    <Image alt="O" src="/circle-icon.svg" width={100} height={100} />
  );
};