"use strict";

const Element			= require('../classes/Element.js');

module.exports = function H1(source, value, attributes) {
	let _element = null;
	
	this.__constructor = function __constructor(source, value, attributes) {
		if(typeof(global.options.format.heading) == 'boolean' && !global.options.format.heading) {
			_element = source;
			return;
		}
		
		_element			= new Element('h1');
		_element.setText(value);
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