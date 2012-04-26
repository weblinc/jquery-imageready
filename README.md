jquery.imageready.js
====== 

A jQuery plugin for a bulk image load event

Options
---
* `cachePrefix`: Variable name used and assigned a random value to overcome IE's caching issues (default: `'random'`)

Example
---
Once all images targeted by the `'.container img'` selector are loaded, the callback is fired.

```javascript
  $('.container img').imageready(function () {
    console.log('all images are loaded!');
  });
```

TODO
---
* Set up working demo

Contributing
---
This project uses [smoosh](https://github.com/fat/smoosh) for compiling, linting.
