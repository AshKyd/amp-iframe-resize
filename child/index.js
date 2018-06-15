/**
 * AMP iframe resizer
 * Emit an amp `embed-size` message to the parent window
 * @see https://ampbyexample.com/components/amp-iframe/#resizable-iframes
 */
var lastHeight = -1;

function pxToNumber(measurement) {
  return Number(measurement.replace("px", ""));
}
function emitResize() {
  var computedStyle = getComputedStyle(document.body);
  var newHeight =
    pxToNumber(computedStyle.height) +
    pxToNumber(computedStyle.marginTop) +
    pxToNumber(computedStyle.marginBottom);

  if (newHeight === lastHeight) return;
  var payload = {
    sentinel: "amp",
    type: "embed-size",
    height: newHeight
  };
  window.parent.postMessage(payload, "*");
  lastHeight = newHeight;
}

module.exports = function() {
  var observer = new MutationObserver(emitResize);
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["style", "class"]
  });
  addEventListener("resize", emitResize);
  setInterval(emitResize, 5000);
};
