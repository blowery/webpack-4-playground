import * as ReactDom from 'react-dom';

import(/* webpackChunkName: "b" */ './b').then(function(b) {
	console.log('b');
	ReactDom.render(document.getElementById('hi'), b(5));
});
import(/* webpackChunkName: "c" */ './c').then(function(c) {
	console.log('c');
});
console.log('hi from main');
