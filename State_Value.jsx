import { useContext } from "react";
import { StateContext } from "./State_Provider";

export function StateValue() {
  return useContext(StateContext);
}
