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
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
    console.log("Requested quizData.json");
    res.sendFile(path.join(__dirname, 'quizData.json'));
});


app.post('/quizzes/name/postResponse', function (req, res, next) {
  var name = req.params.name.toLowerCase();
  var id = req.params.id;
  var answerIndexes = req.params.answerIndexes;
  var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
  if (data[id]) {
    console.log("== req.body:", req.body);
    //if (req.body && req.body.url && req.body.caption) {
    //console.log("== peopleData[" + person + "]:", peopleData[person]);
    res.status(200).send("Success");
    //} else {
    //res.status(400).send("Request needs a body with a URL and caption");
    //}
  } else {
    next();
  }
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
	res.render('quizCreator.handlebars');
});


app.get('/', function(req, res) {
	res.status(200).render('homePage', {});
});


app.get('*', function(req, res) {	
	res.status(404).render('404', {

	});
});

app.listen(port, function() {
	console.log("Server is on port", port);
});
