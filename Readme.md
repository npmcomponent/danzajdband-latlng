*This repository is a mirror of the [component](http://component.io) module [danzajdband/latlng](http://github.com/danzajdband/latlng). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/danzajdband-latlng`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# LatLng

  Geographical point data structure extracted from LeafletJS

## Installation

    $ component install danzajdband/latlng

## API

### LatLng(lat, lon)

	Create a new LatLng object given 2 (latitude and longitude) values

```js
var LatLng = require('latlng');
var latlng = LatLng(3, 0.14);
```

### LatLng#equals(latlng)

	Check for equality with other LatLng object

### LatLng#toString

	Create a String representation for the object

## License

  MIT
