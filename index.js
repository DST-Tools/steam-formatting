"use strict";

const BBCodeParser		= require('./parser/BBCode.js');

global.options = {
	links:		{
		whitelist:	false,
		blank:		true
	},
	newLine:	true,
	format:	{
		bold:		true,
		italic:		true,
		underline:	true,
		strike:		true
	},
	spoiler:	true,
	noparse:	true,
	code:		true,
	quote:		true,
	list:		true
};

exports.setOptions = function setOptions(options) {
	global.options = options;
};

exports.setOption = function setOption(option, value) {
	global.options[option] = value;
};

exports.format = function format(content) {
	return content.replace(new RegExp('\\[(\\w+)(?:[= ]([^\\]]+))?]((?:.|[\r\n])*?)\\[/\\1]', 'ig'), BBCodeParser.bind())
};