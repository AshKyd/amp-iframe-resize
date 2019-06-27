# AMP iframe resize emitter

A teeny tiny (0.37 kb before gzip) resize handler for child iframes, which
automatically resizes your iframe to the size of the content.

This library supports [AMP-style resize event messages](https://ampbyexample.com/components/amp-iframe/#resizable-iframes)
which should work if you're creating content to be consumed in AMP articles. you
can also use this if you're just making iframes that you want to resize (using
the [amp-iframe-parent-resize](./amp-iframe-resize) package.

This script binds a mutation observer to the body & listener to the resize event
so it will check for changes to dimensions whenever your content does, or if the
window resizes.

## Usage

Install the package from NPM (`npm i amp-iframe-resize-child`);

Then add the listeners like so:

```
const resizeHandler = require('amp-iframe-resize-child');
resizeHandler();
```

## You might like…

If you liked this module, you might also like the [amp-iframe-parent-resize](./amp-iframe-resize) module which lets your non-AMP parent page handle resize events from AMP articles such as this.
