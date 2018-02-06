const html = require('yo-yo');

var $homePage = function(data, bus){
	return html`<main class="container">
		<h1>${data.greeting}</h1>	
		<ul class="item-list">
			${data.items.map(item => html`<li class="list-item">${item}</li>`)}	
		</ul>
		<button onclick=${clickHandler}>Click Me!</button>
	</main>`;
	
	function clickHandler(){
		bus.emit('button:clicked');
	}
};


module.exports = $homePage;
