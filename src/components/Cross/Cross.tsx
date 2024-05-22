import Image from "next/image";
import { type Cross } from "./Cross.type";

export default function Cross({ winner }: Cross) {
  console.log('Cross winner: ', winner);

  return (
    <Image alt="X" src="/cross-icon.svg" width={100} height={100} />
  );
};