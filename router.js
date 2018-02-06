var html = require('yo-yo');
var nanorouter = require('nanorouter');

var router = nanorouter({ default: '/404' });
var { homePage, aboutPage } = require('./views');
var { store, bus } = require('./app');

router.on('/', function(params){
	console.log('home route');
	html.update(
		document.querySelector('.container'),
		homePage({ 
			greeting: 'Hello World', 
			items: store.get('collection') 
		}, bus)
	);
});

router.on('/about', function(params){
	console.log('about route')
	html.update(
		document.querySelector('.container'),
		aboutPage({ statement: 'This is a page that tells you all about things'}, bus)
	);
}); 

module.exports = router;

