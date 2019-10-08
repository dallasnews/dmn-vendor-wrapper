# DMN Vendor Wrapper

A no-dependency Vanilla JS implementation of DMN's new Header and Footer furniture.

# Development and Testing

Simply `npm i` dependencies and run `npm run start` to see a Webpack Dev Server example.

# Usage

## In a Webpack or Browserify JS app

1. Add the necessary divs to your markup:

```
<div class="wrapper" id="dmn-header"></div>
```

```
<div class="wrapper" id="dmn-footer"></div>
```

2.  Import the built bundle from `dist/` in your JS:

```
import "./../../../../dist/index";
```

## Interactives

I used John Hancock's Yeoman generated starter project to implement an example for DMN's interactives team.  Check it out in the [`/examples`](https://github.com/dallasnews/dmn-vendor-wrapper/tree/master/examples/interactive-furniture) folder. It is a Browserify environment. Look at [`interactive-furniture/src/js/scripts.js`](https://github.com/dallasnews/dmn-vendor-wrapper/blob/master/examples/interactive-furniture/src/js/scripts.js) and [`interactive-furniture/src/templates/base.html`](https://github.com/dallasnews/dmn-vendor-wrapper/blob/master/examples/interactive-furniture/src/templates/base.html) to see the above instructions implemented.

## Text-based markup editors (e.g. AdPay, Obits vendors)

1. Add the `dmn-header` and `dmn-footer` divs to markup
2. Copy and paste the minified bundle into a `<script></script>` tag
