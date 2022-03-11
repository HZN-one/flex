import { ElementPosition } from "../Types";

export const getFlexJustifyContent = (position?: ElementPosition) => {
  switch (position) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return "flex-start";
  }
};
