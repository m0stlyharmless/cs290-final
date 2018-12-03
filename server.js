var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/teacher-hub', function(req, res) {
	res.status(200).render('teacherHub', {
		
	});

});

app.get('/student-hub', function(req, res) {
	res.status(200).render('studentHub', {
		
	});

});

app.get('/', function(req, res) {
	res.status(200).render('homePage', {

	});
});

app.listen(port, function() {
	console.log("Server is on port", port);
});
