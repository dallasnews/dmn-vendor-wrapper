# DMN Vendor Wrapper

A no-dependency Vanilla JS implementation of DMN's new Header and Footer that was made for Vendors like AdPay and Obits.


## Deployment

TL;DR simply merge your branch into `master` and the CircleCI setup will re-push your built code into our production S3 bucket!
- this CircleCI script copies the `dist/` folder into S3
- in this repo, the `dist/` file is _not_ in `.gitignore`
- make sure to run `npm run build` prior to merging into master so that the compiled code can be copied

## Development and Testing

- `npm i` dependencies and run `npm run start` to start a local Webpack Dev Server example
- when you're ready to open a pull request, run `npm run build` and commit the resulting change to `dist/wrapper.js`

## Usage

1. Add the necessary divs to your markup:

```html
<div class="wrapper" id="dmn-header"></div>
<div class="wrapper" id="dmn-footer"></div>
```

2. Add our S3-hosted script to your page:

```html
<script
  type="text/javascript"
  src="https://staging.dallasnews.com/sd/vendor/wrapper.js"
></script>
```

Alternatively, add the script from built bundle in `dist/` in your JS:

```js
import "./../../../../dist/wrapper";
```

## Environment Target: Interactives

I used John Hancock's Yeoman generated starter project to implement an example for DMN's interactives team. It is a Browserify environment. Check it out in the [`/examples`](https://github.com/dallasnews/dmn-vendor-wrapper/tree/master/examples/interactive-furniture) folder. Look at [`interactive-furniture/src/templates/base.html`](https://github.com/dallasnews/dmn-vendor-wrapper/blob/master/examples/interactive-furniture/src/templates/base.html) to see the above instructions implemented.

## Updating the Promo Offer

- go to [/work/dmn-vendor-wrapper/src/header/header.html](/Users/ngilbert/Desktop/work/dmn-vendor-wrapper/src/header/header.html)
- on line 43 there is a link:

```html
<!-- line 43 -->
<a href="https://www.dallasnews.com/subscribe/dn-header-08042021/">
  <button>
    <div class="top-text">subscribe now</div>
    <div class="bottom-text">99¢/week</div>
  </button>
</a>
```

- change that link to the new promo offer, e.g. `dn-header-08042021`

## Testing

1.  Clone this repo if it's the first time.

2.  Checkout the change branch

3.  Install all packages - `npm i`

4.  Build Code - `npm run build`

5.  Run Server - `npm run start`

6.  Open a browser tab and navigate to http://localhost:8080/

7.  Verify that your changes match the site
