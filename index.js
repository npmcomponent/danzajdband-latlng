
/**
 * Initialize a new LatLng object from given parameters
 *
 * @param {Number} Latitude
 * @param {Number} Longitude
 * @return {LatLon}
 * @api public
 */

module.exports = function LatLng(lat, lng) {
  if (!(this instanceof LatLng)) return new LatLng(el);

	if(isNan(lat) || isNan(lng)) { 
		throw new Error('Invalid LatLng Object parameters');
	}

	this.lat = parseFloat(lat);
	this.lng = parseFloat(lng);
};

/**
 * Observational equality
 *
 * @param {LatLng} point
 * @return {Boolean}
 @ api public
 */

LatLng.prototype.equals = function(point) {
	if(!(point instanceof LatLng)) {
		throw new Error("Can't check equality against a non LatLng object");
	}

	var distance = Math.max(
		Math.abs(this.lat, point.lat),
		Math.abs(this.lng, point.lng)
	);
	
	return distance <= TOLERANCE;
};

/**
 * LatLng object String representation
 */

LatLng.prototype.toString = function() {
	return 'LatLng (' + this.lat + ', ' + this.lon + ')';
};

/**
 * Constants
 */

var TOLERANCE = 1.0e-9;
