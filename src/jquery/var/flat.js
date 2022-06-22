import arr from "./arr";

const flat = () =>
  arr.flat
    ? function (array) {
        return arr.flat.call(array);
      }
    : function (array) {
        return arr.concat.apply([], array);
      };

export default flat;
