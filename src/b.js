import { times } from 'lodash';
import * as React from 'react';

export default function Placeholders(num) {
	//return import(/* webpackChunkName: "a" */ './a').then(function(a) {
	return times(
		num,
		React.createElement('div', { className: 'placeholder' }, 'hold on, for one more day'),
	);
	//});
}
