import _ from 'lodash';
// Lodash, now imported by this script

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(
		['Hello', 'webpack', 'what is up', 'this is a test'],
		' '
	);

	return element;
}

document.body.appendChild(component());
