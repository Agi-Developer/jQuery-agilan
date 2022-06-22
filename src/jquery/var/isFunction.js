const isFunction = function (obj) {
  return (
    typeof obj === "function" &&
    typeof obj.nodeType !== "number" &&
    typeof obj.item !== "function"
  );
};
export default isFunction;
