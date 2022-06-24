import jQuery from "../core";
import document from "../var/document";
import rsingleTag from "./var/rsingleTag";
import isObviousHtml from "./isObviousHtml";

import "../traversing/findFilter";

var rootjQuery,
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  init = (jQuery.fn.init = function (selector, context, root) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined) $(false)
    if (!selector) {
      return this;
    }
  });

init.prototype = jQuery.fn;
rootjQuery = jQuery(document);
