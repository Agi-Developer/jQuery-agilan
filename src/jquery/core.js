import arr from "./var/arr";
import getProto from "./var/getProto";
import slice from "./var/slice";
import flat from "./var/flat";
import push from "./var/push";
import indexOf from "./var/indexOf";
import class2type from "./var/class2type";
import toString from "./var/toString";
import hasOwn from "./var/hasOwn";
import fnToString from "./var/fnToString";
import ObjectFunctionString from "./var/ObjectFunctionString";
import support from "./var/support";
import isArrayLike from "./core/isArrayLike";
import DOMEval from "./core/DOMEval";

var version = "@VERSION",
  rhtmlSuffix = /HTML$/i,
  jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
  };

jQuery.fn = jQuery.prototype = {
  jquery: version,
  constructor: jQuery,
  length: 0
};

jQuery.extend = jQuery.fn.extend = function () {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle deep copy situation
  if (typeof target === "boolean") {
    deep = target;

    // Skip the boolean and the target
    target = arguments[i] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  }

  // Extend jQuery itself if only one argument is passed
  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {
      // Extend the base object
      for (name in options) {
        copy = options[name];

        // Prevent Object.prototype pollution
        // Prevent never-ending loop
        if (name === "__proto__" || target === copy) {
          continue;
        }
        // Recurse if we're merging plain objects or arrays
        if (
          deep &&
          copy &&
          (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
        ) {
          src = target[name];

          // Ensure proper type for the source value
          if (copyIsArray && !Array.isArray(src)) {
            clone = [];
          } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
            clone = {};
          } else {
            clone = src;
          }
          copyIsArray = false;

          // Never move original objects, clone them
          target[name] = jQuery.extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
};

jQuery.extend({
  // Unique for each copy of jQuery on the page
  expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
  isReady: true,
  error: function (msg) {
    throw new Error(msg);
  },
  noop: function () {},
  isPlainObject: function (obj) {
    var proto, Ctor;

    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if (!obj || toString.call(obj) !== "[object Object]") {
      return false;
    }
    proto = getProto(obj);

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if (!proto) {
      return true;
    }

    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return (
      typeof Ctor === "function" &&
      fnToString.call(Ctor) === ObjectFunctionString
    );
  }
});

if (typeof Symbol === "function") {
  jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
}

// jQuery.each(
//   "Boolean Number String Array Date RegExp Object Error Symbol".split(" "),
//   function (_i, name) {
//     class2type["[object" + name + "]"] = name.toLowerCase();
//   }
// );

export default jQuery;
