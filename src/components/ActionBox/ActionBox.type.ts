import { type ActionType } from "@/types/ActionType.type";
import { SpringValues } from "@react-spring/web";

export type ActionBox = {
  winner?: boolean;
  actionType: ActionType;
  style: SpringValues<{ opacity: number }>;
  onClickHandler: () => void;
}