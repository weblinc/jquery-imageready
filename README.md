jquery.imageready.js
====== 

A jQuery plugin for a bulk image load event

Options
---
* `cachePrefix`: Variable name used and assigned a random value to overcome IE's caching issues (default: `'random'`)

Example
---
Once all images in the selector (including both descendents and elements immediately selected) `'.container'` are loaded, the callback is fired.

```html
    <div class="container">
        <img src="cutecat1.jpg" />
        <img src="cutecat2.jpg" />
        <img src="cutecat3.jpg" />
    </div>
```

```javascript
  $('.container').imageready(function () {
    console.log('all images are loaded!');
  });
```

Contributing
---
This project uses [smoosh](https://github.com/fat/smoosh) for compiling, linting.
