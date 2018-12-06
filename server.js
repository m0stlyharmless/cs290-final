const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
var fs = require('fs'); /* Put it where other modules included */


//var quizData = require('./quizData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/teacher-hub', function(req, res) {
	res.status(200).render('teacherHub', {});

});

app.get('/student-hub', function(req, res) {
	res.status(200).render('studentHub', {});

});


app.get('/quizData', function(req, res) {
	res.status(200).render('studentHub', {});

});

app.get('/quizData.json', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8')); /* Inside the get function */
    console.log("Requested quizData.json");
    res.sendFile(path.join(__dirname, 'quizData.json'));
});
/*

app.set('/quizData.json', (req, res) => {
  //console.log(res)
   console.log("Requested quizData.json");



  res.sendFile(path.join(__dirname, 'quizData.json'));
});
*/
app.get('/', function(req, res) {
	res.status(200).render('homePage', {});
});

app.get('/quizzes/:id', function (req, res, next) {
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8')); /* Inside the get function */
	var quizId = req.params.id.toLowerCase();
	if (data[quizId]) {
		res.render('quizzes', {"data": data[quizId], "id": quizId});
	} else {
		next();
	}
});

app.get('/teacher-hub/create-quiz/:id', function(req, res, next) {
	var id = 
	res.render('quizCreator.handlebars');
});


app.get('*', function(req, res) {	
	res.status(404).render('404', {

	});
});

app.listen(port, function() {
	console.log("Server is on port", port);
});
