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
import isFunction from "./var/isFunction";
import isWindow from "./var/isWindow";
import DOMEval from "./core/DOMEval";
import toType from "./core/toType";

const version = "@VERSION";

const jQuery = function (selector, context) {
  return new jQuery.fn.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
  jquery: version,
  constructor: jQuery,
  length: 0
};
export default jQuery;
