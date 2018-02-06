require('babel-polyfill');

var html = require('yo-yo');
var EventEmitter = require('events');
var createStore = require('@earthtone/collection-store');
var reduce = require('./reduce');

var bus = new EventEmitter();
var store = createStore(bus);
exports.bus = bus;
exports.store = store;

var router = require('./router');
var $header = function() {
	return html` <header>
		<nav class="navbar">
			<a href="/" onclick=${linkHandler}>Home</a>
			<a href="/about" onclick=${linkHandler}>About</a>
		</nav>
	</header>`;

	function linkHandler(e) {
		e.preventDefault();
		console.log('link clicked', e.target.href);
		router.emit(e.target.href);
	}
};

store.add('collection');
store.insert('collection', 'red', 'blue', 'yellow');

if (!module.parent) {
	window.addEventListener('load', function(){
		reduce({
			ds: store,
			render: function(view){
				html.update(document.querySelector('.container'), view)
			}
		}, bus);

		var $container = document.createElement('main');
		$container.classList.add('container');
		document.body.appendChild($header());
		document.body.appendChild($container);
		router.emit(location.href);
	});
}
