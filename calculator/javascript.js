var number1 = 0;
var tempheptoan = "";
function addNumber(id){
	temNumber = document.getElementById("number").value;
	document.getElementById("number").value =temNumber + id;
}
function pheptoan(id){
	number1 = document.getElementById("number").value;
	document.getElementById("number").value = "";
	tempheptoan = id;
}
function ketqua() {
	temNumber = document.getElementById("number").value;
	ketquapheptoan = parseInt(temNumber) + parseInt(number1);
	document.getElementById("number").value = ketquapheptoan;
}


// switch(tempheptoan){
// 		case "cong:"
// 			ketquapheptoan = parseInt(temNumber) + parseInt(number1);
// 			break;
// 		case "tru:"
// 			ketquapheptoan = parseInt(temNumber) - parseInt(number1);
// 			break;
// 		case "nhan:"
// 			ketquapheptoan = parseInt(temNumber) * parseInt(number1);
// 			break;
// 		case "chia:"
// 			ketquapheptoan = parseInt(temNumber) / parseInt(number1);
// 			break;
// 	}