const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
var quizData = require('./quizData');

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

app.get('/quizzes/:id', function (req, res, next) {
	var quizId = req.params.id.toLowerCase();
	if (quizData[quizId]) {
		res.render('quizzes', quizData[quizId]);
	} else {
		next();
	}
});

/*app.get('/quizzes', function(req, res) {
	res.status(200).render('testQuizzes', {

	});
});*/

app.get('*', function(req, res) {	
	res.status(404).render('404', {

	});
});

app.listen(port, function() {
	console.log("Server is on port", port);
});
