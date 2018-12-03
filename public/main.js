var hubS = document.getElementById('student-hub');
var hubT = document.getElementById('teacher-hub');
hubS.addEventListener('click', studentHub);
hubT.addEventListener('click', teacherHub);

sURL = window.location.protocol + '//' + window.location.host + '/student-hub';
tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub';


function studentHub() {
	window.location.href = sURL;
}

function teacherHub() {
	window.location.href = tURL;
}
