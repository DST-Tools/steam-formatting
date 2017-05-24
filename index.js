"use strict";

const BBCodeParser		= require('./parser/BBCode.js');

global.options = {
	links:		{
		whitelist:	false,
		blank:		true
	},
	newLine:	true
};

exports.setOptions = function setOptions(options) {
	global.options = options;
};

exports.format = function format(content) {
	let regex = new RegExp('\\[(\\w+)(?:[= ]([^\\]]+))?]((?:.|[\r\n])*?)\\[/\\1]', 'ig');
	/*
		\r\n		<br />
		[LIST]		<ul>
			[*]			<li>
		[url=URL]TEXT[/url]		<a href="URL">TEXT</a>
	*/
	
	if(global.options.newLine) {
		content = content.replace(/\r?\n/g, '<br />')	
	}
	
	return content.replace(regex, BBCodeParser.bind())
};