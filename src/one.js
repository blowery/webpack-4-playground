import * as ReactDom from 'react-dom';
import { select66 } from './selectors';
import { upper } from './effects';

import(/* webpackChunkName: "a" */ './a').then(function(a) {
	console.log('a');
});
import(/* webpackChunkName: "b" */ './b').then(function(b) {
	console.log('b');
	ReactDom.render(document.getElementById('hi'), b(5));
});
console.log('hi from main');
console.log(select66());
console.log(upper('go blue'));
