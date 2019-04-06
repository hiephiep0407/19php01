function sumNumber() {
	var number1; number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	if (number1 == '') {
		document.getElementById('result1').innerHTML = 'dien so';	
	} else if (number2 == '') {
		document.getElementById('result1').innerHTML = 'dien so';
	} else{
		document.getElementById('result1').innerHTML = parseInt(number1) + parseInt(number2);
	}
}
function subNumber() {
	var number1; number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;	
	document.getElementById('result2').innerHTML = parseInt(number1) - parseInt(number2);
	
}
function mulNumber() {
	var number1; number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('result3').innerHTML = parseInt(number1) * parseInt(number2);
}
function divNumber() {
	var number1; number2;
	number1 = document.getElementById('number1').value;
	number2 = document.getElementById('number2').value;
	document.getElementById('result4').innerHTML = parseInt(number1) / parseInt(number2);
}