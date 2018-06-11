/**
 * AMP iframe resizer
 * Emit an amp `embed-size` message to the parent window
 * @see https://ampbyexample.com/components/amp-iframe/#resizable-iframes
 */
var lastHeight = -1;
function emitResize() {
  var newHeight = document.documentElement.clientHeight;
  if (newHeight === lastHeight) return;
  console.log("emit resize", newHeight);
  var payload = {
    sentinel: "amp",
    type: "embed-size",
    height: newHeight
  };
  window.parent.postMessage(payload, "*");
  lastHeight = newHeight;
}

module.exports = function() {
  var emitHandler = emitResize;
  var observer = new MutationObserver(emitHandler);
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["style", "class"]
  });
  addEventListener("resize", emitHandler);
  setInterval(emitResize, 5000);
};
