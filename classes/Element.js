"use strict";

module.exports = function Element(name) {
	let _tag			= null;
	let _text			= null;
	let _attributes		= {};
	
	this.__constructor = function __constructor(name) {
		_tag = name;
	};
	
	this.setText = function setText(value) {
		_text = value;
	};
	
	this.setAttribute = function setAttribute(name, value) {
		_attributes[name] = value;
	};
	
	this.toString = function toString() {
		let html = '<' + _tag;
		
		if(Object.keys(_attributes).length > 0) {
			Object.keys(_attributes).forEach((key) => {
				html += ' ' + key + '="' + _attributes[key] + '"';
			});
		}
		
		if(_text != null) {
			html += '>';
			html += _text;
			html += '</' + _tag + '>';
		} else {
			html += ' />';
		}
		
		return html;
	};
	
	this.__constructor(name);
};