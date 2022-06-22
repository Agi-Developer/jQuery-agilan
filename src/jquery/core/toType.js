import class2type from "../var/class2type";
import toString from "../var/toString";

const toType = function (obj) {
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function"
    ? class2type[toString.call(obj)] || "object"
    : typeof obj;
};
export default toType;
