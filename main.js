
function publishResult(){
	const html = document.getElementById("html").value;
	const es5 = document.getElementById("es5").value;
	const es6 = document.getElementById("es6").value;
	const php = document.getElementById("php").value;
	const java = document.getElementById("java").value;
	const Rnative = document.getElementById("Rnative").value;

let total = parseInt(html) + parseInt(es5) + parseInt(es6) + parseInt(php) + parseInt(java) + parseInt(Rnative);
document.getElementById("sum").innerHTML = "The sum is: " + total;

let score = parseInt((total * 100) / 600);  
document.getElementById("score").innerHTML = "Score is: " + score;

let result = designation;

var designation = (score >100) ? " Invalid !!!" 
	: (score >= 90 && score <=100) ? " Excellent" 
	: (score >= 80) ? " proficent" 
	: (score >= 70) ? " satisfactory" 
	: (score >=0 && score <=69) ? " unsatisfactory" : " NaN";

	document.getElementById("designation").innerHTML = designation;


}

