"use strict";

const URL				= require('url');
const AttributesParser	= require('./Attributes.js');

module.exports = function BBCode(string, tag, attrs, value) {
	value					= String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	tag						= tag.toLowerCase();
	let parsed_attributes	= new AttributesParser(tag, /\[(.*?)\]/g.exec(string)[1]);
	let exists				= false;
	
	switch(tag) {
		case 'u':
		case 'i':
		case 'b':
		case 'strike':
		case 'h1':
		case 'url':
		case 'spoiler':
		case 'noparse':
		case 'code':
		case 'quote':
		case 'olist':
		case 'list':
			exists = true;
		break;
	}
	
	if(exists) {
		var Segment = require('../segments/' + tag.toUpperCase() + '.js');
		var result = new Segment(string, value, parsed_attributes);
		
		if(global.options.newLine) {
			result = result.toString().replace(/\r?\n/g, '<br />')	
		}
		
		return result;
	}
};