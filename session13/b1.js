function checkMyName() {
	var name = document.getElementById('name').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name!';
	} else {
		document.getElementById('errorName').innerHTML = '';
		// khi nay moi xu ly
		var spaceFirstName = name.indexOf(' ');
		var spaceLastName = name.lastIndexOf(' ');
		var FirstName = name.substring(0, spaceFirstName);
		var MidName = name.substring(spaceFirstName, spaceLastName);
		var LastName = name.substring(spaceLastName, name.length);
		document.getElementById('ex1').innerHTML = 'Ho la: '+ 
			FirstName + ' <br> Ten dem la: '
			+ MidName + '<br> Ten la: ' + LastName;
	}	

	//kiem tra chu n trong name
	var checkNinname = name.indexOf('n');
	if (checkNinname != -1) {
		document.getElementById('ex2').innerHTML = 'Co ky tu n';
	} else {
		document.getElementById('ex2').innerHTML = 'ko Co ky tu n';
	}
	document.getElementById('ex4').innerHTML = 
	FirstName + MidName + LastName.toUpperCase();
	document.getElementById('ex5').innerHTML =
	name.replace(MidName, '19PHP01');
	
}



