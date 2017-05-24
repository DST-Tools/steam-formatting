"use strict";

const URL				= require('url');
const AttributesParser	= require('./Attributes.js');

module.exports = function BBCode(string, tag, attrs, value) {
	value					= String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	tag						= tag.toLowerCase();
	let parsed_attributes	= new AttributesParser(tag, /\[(.*?)\]/g.exec(string)[1]);
	let exists				= false;
	
	switch(tag) {
		case 'url':
			exists = true;
		break;
	}
	
	if(exists) {
		var Segment = require('../segments/' + tag.toUpperCase() + '.js');
		return new Segment(string, value, parsed_attributes);
	}
};