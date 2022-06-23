import whitespace from "./whitespace";

export default new RegExp(
  "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
  "g"
);
