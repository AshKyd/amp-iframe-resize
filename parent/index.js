/**
 * AMP iframe resize handler
 * Catch an amp `embed-size` message from an iframe, and resize accordingly.
 * @see https://ampbyexample.com/components/amp-iframe/#resizable-iframes
 */
function getFrameFromEvent(e) {
  var frames = document.getElementsByTagName("iframe");
  var frame;
  for (var i = 0; i < frames.length; i++) {
    if (frames[i].contentWindow === e.source) {
      return frames[i];
    }
  }
}

function onResizeRequest(e) {
  const data = e.data;
  if (data.sentinel !== "amp" || data.type !== "embed-size") return;

  const frame = getFrameFromEvent(e);
  if (!frame) return;
  frame.height = Number(data.height);
}

module.exports = function() {
  window.addEventListener("message", onResizeRequest, false);
};
