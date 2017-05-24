const formatting		= require('../index.js');

var content = '[noparse]Thats [b]awesome[/b]![/noparse]';

console.log(formatting.format(content));