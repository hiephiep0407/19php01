function changeSlider(image, id) {

	document.getElementById('imageSlider').src = "image/" + image;
	switch (id) {
		case 'hinh1':
					document.getElementById('hinh1').style.color = "red";
					document.getElementById('hinh2').style.color = "black";
					document.getElementById('hinh3').style.color = "black";
					document.getElementById('hinh4').style.color = "black";
					document.getElementById('information').innerHTML = "This is De Gea, Manchester United FC";
					break;
			case 'hinh2':
					document.getElementById('hinh2').style.color = "red";
					document.getElementById('hinh1').style.color = "black";
					document.getElementById('hinh3').style.color = "black";
					document.getElementById('hinh4').style.color = "black";
					document.getElementById('information').innerHTML = "This is Messi, Barcelona FC";
					break;
			case 'hinh3':
					document.getElementById('hinh3').style.color = "red";
					document.getElementById('hinh2').style.color = "black";
					document.getElementById('hinh1').style.color = "black";
					document.getElementById('hinh4').style.color = "black";
					document.getElementById('information').innerHTML = "This is Kaka, Real FC";
					break;
			case 'hinh4':
					document.getElementById('hinh4').style.color = "red";
					document.getElementById('hinh2').style.color = "black";
					document.getElementById('hinh3').style.color = "black";
					document.getElementById('hinh1').style.color = "black";
					document.getElementById('information').innerHTML = "This is Ronaldo, Juventus FC";
					break;
	}

}