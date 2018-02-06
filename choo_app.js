const choo = require('choo');
const html = require('choo/html');

const main = function(state, emit){
	return html`<body>
		<h1>This is Choo</h1>
		<h3>Not Yo-yo</h3>		
	</body>`;
};

var app = choo();
app.route('/', main);
app.mount('body');
