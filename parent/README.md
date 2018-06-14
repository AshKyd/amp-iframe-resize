# AMP iframe parent resize handler

A teeny tiny (0.27 kb before gzip) resize handler for parent iframes, that
supports the [AMP-style resize event messages](https://ampbyexample.com/components/amp-iframe/#resizable-iframes).

Use this module if you're embedding AMP-flavoured iframes in non-AMP contexts to
get the same resize behaviour working.

## Usage

Install the package from NPM (`npm i amp-iframe-resize-parent`);

Then add the event listener like so:

```
const resizeHandler = require('amp-iframe-resize-parent');
resizeHandler();
```

## You might like…

If you liked this module, you might also like the [amp-iframe-resize](./amp-iframe-resize) module which sends resize events to AMP articles and/or other parent frames like
this.
