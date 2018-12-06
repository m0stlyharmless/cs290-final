const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
var fs = require('fs'); /* Put it where other modules included */

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }));
//var quizData = require('./quizData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//app.use(bodyParser);
app.use(express.static('public'));

app.get('/teacher-hub', function(req, res) {
	res.status(200).render('teacherHub', {});

});

app.get('/student-hub', function(req, res) {
	res.status(200).render('studentHub', {});

});


app.get('/results', function(req, res) {
    
    // load results file.
    
    
	res.status(200).render('results', {});

});

app.get('/quizData', function(req, res) {
	res.status(200).render('studentHub', {});

});

app.get('/quizData.json', (req, res) => {
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
    console.log("Requested quizData.json");
    res.sendFile(path.join(__dirname, 'quizData.json'));
});


app.post('/quizzes/postResponse', function (req, res) {
    console.log("Requested /quizzes/postResponse");
    //var actual_JSON = JSON.parse(req.body);
    console.log(req.body.name);
    var name = req.body.name;
    var id = req.body.id;
    var answerIndexes = req.body.answerIndexes;
    //var name = actual_JSON["name"];
    //var id = actual_JSON["id"];
    //var answerIndexes = actual_JSON["answerIndexes"];
    //var name = req.params.name.toLowerCase();
    //var id = req.params.id;
    //var answerIndexes = req.params.answerIndexes;
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
    if (data[id]) {
    console.log("== req.body:", req.body);
    //if (req.body && req.body.url && req.body.caption) {
    //console.log("== peopleData[" + person + "]:", peopleData[person]);
    
    fs.writeFileSync('student-2.json', data);  
    
    res.status(200).send("Success");
    //} else {
    //res.status(400).send("Request needs a body with a URL and caption");
    //}
    } //else {
    //next();
  //}
});

app.post('/quizzes/quizSave', function (req, res) {
    console.log("Requested /quizzes/quizSave");
    var id = req.body.id;
    var globalQuestionList = req.body.globalQuestionList;
    console.log("== req.body:", req.body);

    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
    //data = data["quiz-array"];
    //var ourData = data[id];
    data[id]["quiz-array"] = globalQuestionList;
    
    
    
    fs.writeFileSync('./quizData.json', JSON.stringify(data, null, 2), 'utf8');  
    
    res.status(200).send("Success");
});


app.get('/quizzes/id/:id/name/:name', function (req, res, next) {
    console.log("&&&&= " + req.params);
    var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8'));
	var quizId = req.params.id.toLowerCase();
    var quizName = req.params.name.toLowerCase();
    
	if (data[quizId]) {
		res.render('quizzes', {"data": data[quizId], "id": quizId, "name": quizName});
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
