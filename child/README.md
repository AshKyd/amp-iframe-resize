# AMP iframe resize emitter

A teeny tiny (0.37 kb before gzip) resize handler for child iframes, that
supports the [AMP-style resize event messages](https://ampbyexample.com/components/amp-iframe/#resizable-iframes).

Use this module if you're creating content that will be consumed in AMP articles
that needs the parent frame to be resized to fit.

This script binds a mutation observer to the body & listener to the resize event
so it will check for changes to dimensions whenever your content does, or if the
window resizes.

## Usage

Install the package from NPM (`npm i amp-iframe-resize`);

Then add the listeners like so:

```
const resizeHandler = require('amp-iframe-resize');
resizeHandler();
```

## You might like…

If you liked this module, you might also like the [amp-iframe-parent-resize](./amp-iframe-resize) module which lets your non-AMP parent page handle resize events from AMP articles such as this.
