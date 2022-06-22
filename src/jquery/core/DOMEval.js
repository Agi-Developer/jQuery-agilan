import document from "../var/document";

var preservedScriptAttributes = {
  type: true,
  src: true,
  nonce: true,
  noModule: true
};

const DOMEval = function (code, node, doc) {
  doc = doc || document;
  var i,
    val,
    script = doc.createElement("script");
  script.text = code;
  if (node) {
    for (i in preservedScriptAttributes) {
      val = node[i] || (node.getAttribute && node.getAttribute(i));
      if (val) {
        script.setAttribute(i, val);
      }
    }
  }
  doc.head.appendChild(script).parentNode.removeChild(script);
};
export default DOMEval;
