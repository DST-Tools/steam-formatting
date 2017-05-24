const formatting		= require('../index.js');

var content = '[code]if(we.likeIt()) {\
	print("Hello World!");\
}[/code]';

console.log(formatting.format(content));