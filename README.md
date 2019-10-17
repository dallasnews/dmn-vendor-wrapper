# DMN Vendor Wrapper

A no-dependency Vanilla JS implementation of DMN's new Header and Footer furniture.

## Development and Testing

Simply `npm i` dependencies and run `npm run start` to start a local Webpack Dev Server example.

## Usage

1. Add the necessary divs to your markup:

```html
<div class="wrapper" id="dmn-header"></div>
<div class="wrapper" id="dmn-footer"></div>
```

2. Add our S3-hosted script to your page:

```html
<script type="text/javascript" src="https://staging.dallasnews.com/sd/vendor/index.js"></script>
```


Alternatively, add the script from built bundle in `dist/` in your JS:

```js
import "./../../../../dist/index";
```

## Interactives

I used John Hancock's Yeoman generated starter project to implement an example for DMN's interactives team.  Check it out in the [`/examples`](https://github.com/dallasnews/dmn-vendor-wrapper/tree/master/examples/interactive-furniture) folder. It is a Browserify environment. Look at [`interactive-furniture/src/templates/base.html`](https://github.com/dallasnews/dmn-vendor-wrapper/blob/master/examples/interactive-furniture/src/templates/base.html) to see the above instructions implemented.

