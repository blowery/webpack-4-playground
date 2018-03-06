import { forEach } from 'lodash';

export default function print(arr) {
	return import(/* webpackChunkName: "b" */ './b').then(function(b) {
		return forEach(arr, console.log.bind(console));
	});
}
