"use strict";

const Element			= require('../classes/Element.js');

module.exports = function Quote(source, value, attributes) {
	let _element = null;
	
	this.__constructor = function __constructor(source, value, attributes) {
		if(typeof(global.options.quote) == 'boolean' && !global.options.quote) {
			_element = source;
			return;
		}
		
		_element = new Element('div');
		_element.setText('<small>Ursprünglich geschrieben von <strong>' + attributes.quote + '</strong>:</small>' + value);
	};
	
	this.toString = function toString() {
		if(_element == null) {
			return '';
		}
		
		if(typeof(_element.toString)) {
			return _element.toString();
		}

		return _element;
	};
	
	this.__constructor(source, value, attributes);
};