const html = require('yo-yo');

var $aboutPage = function(data, bus){
	return html`<main class="id container">
		${data.statement}	
	</main>`;
};

module.exports = $aboutPage;

