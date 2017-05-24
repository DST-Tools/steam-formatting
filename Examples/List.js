const formatting		= require('../index.js');

var content = '[list][*]Entry 1\r\n\
[*]Entry 2\r\n\
[*]Entry 3[/list]';

console.log(formatting.format(content));