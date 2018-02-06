const { homePage } = require('./views');

module.exports = function(state, bus){

	bus.on('button:clicked', function(){
		state.ds.insert('collection', 'buffalo');
	});

	bus.on('store:insert', function(){
		state.render(homePage({
			greeting: 'Hello Sally', 
			items: state.ds.get('collection') 
		}, bus));
	});
};
