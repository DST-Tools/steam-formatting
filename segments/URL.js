"use strict";

const Element			= require('../classes/Element.js');
const url				= require('url');

module.exports = function URL(source, value, attributes) {
	let _element = null;
	
	this.__constructor = function __constructor(source, value, attributes) {
		// Disable Links
		if(typeof(global.options.links) == 'boolean' && !global.options.links === false) {
			_element = source;
			return;
		}
		
		_element			= new Element('a');
		_element.setText(value);
		
		// If open target in new window
		if(typeof(global.options.links.blank) != 'undefined' && global.options.links.blank == true) {
			_element.setAttribute('target', '_blank');
		}
		
		if(typeof(global.options.links.whitelist) == 'object') {
			var result		= url.parse(attributes.url);
			var whitelisted	= false;
			
			// Check if URL is whitelisted
			global.options.links.whitelist.domains.forEach((domain) => {
				if(domain == result.hostname) {
					whitelisted = true;
					return;
				}
			});
			
			if(typeof(global.options.links.whitelist.referer) != 'undefined' && whitelisted) {
				_element.setAttribute('href', global.options.links.whitelist.referer + attributes.url);
			} else if(!whitelisted) {
				if(global.options.links.whitelist.remove) {
					_element = null;
				} else {
					_element = source;
				}
			}
		} else {
			_element.setAttribute('href', attributes.url);
		}
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