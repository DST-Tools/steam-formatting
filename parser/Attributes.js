"use strict";

module.exports = function Attributes(tag, attributes) {
	let object = {};
	
	if(!attributes) {
		return object;
	}
	
	attributes = attributes.match(/[a-zA-Z0-9_-]+=(\'|"|).*(\'|"|)?/g);
	
	if(attributes) {
		for(var index = 0; index < attributes.length; index++) {
			let attribute = attributes[index].trim().split('=').map((key) => {
				return key.replace(/(^(\'|")+|(\'|")+$)/mg, '');
			});
			
			object[attribute[0]] = attribute[1];
		}
	}
	
	return object;
};