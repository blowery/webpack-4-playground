import * as ReactDom from 'react-dom';
import { foo } from './many';

import(/* webpackChunkName: "a" */ './a').then(function(a) {
	console.log('a');
});
import(/* webpackChunkName: "b" */ './b').then(function(b) {
	console.log('b');
	ReactDom.render(document.getElementById('hi'), b(5));
});
console.log('hi from main');
foo();

