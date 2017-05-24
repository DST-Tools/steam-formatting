"use strict";

const Element			= require('../classes/Element.js');

module.exports = function Italic(source, value, attributes) {
	let _element = null;
	
	this.__constructor = function __constructor(source, value, attributes) {
		if(typeof(global.options.format.italic) == 'boolean' && !global.options.format.italic) {
			_element = source;
			return;
		}
		
		_element			= new Element('i');
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