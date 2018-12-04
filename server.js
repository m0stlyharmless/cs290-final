const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
var fs = require('fs'); /* Put it where other modules included */
var data = JSON.parse(fs.readFileSync('./quizData.json', 'utf8')); /* Inside the get function */

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
  //console.log(res)
   console.log("Requested quizData.json");

  /* Insted of doing all this */
  // res.writeHead(200, {
  //    'Content-type': 'application/json'
  // });
  // res.end(JSON.stringify(data));

  /* Just send the file */
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

app.listen(port, function() {
	console.log("Server is on port", port);
});
