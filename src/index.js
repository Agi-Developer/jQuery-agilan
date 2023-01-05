import $ from "./jquery/jquery";
/// Selector
// 1 empty selector!

$.extend({ boolean: { daily: 2 }, julean: { weekly: 3 } });

// console.log($("li").boolean.daily);
console.log($.boolean.daily);
console.dir($);
console.dir($.fn);
console.dir($());
console.dir($(""));
