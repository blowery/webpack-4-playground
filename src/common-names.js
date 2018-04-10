export function foo() {
	const name = typeof window !== 'undefined' && window.name;
	console.log(name || 'foo');
}
export function bar() {
	console.log('bar');
}
export function baz() {
	console.log('baz');
}
export default function based() {
	console.log('based');
}
